import React from "react";

const Features = () => {
  return (
    <>
      <section className="flex flex-col w-full md:flex-row justify-around p-10 bg-gradient-to-r from-violet-300 to-violet-400">
        <div>
          <img src="../coding.svg" alt="coding" className="w-[300px]" />
        </div>
        <div className="drop-shadow-xl flex flex-col gap-4">
          <h1 className="font-bold text-white">
            Your One-Stop-Shop for Coding Resources
          </h1>
          <h3 className="mt-6  text-blue-700 p-3 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold">
            Comprehensive collection of coding resources
          </h3>
          <h3 className="p-3 text-blue-700 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold">
            Resources for all skill levels, from beginner to advanced
          </h3>
          <h3 className="p-3 text-blue-700 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold">
            Interactive tutorials, video lessons, and coding challenges
          </h3>
        </div>
      </section>
    </>
  );
};

export default Features;
