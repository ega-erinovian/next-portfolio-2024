"use client";

import { client, ResponseEntry } from "@/lib/contentful";
import { useEffect, useState } from "react";

export interface Experience {
  id: string;
  title: string;
  description: string;
  company: string;
  duration: string;
}

const useGetExperiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const getExperiences = async () => {
    try {
      const response = await client.getEntries({
        content_type: "experiences",
      });

      const experiences = response.items.map((experience: ResponseEntry) => {
        return {
          id: experience.sys.id,
          title: experience.fields.title,
          description: experience.fields.description,
          company: experience.fields.company,
          duration: experience.fields.duration,
        };
      });

      setExperiences(experiences);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [experiences]);

  return { experiences, getExperiences };
};

export default useGetExperiences;
