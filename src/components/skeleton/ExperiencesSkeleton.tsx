import { Skeleton } from "@/components/ui/skeleton";

const ExperiencesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, idx) => (
        <div className="border-l-4 border-white pl-4 py-4 mb-8" key={idx}>
          <Skeleton className="mb-2 h-12 w-full" />
          <div className="flex flex-wrap gap-1 mb-2">
            <Skeleton className="h-4 w-20 md:w-32" />
            <span className="text-[#999999]">• </span>
            <Skeleton className="h-4 w-24 md:w-40" />
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </>
  );
};

export default ExperiencesSkeleton;
