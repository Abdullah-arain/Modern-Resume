import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/grid";
import { FaHome } from "react-icons/fa";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "../../data";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
};

export default page;
