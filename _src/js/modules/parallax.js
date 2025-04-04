import { parallaxMouse } from "parallax-mouse/dist/parallax-mouse.min.js";

export const parallax = () => {
  parallaxMouse({
    elements: ".parallax--left",
    moveFactor: 5,
    wrap: ".promo",
    perspective: "100px",
  });

  parallaxMouse({
    elements: ".parallax--right",
    moveFactor: 5,
    wrap: ".promo",
    perspective: "200px",
  });
};
