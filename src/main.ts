import setupMobileMenu from "./js/mobile-menu";
import setupTheme from "./js/theme";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("#mobile-menu")!,
);

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggler")!);
