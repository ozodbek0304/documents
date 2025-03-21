import Image from "next/image";
import React from "react";

export default function ProdcutImageSlider() {
  return (
    <div className="border rounded-md">
      <div className="h-[320px] sm:h-[500px] overflow-y-scroll flex flex-col items-center p-3 bg-blue-200">
        <Image
          src={
            "https://d2co7bxjtnp5o.cloudfront.net/media/Images/file-182145--16--18--29_page-1_generate.jpg"
          }
          width={1200}
          height={1200}
          alt="ffasda"
          className="rounded-sm w-[90%] sm:w-[80%]"
          priority
        />
      </div>
    </div>
  );
}
