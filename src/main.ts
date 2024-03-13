import useAvatar from "./js/avatar";
import setupMobileMenu from "./js/mobile-menu";
import setupTheme from "./js/theme";
import { fetchRepo, fetchUser } from "./js/github";
import useProjects from "./js/projects";

const name = "samuelmevik";

setupMobileMenu(
  document.querySelector<HTMLButtonElement>("#mobile-toggler")!,
  document.querySelector<HTMLDivElement>("#mobile-menu")!
);

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggler")!);

const user = await fetchUser(name);

useAvatar(document.querySelector<HTMLImageElement>("#avatar")!, user);

const repos = await fetchRepo(name);

useProjects(document.querySelector<HTMLUListElement>("#projects")!, repos);
