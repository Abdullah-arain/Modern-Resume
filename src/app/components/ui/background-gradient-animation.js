"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundGradientAnimation = void 0;
const cn_1 = require("@/utils/cn");
const react_1 = require("react");
const BackgroundGradientAnimation = ({ gradientBackgroundStart = "rgb(108, 0, 162)", gradientBackgroundEnd = "rgb(0, 17, 82)", firstColor = "18, 113, 255", secondColor = "221, 74, 255", thirdColor = "100, 220, 255", fourthColor = "200, 50, 50", fifthColor = "180, 180, 50", pointerColor = "140, 100, 255", size = "80%", blendingValue = "hard-light", children, className, interactive = true, containerClassName, }) => {
    const interactiveRef = (0, react_1.useRef)(null);
    const [curX, setCurX] = (0, react_1.useState)(0);
    const [curY, setCurY] = (0, react_1.useState)(0);
    const [tgX, setTgX] = (0, react_1.useState)(0);
    const [tgY, setTgY] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);
    (0, react_1.useEffect)(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        move();
    }, [tgX, tgY]);
    const handleMouseMove = (event) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };
    const [isSafari, setIsSafari] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);
    return (<div className={(0, cn_1.cn)("h-full w-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", containerClassName)}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/>
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>
      <div className={(0, cn_1.cn)("", className)}>{children}</div>
      <div className={(0, cn_1.cn)("gradients-container h-full w-full blur-lg", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]")}>
        <div className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:center_center]`, `animate-first`, `opacity-100`)}></div>
        <div className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-400px)]`, `animate-second`, `opacity-100`)}></div>
        <div className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%+400px)]`, `animate-third`, `opacity-100`)}></div>
        <div className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-200px)]`, `animate-fourth`, `opacity-70`)}></div>
        <div className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-800px)_calc(50%+800px)]`, `animate-fifth`, `opacity-100`)}></div>

        {interactive && (<div ref={interactiveRef} onMouseMove={handleMouseMove} className={(0, cn_1.cn)(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`, `opacity-70`)}></div>)}
      </div>
    </div>);
};
exports.BackgroundGradientAnimation = BackgroundGradientAnimation;
