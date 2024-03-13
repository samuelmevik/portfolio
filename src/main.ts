import setupMobileMenu from "./mobile-menu";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("#mobile-menu")!
);
