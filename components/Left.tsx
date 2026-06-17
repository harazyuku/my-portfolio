import React from "react";

function Left() {
  return (
    <div className="flex h-full flex-1 items-center lg:items-end text-center lg:text-left">
      <div className="space-y-4 w-full">
        <p className="text-xs md:text-sm tracking-[0.4em] text-gray-300">
          WEB ENGINEER
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold leading-[1.1] lg:leading-[0.9]">
          IKehara
        </h1>

        <p className="text-xl md:text-3xl italic text-gray-200">
          Next.js / Laravel
        </p>
      </div>
    </div>
  );
}

export default Left;
