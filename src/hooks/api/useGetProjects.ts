"use client";

import { client, ResponseEntry } from "@/lib/contentful";
import { useEffect, useState } from "react";

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  content: string;
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
          date: project.fields.date,
          description: project.fields.description,
          thumbnail: "https:" + project.fields.thumbnail?.fields.file.url,
          content: project.fields.content,
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
