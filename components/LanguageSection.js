import React from "react";
import CodeCard from "./CodeCard";

const LanguageSection = () => {
  return (
    <>
      <div className="py-5 bg-gradient-to-r from-violet-300 to-violet-400">
        <h1 className="font-semibold ml-4">Popular programming languages </h1>
        <div className="flex flex-wrap justify-center gap-1">
          <CodeCard />
        </div>
      </div>
    </>
  );
};

export default LanguageSection;
