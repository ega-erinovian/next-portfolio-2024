"use client";

import { client, ResponseEntry } from "@/lib/contentful";
import { useEffect, useState } from "react";

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  content: any;
}

const useGetProject = (entryId: string) => {
  const [project, setProject] = useState<Project | null>(null);

  const getProject = async (entryId: string) => {
    try {
      const response: ResponseEntry = await client.getEntry(entryId);

      const project = {
        id: response.sys.id,
        title: response.fields.title,
        date: response.fields.date,
        description: response.fields.description,
        thumbnail: "https:" + response.fields.thumbnail?.fields.file.url,
        content: response.fields.content,
      };

      setProject(project);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject(entryId);
  }, [project]);

  return { project, getProject };
};

export default useGetProject;
