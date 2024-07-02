"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingNav = void 0;
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const cn_1 = require("@/utils/cn");
const link_1 = __importDefault(require("next/link"));
const FloatingNav = ({ navItems, className, }) => {
    const { scrollYProgress } = (0, framer_motion_1.useScroll)();
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, framer_motion_1.useMotionValueEvent)(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            }
            else {
                if (direction < 0) {
                    setVisible(true);
                }
                else {
                    setVisible(false);
                }
            }
        }
    });
    return (<framer_motion_1.AnimatePresence mode="wait">
      <framer_motion_1.motion.div initial={{
            opacity: 1,
            y: -100,
        }} animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
        }} transition={{
            duration: 0.2,
        }} className={(0, cn_1.cn)("flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4", className)}>
        {navItems.map((navItem, idx) => (<link_1.default key={`link=${idx}`} href={navItem.link} className={(0, cn_1.cn)("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}>
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </link_1.default>))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"/>
        </button>
      </framer_motion_1.motion.div>
    </framer_motion_1.AnimatePresence>);
};
exports.FloatingNav = FloatingNav;
