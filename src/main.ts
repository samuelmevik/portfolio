import setupMobileMenu from "./mobile-menu";
import setupTheme from "./theme";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("#mobile-menu")!
);

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggler")!);
