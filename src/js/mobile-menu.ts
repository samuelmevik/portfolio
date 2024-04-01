function setupMobileMenu(button: HTMLButtonElement, menu: HTMLDivElement) {
  try {
    button.addEventListener("click", () => {
      menu.classList.toggle("showing");
      document.body.classList.toggle("overflow-y-hidden");
    });
  } catch (error) {
    console.error("Mobile menu error:", error);
  }
}

export default setupMobileMenu;
