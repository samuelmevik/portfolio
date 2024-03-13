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

export default fetchUser;
