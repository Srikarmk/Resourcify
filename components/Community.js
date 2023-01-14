import React from "react";
import Button from "./Button";
import Link from "next/link";

const Community = () => {
  return (
    <>
      <div className="flex gap-5 flex-col text-gray-900 items-center justify-center h-[400px] w-full  relative bg-gradient-to-r from-violet-300 to-violet-400">
        <h1 className="text-center font-bold text-3xl z-10">
          170+ Programmers <br />
          already connected with us
        </h1>
        <p className="mx-5 text-lg z-10">
          We understand that learning to code can be challenging, that's why our
          platform is designed to be as accessible and inclusive as possible.
        </p>
        <Link href="https://discord.gg/RMHKcb8xZR">
          <Button btn="Join Now" custom={`mt-5 font-semibold`} />
        </Link>
        <img
          src="../discord.png"
          alt="discord"
          className="w-[250px] absolute top-0 left-[20%] -rotate-12 z-0"
        />
      </div>
    </>
  );
};

export default Community;
