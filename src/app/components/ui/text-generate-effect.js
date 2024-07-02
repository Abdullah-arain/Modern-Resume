"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextGenerateEffect = void 0;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const cn_1 = require("@/utils/cn");
const TextGenerateEffect = ({ words, className, }) => {
    const [scope, animate] = (0, framer_motion_1.useAnimate)();
    let wordsArray = words.split(" ");
    (0, react_1.useEffect)(() => {
        animate("span", {
            opacity: 1,
        }, {
            duration: 2,
            delay: (0, framer_motion_1.stagger)(0.2),
        });
    }, [scope.current]);
    const renderWords = () => {
        return (<framer_motion_1.motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
                return (<framer_motion_1.motion.span key={word + idx} className={`${idx > 3 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}>
              {word}{" "}
            </framer_motion_1.motion.span>);
            })}
      </framer_motion_1.motion.div>);
    };
    return (<div className={(0, cn_1.cn)("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>);
};
exports.TextGenerateEffect = TextGenerateEffect;
