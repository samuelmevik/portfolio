import useAvatar from "./js/avatar";
import setupMobileMenu from "./js/mobile-menu";
import setupTheme from "./js/theme";
import fetchUser from "./js/user";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("#mobile-menu")!
);

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggler")!);

const user = await fetchUser("samuelmevik");

useAvatar(document.querySelector<HTMLImageElement>("#avatar")!, user);
