import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function ProductImageSlider({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const images = scrollRef.current.children;
    if (images.length === 0) return;
    images[images.length - 1].scrollIntoView({ behavior: "instant" });

    setTimeout(() => {
      images[0]?.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  }, [images]);

  return (
    <div className="border rounded-xl ">
      <div
        ref={scrollRef}
        className="h-[320px] sm:h-[500px] py-2 overflow-y-scroll flex flex-col items-center rounded-xl p-3 bg-gray-50"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image as any}
            width={1200}
            height={1200}
            alt={`Product image ${index}`}
            className="rounded-xl  w-[90%] sm:w-[80%] mb-3"
            priority
          />
        ))}
      </div>
    </div>
  );
}
