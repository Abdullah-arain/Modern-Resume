"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bento_grid_1 = require("./ui/bento-grid");
const data_1 = require("../../../data");
const Grid = () => {
    return (<section id="about">
      <bento_grid_1.BentoGrid>
        {data_1.gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg, }) => (<bento_grid_1.BentoGridItem id={id} key={id} title={title} description={description} className={className} imgClassName={imgClassName} titleClassName={titleClassName} img={img} spareImg={spareImg}/>))}
      </bento_grid_1.BentoGrid>
    </section>);
};
exports.default = Grid;
