function setupMobileMenu(button: HTMLButtonElement, menu: HTMLElement) {
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (menu.classList.contains("hidden")) {
      return;
    }
    if (event.target === button || button.contains(event.target as Node)) {
      return;
    }
    menu.classList.add("hidden");
  });
}

export default setupMobileMenu;
