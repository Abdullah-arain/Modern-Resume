"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BentoGridItem = exports.BentoGrid = void 0;
const cn_1 = require("@/utils/cn");
const background_gradient_animation_1 = require("./background-gradient-animation");
const GridGlobe_1 = require("./GridGlobe");
const react_1 = require("react");
const react_lottie_1 = __importDefault(require("react-lottie"));
const confetti_json_1 = __importDefault(require("@/utils/confetti.json"));
const button_1 = __importDefault(require("./button"));
const io5_1 = require("react-icons/io5");
let course = ["React", "Next.js", "TypeScript"];
let courses = ["VueJS", "AWS", "MongoDB"];
const BentoGrid = ({ className, children, }) => {
    return (<div className={(0, cn_1.cn)("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className)}>
      {children}
    </div>);
};
exports.BentoGrid = BentoGrid;
const BentoGridItem = ({ className, title, description, icon, id, spareImg, img, titleClassName, imgClassName, }) => {
    const [copied, setCopied] = (0, react_1.useState)(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("abdullaharain1309@gmail.com");
        setCopied(true);
    };
    return (<div className={(0, cn_1.cn)("row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]", className)} style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12, 14, 35, 1) 100%)",
        }}>
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (<img src={img} alt={img} className={(0, cn_1.cn)(imgClassName, "object-cover object-center")}/>)}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (<img src={spareImg} alt={spareImg} className={(0, cn_1.cn)(imgClassName, "object-cover object-center w-full h-full")}/>)}
        </div>

        {id === 6 && (<background_gradient_animation_1.BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </background_gradient_animation_1.BackgroundGradientAnimation>)}

        <div className={(0, cn_1.cn)(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe_1.GlobeDemo />}

          {id === 3 && (<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {course.map((item) => (<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                    {item}
                  </span>))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {courses.map((item) => (<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                    {item}
                  </span>))}
              </div>
            </div>)}
          {id === 6 && (<div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <react_lottie_1.default options={{
                loop: copied,
                autoplay: copied,
                animationData: confetti_json_1.default,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                },
            }}/>
              </div>

              <button_1.default title={copied ? 'Email Copied' : 'Copy my Email'} icon={<io5_1.IoCopyOutline />} position="left" otherClasses="!bg-[#161a31]" handleClick={handleCopy}/>
            </div>)}
        </div>
      </div>
    </div>);
};
exports.BentoGridItem = BentoGridItem;
