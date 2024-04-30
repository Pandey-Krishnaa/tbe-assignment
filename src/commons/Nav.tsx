import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { PiChartLineBold } from "react-icons/pi";
import { SlPlus } from "react-icons/sl";
import Link from "next/link";
function Nav({ className }: { className: string }) {
  return (
    <nav className={className}>
      <Link href="/">
        <GrHomeRounded size={18} />
      </Link>
      <Link href={"/category"}>
        <BiCategory size={18} />
      </Link>

      <Link href="/expense">
        <PiChartLineBold size={18} />
      </Link>
      <Link href="/expense/add">
        <SlPlus size={18} />
      </Link>
    </nav>
  );
}

export default Nav;
