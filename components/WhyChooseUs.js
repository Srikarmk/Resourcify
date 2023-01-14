import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 gap-3 bg-gradient-to-r from-violet-300 to-violet-400">
        <hr className="w-[50%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
        <h1 className="text-lg font-bold text-white bg-black p-3 rounded-lg">
          Why Choose Us
        </h1>
        <h3 className="bg-green-100 text-center text-black p-2 rounded-md w-[70%]">
          Wide range of programming languages and technologies covered
        </h3>
        <h3 className="bg-green-100 text-center text-black p-2 rounded-md w-[70%]">
          Accessible and inclusive platform
        </h3>
        <h3 className="bg-green-100 text-center text-black p-2 rounded-md w-[70%]">
          Connect with other learners and get help from experienced developers
        </h3>
        <h3 className="bg-green-100 text-center text-black p-2 rounded-md w-[70%]">
          Resources for all skill levels, from beginner to advanced
        </h3>
        <h3 className="bg-green-100 text-center text-black p-2 rounded-md w-[70%]">
          Free to access
        </h3>
      </div>
    </>
  );
};

export default WhyChooseUs;
