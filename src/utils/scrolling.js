export const scrollToBlock = (id) => {
  const element = document.getElementById(id);
  const navbar = document.querySelector(".navbar");

  const remToPx = (rem) => {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    return rem * rootFontSize;
  };

  if (element && navbar) {
    const navHeightRem = parseFloat(
      getComputedStyle(navbar).getPropertyValue("--nav-height"),
    );
    const navbarHeight = remToPx(navHeightRem);

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
