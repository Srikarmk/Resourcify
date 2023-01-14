import Link from "next/link";
import React from "react";
import Button from "./Button";

const navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-start bg-gradient-to-r from-violet-300 to-violet-400 ">
        <div className="logo">
          <Link href="/">
            <img
              src="../logo.svg"
              alt="Resourcify"
              className="w-[100px] mt-[-10px]"
            />
          </Link>
        </div>
        <ul className="flex gap-3 items-center mt-3">
          <Link href="/" className="text-white font-semibold">
            Home
          </Link>
          <Link href="/" className="text-white font-semibold">
            Resources
          </Link>
          <Link href="/team" className="text-white font-semibold">
            Our Team
          </Link>
          <Link href="https://discord.gg/RMHKcb8xZR" className="mt-2">
            <Button btn="Join Now" />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
