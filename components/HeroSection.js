import React from "react";
import Button from "./Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full py-10 flex-col lg:flex-row bg-gradient-to-r from-violet-300 to-violet-400">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-lg font-semibold mx-3 ml-[50px]">
            Want to learn coding but don't know where to start? <br /> Look no
            further than{" "}
            <span className="text-white text-3xl font-bold">Resourcify!</span>
            <br /> We provide a vast collection of high-quality coding resources
            for all skill levels.
          </h1>

          <Link href="https://discord.com/api/oauth2/authorize?client_id=1033435229744013413&permissions=534723951680&scope=bot">
            <Button
              btn="Add to your Server"
              className="ml-7"
              custom={`ml-10 mt-5`}
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="../hero1.svg" alt="hero" className="h-[370px]" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
