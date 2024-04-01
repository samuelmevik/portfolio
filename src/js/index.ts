import setupCardObserver from "./card-observer";
import setupMobileMenu from "./mobile-menu";
import setupTheme from "./theme";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("header")!,
);

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggler")!);

setupCardObserver(document.querySelectorAll<HTMLElement>(".card"));
