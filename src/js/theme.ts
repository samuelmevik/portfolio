type Theme = "light" | "dark";

function getTheme(): Theme {
  if (!localStorage.getItem("theme")) {
    return matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return localStorage.getItem("theme") as Theme;
}

function setupTheme(element: HTMLButtonElement) {
  element.addEventListener("click", () => {
    setTheme(getTheme() === "light" ? "dark" : "light");
  });
  setTheme(getTheme());
}

function setTheme(theme: Theme) {
  try {
    console.log("Setting theme to: " + theme);
    switch (theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        break;
    }
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.error("Theme error:", error);
  }
}

export default setupTheme;
