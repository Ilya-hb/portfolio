import Header from "./components/Header";
import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { LuDog } from "react-icons/lu";

function App() {
  return (
    <>
      <div className="">
        <Header />

        <aside className="flex w-1/4 bg-primaryDark h-screen border-r-1 border-primaryLight">
          <div className="flex flex-col h-full items-center border-r-1 border-primaryLight space-y-6">
            <div className="border-highlight border-l-2 w-full p-3">
              <VscFiles className="icon text-3xl" />
            </div>
            <VscSearch className="icon text-3xl" />
            <IoIosGitBranch className="icon text-3xl" />
            <VscDebugAlt className="icon text-3xl" />

            <VscExtensions className="icon text-3xl" />
            <LuDog className="icon text-3xl" />
          </div>
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
