"use client";

import useGetProject from "@/hooks/api/useGetProject";
import useFormatDate from "@/hooks/formatter/useDateFormatter";
import { playfairDisplay } from "@/utils/font";
import Image from "next/image";
import { FC, useState } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Node } from "@contentful/rich-text-types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailProps {
  id: string;
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-bold">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className="italic">{text}</em>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold">{children}</h1>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="text-xl font-light">{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => (
      <div className="relative w-full h-[200px] md:h-[420px] lg:h-[600px] xl:h-[800px]">
        <Image
          className="rounded-xl md:rounded-2xl object-cover"
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title}
          fill
          loading="lazy"
        />
      </div>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <Link href={node.data.uri} className="text-blue-600 underline">
        {children}
      </Link>
    ),
  },
};

const ProjectDetailComponent: FC<ProjectDetailProps> = ({ id }) => {
  const { project } = useGetProject(id);
  const [color, setColor] = useState("");

  return (
    <div className="container relative mx-auto overflow-hidden px-3 h-full w-full max-w-screen flex justify-center items-center py-12">
      <div className="w-full grid gap-8">
        <Link
          href={"/#projects"}
          className="group underline-offset-4 flex items-center gap-2 hover:bg-[#aaeec3] hover:text-black w-fit px-4 py-2 rounded-full"
          onMouseEnter={() => setColor("#000")}
          onMouseLeave={() => setColor("#fff")}>
          <ArrowLeft size={20} color={color || "#fff"} />
          Home
        </Link>
        <div className="flex justify-between items-baseline">
          <h1
            className={`text-6xl font-bold md:text-9xl ${playfairDisplay.className} mb-3 md:mb-7`}>
            {project?.title}
          </h1>
          <p className="text-gray-500 text-xl font-light">
            {useFormatDate(project?.date || String(new Date()))}
          </p>
        </div>
        <div className="relative w-full h-[200px] md:h-[420px] lg:h-[600px] xl:h-[800px]">
          <Image
            className="rounded-xl md:rounded-2xl object-cover"
            src={project?.thumbnail!}
            alt="project1"
            fill
            loading="lazy"
          />
        </div>
        <div className="grid gap-4 lg:gap-6">
          {documentToReactComponents(project?.content, options)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailComponent;
