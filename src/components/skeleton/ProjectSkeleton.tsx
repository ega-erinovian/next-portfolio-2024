import SectionTitle from "../SectionTitle";
import { Skeleton } from "../ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <div
      className="container relative mx-auto overflow-hidden px-3 h-full flex justify-center items-center py-20"
      id="projects">
      <div className="relative w-full">
        <SectionTitle title="Projects" />
        <div className="px-2 md:pt-64">
          {[...Array(3)].map((_, index) => (
            <div className="container mt-36 md:mt-20 w-full" key={index}>
              <hr className="border-gray-300" />
              <div className="mt-20 md:mt-24 w-full">
                <Skeleton className="mb-6 h-8 w-24" />
                <Skeleton className="mb-2 h-10 w-full max-w-[80%] md:mb-6 md:h-16" />
                <Skeleton className="mb-6 h-6 w-full max-w-[60%] md:h-8" />
                <Skeleton className="mb-4 h-6 w-full md:h-8" />
                <Skeleton className="mb-4 h-6 w-full max-w-[90%] md:h-8" />
                <Skeleton className="mb-10 h-6 w-full max-w-[70%] md:h-8" />
                <Skeleton className="relative w-full h-[200px] md:h-[420px] lg:h-[600px] xl:h-[800px] rounded-xl md:rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
