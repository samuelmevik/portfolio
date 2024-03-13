function setupMobileMenu(button: HTMLButtonElement, menu: HTMLElement) {
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (menu.classList.contains("hidden")) {
      return;
    }

    if (event.target !== button && !menu.contains(event.target as Node)) {
      menu.classList.add("hidden");
    }
  });
}

export default setupMobileMenu;
