"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spotlight_1 = require("./ui/Spotlight");
const text_generate_effect_1 = require("./ui/text-generate-effect");
const button_1 = __importDefault(require("./ui/button"));
const fa_1 = require("react-icons/fa");
const Hero = () => {
    return (<div className="pb-20 pt-36">
      <div>
        <Spotlight_1.Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight_1.Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight_1.Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic With Next.js
          </h2>

          <text_generate_effect_1.TextGenerateEffect className="text-center text-[40px] md:text-3xl lg:text-5xl mb-3" words="Transforming Concepts into Seamless User Experiences"/>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I&apos;m Abdullah, a Next.js Developer based in Karachi.
          </p>

          <a href="#about">
            <button_1.default title="Show my work" icon={<fa_1.FaLocationArrow />} position="right"/>
          </a>
        </div>
      </div>
    </div>);
};
exports.default = Hero;
