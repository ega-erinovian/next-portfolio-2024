import { Skeleton } from "@/components/ui/skeleton";

const ExperiencesSkeleton = () => {
  const skeletonItems = Array(3).fill(null);

  return (
    <div
      className="container relative mx-auto mb-56 w-full overflow-hidden px-3"
      id="experiences">
      <div className="pe-2 ps-6 pt-16 md:mx-auto md:w-10/12 md:pt-44 xl:mx-0 xl:ps-60">
        {skeletonItems.map((_, idx) => (
          <div className="mb-20" key={idx}>
            <Skeleton className="mb-2 h-12 w-3/4 md:mb-6 md:h-16 lg:h-20" />
            <div className="text-[#999999] md:text-xl">
              <div className="mb-6 flex items-center space-x-2">
                <Skeleton className="h-6 w-32 md:h-8 md:w-40" />
                <Skeleton className="h-6 w-24 md:h-8 md:w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesSkeleton;
