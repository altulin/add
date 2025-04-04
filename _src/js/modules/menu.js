import MmenuLight from "mmenu-light";

export const makeMenu = () => {
  const menuEl = document.querySelector("#sidebar");
  const close = document.querySelector(".sidebar__close");
  const burger = document.querySelector(".burger");
  // reset
  const ocdList = Array.from(document.querySelectorAll(".mm-ocd"));

  ocdList.forEach((item) => {
    item.remove();
  });

  if (!menuEl || !close || !burger) return;

  const menu = new MmenuLight(menuEl, "(max-width: 1200px)");
  const drawer = menu.offcanvas({});
  burger.addEventListener("click", () => drawer.open());
  close.addEventListener("click", () => drawer.close());

  return;
};
