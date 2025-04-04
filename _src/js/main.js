// import * as dotenv from "dotenv";

import { makeHoverLink } from "./modules/hover.js";
import { makeMenu } from "./modules/menu.js";
import { parallax } from "./modules/parallax.js";
import { makeSlider } from "./modules/slider.js";
import { startTimer } from "./modules/timer.js";

const handler = () => {
  makeMenu();
  makeSlider();
  makeHoverLink();
};

const handlerContent = () => {
  startTimer(1800);
  parallax();
};

document.addEventListener("DOMContentLoaded", handlerContent);

window.onload = handler;
window.onresize = handler;
