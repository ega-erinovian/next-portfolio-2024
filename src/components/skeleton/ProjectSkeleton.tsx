import { Skeleton } from "../ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => (
        <div key={index}>
          <Skeleton className="w-full h-[200px] md:h-[280px] lg:h-[380px] xl:h-[560px] rounded-xl md:rounded-2xl mb-4" />
          <Skeleton className="mb-4 h-8 w-56 lg:w-96" />
          <Skeleton className="mb-6 h-8 w-32 lg:w-56" />
        </div>
      ))}
    </>
  );
};

export default ProjectSkeleton;
