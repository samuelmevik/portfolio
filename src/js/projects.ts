import { RepoJSON } from "./github";

function useProjects(element: HTMLUListElement, projects: RepoJSON[]) {
  element.innerHTML = projects
    .map(
      (project) => `
      <li class="rounded-md border-2 border-zinc-900 p-5 dark:border-zinc-300">
      <div class="pb-4">
        <h3 class="text-xl underline">${project.name}</h3>
        <p class="line-clamp-4 text-sm">
          ${project.description || "No description"}
        </p>
      </div>
      <a
        href="${project.html_url}"
        class="text-primary transition-colors duration-500 hover:text-primary-dark"
        >Link to repository
      </a>
    </li>
  `
    )
    .join("");
}

export default useProjects;
