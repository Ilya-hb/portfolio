import React from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { RiCopilotFill } from "react-icons/ri";
import { VscChevronDown } from "react-icons/vsc";
import { VscLayout } from "react-icons/vsc";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { VscLayoutPanel } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="w-screen h-10 border-b-2 border-primaryLight flex items-center justify-center relative">
      <div className="flex items-center gap-3">
        <VscArrowLeft className="icon text-2xl " />
        <VscArrowRight className="text-2xl icon" />
        <div className="w-[600px] bg-primayWhite border-neutral-600 rounded-md border-1 flex justify-center items-center hover:bg-neutral-700 transition duration-200 cursor-pointer gap-x-1">
          <VscSearch />
          <h1>portfolio</h1>
        </div>
        <div className=" flex items-center icon">
          <RiCopilotFill className="text-2xl icon mr-[2px]" />
          <VscChevronDown className="text-xl icon" />
        </div>
      </div>
      <div className="flex gap-1 absolute right-4">
        <VscLayout className="icon text-2xl" />
        <VscLayoutSidebarLeft className="icon text-2xl" />
        <VscLayoutPanel className="icon text-2xl" />
        <VscLayoutSidebarRightOff className="icon text-2xl" />
      </div>
    </header>
  );
}
