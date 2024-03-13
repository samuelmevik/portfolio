export type UserJSON = {
  name: string;
  avatar_url: string;
};

async function fetchUser(username: string) {
  const repoUrl = `https://api.github.com/users/${username}`;

  const repos = await fetch(repoUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!repos.ok) {
    throw new Error("Could not fetch repos");
  }
  return (await repos.json()) as UserJSON;
}

export type RepoJSON = {
  name: string;
  html_url: string;
  description?: string;
};

async function fetchRepo(username: string, slice = 4) {
  const repoUrl = `https://api.github.com/users/${username}/repos`;

  const repos = await fetch(repoUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!repos.ok) {
    throw new Error("Could not fetch repos");
  }
  const projects = (await repos.json()) as RepoJSON[];

  return projects.slice(0, slice);
}

export { fetchUser, fetchRepo };
