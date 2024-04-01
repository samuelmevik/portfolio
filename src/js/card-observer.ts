const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle("show", entry.isIntersecting);
    }
  },
  { rootMargin: "0px 0px -100px 0px" },
);

function setupCardObserver(elements: NodeListOf<HTMLElement>) {
  try {
    for (const element of elements) {
      observer.observe(element);
    }
  } catch (error) {
    console.error("Card observer error:", error);
  }
}

export default setupCardObserver;
