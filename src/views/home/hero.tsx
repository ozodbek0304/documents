import ParamInput from "@/components/param/input";
import React from "react";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url('/assets/banner2.webp')` }}
      className="bg-cover bg-no-repeat py-10"
    >
      <div className="container mx-auto">
        <div className="py-5">
          <ParamInput />
        </div>
      </div>
    </section>
  );
}
