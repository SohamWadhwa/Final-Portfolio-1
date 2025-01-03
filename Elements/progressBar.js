export class ProgressBar {
  constructor(options = {}) {
    this.progress = options.progress ?? 0;
    this.height = options.height ?? "8px";
    this.backgroundColor = options.backgroundColor ?? "#e5e7eb";
    this.fillColor = options.fillColor ?? "#3b82f6";
    this.rounded = options.rounded ?? true;
    this.duration = options.duration ?? 1000;

    this.element = this.createElement();
    this.setupIntersectionObserver();
  }

  createElement() {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = this.height;
    container.style.backgroundColor = this.backgroundColor;
    container.style.overflow = "hidden";
    if (this.rounded) {
      container.style.borderRadius = "9999px";
    }

    const fill = document.createElement("div");
    fill.style.width = "0%";
    fill.style.height = "100%";
    fill.style.backgroundColor = this.fillColor;
    fill.style.transition = `width ${this.duration}ms ease-out`;
    if (this.rounded) {
      fill.style.borderRadius = "9999px";
    }

    container.appendChild(fill);
    return container;
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = this.element.firstChild;
            fill.style.width = `${Math.min(Math.max(this.progress, 0), 100)}%`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.element);
  }

  mount(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    container.appendChild(this.element);
  }

  updateProgress(newProgress) {
    this.progress = newProgress;
    const fill = this.element.firstChild;
    fill.style.width = `${Math.min(Math.max(this.progress, 0), 100)}%`;
  }
}
