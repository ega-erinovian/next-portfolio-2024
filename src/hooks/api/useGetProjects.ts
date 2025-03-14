"use client";

import { client, ResponseEntry } from "@/lib/contentful";
import { useEffect, useState } from "react";

export interface Project {
  id: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  content?: string;
  url?: string;
}

const useGetProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      const projects = response.items.map((project: ResponseEntry) => {
        return {
          id: project.sys.id,
          title: project.fields.title,
          category: project.fields.category,
          date: project.fields.date,
          thumbnail: "https:" + project.fields.thumbnail?.fields.file.url,
          content: project.fields.content,
          url: project.fields.url,
        };
      });

      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [projects]);

  return { projects, getProjects };
};

export default useGetProjects;
