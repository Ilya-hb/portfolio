import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { RiCopilotFill } from "react-icons/ri";
import { VscChevronDown } from "react-icons/vsc";
import { VscLayout } from "react-icons/vsc";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { VscLayoutPanel } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";

function App() {
  return (
    <>
      <div className="">
        <header className="w-screen h-10 border-b-2 border-primaryLight flex items-center justify-center relative">
          <div className="flex items-center gap-3">
            <VscArrowLeft className="icon text-lg " />
            <VscArrowRight className="text-lg icon" />
            <div className="w-[600px] bg-primayWhite border-neutral-600 rounded-md border-1 flex justify-center items-center hover:bg-neutral-700 transition duration-200 cursor-pointer gap-x-1">
              <VscSearch className="" />
              <h1>portfolio</h1>
            </div>
            <div className=" flex items-center icon">
              <RiCopilotFill className="text-xl icon mr-[2px]" />
              <VscChevronDown className="text-sm icon" />
            </div>
          </div>
          <div className="flex gap-1 absolute right-4">
            <VscLayout className="icon text-xl" />
            <VscLayoutSidebarLeft className="icon text-xl" />
            <VscLayoutPanel className="icon text-xl" />
            <VscLayoutSidebarRightOff className="icon text-xl" />
          </div>
        </header>

        <aside className="flex flex-col w-1/4 bg-primaryDark h-screen border-2-1 border-primaryLight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quis
          debitis vitae quia ipsa porro doloribus harum omnis excepturi ad quo
          asperiores unde reiciendis nam maxime totam enim, soluta laborum?
          <nav></nav>
        </aside>
        <div className="w-3/4 flex"></div>
      </div>
    </>
  );
}

export default App;
