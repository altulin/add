export const makeHoverLink = () => {
  const links = Array.from(document.querySelectorAll(".link-js"));

  links.forEach((item) => {
    const className = "offer__inner";
    const parent = item.closest(`.${className}`);

    if (!parent) return;

    item.addEventListener("mouseenter", () =>
      parent.classList.add(`${className}--hover`)
    );
    item.addEventListener("mouseleave", () =>
      parent.classList.remove(`${className}--hover`)
    );
  });
};
