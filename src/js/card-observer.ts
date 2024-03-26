const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "0px 0px -150px 0px" },
);

function setupCardObserver(elements: NodeListOf<HTMLElement>) {
  for (const element of elements) {
    observer.observe(element);
  }
}

export default setupCardObserver;
