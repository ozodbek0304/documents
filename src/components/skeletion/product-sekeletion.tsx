import { Skeleton } from "@/components/ui/skeleton";

export default function DocumentListingSkeleton({
  length,
  hiddenHead=false,
}: {
  length: number;
  hiddenHead?: boolean;
}) {
  const skeletonItems = Array.from({ length: length }, (_, i) => i);

  return (
    <>
      {hiddenHead && (
        <div className="w-full mb-4 py-2 col-span-5 border-b flex items-center gap-3">
          <Skeleton className="h-10 w-[40px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      )}
      {skeletonItems.map((index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-md transition-shadow"
        >
          <div className="relative border-b p-4 flex justify-center">
            <Skeleton className="h-[150px] w-[120px]" />
            <Skeleton className="absolute top-2 right-2 h-5 w-12 rounded-full" />
          </div>

          <div className="p-4 flex-1">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />

            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Skeleton className="h-3 w-3 mr-1 rounded-full" />
              <Skeleton className="h-3 w-16" />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <Skeleton className="h-3 w-12" />
              <div className="flex items-center">
                <Skeleton className="h-3 w-3 mr-1 rounded-full" />
                <Skeleton className="h-3 w-4" />
              </div>
            </div>
          </div>

          <div className="border-t p-3 flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
}
