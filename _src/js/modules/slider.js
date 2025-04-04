import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export const makeSlider = () => {
  if (window.innerWidth > 767) return;

  new Swiper(".offers__swiper", {
    cssMode: true,
    spaceBetween: 20,
    modules: [Pagination],
    pagination: {
      el: ".offers__pagination",
      type: "bullets",
      bulletActiveClass: "offers__pagination--active",
      bulletClass: "offers__pagination--item",
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 0,
      },
    },
  });
};
