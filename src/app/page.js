"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./components/Hero"));
const floating_navbar_1 = require("./components/ui/floating-navbar");
const grid_1 = __importDefault(require("./components/grid"));
const RecentProjects_1 = __importDefault(require("./components/RecentProjects"));
const data_1 = require("../../data");
const page = () => {
    return (<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <floating_navbar_1.FloatingNav navItems={data_1.navItems}/>
        <Hero_1.default />
        <grid_1.default />
        <RecentProjects_1.default />
      </div>
    </main>);
};
exports.default = page;
