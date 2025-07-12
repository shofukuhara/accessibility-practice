import { gsap } from "gsap";

export class Accordion {
  constructor() {
    this.ok = {
      trigger: document.querySelector("[data-ok-trigger]"),
      item: document.querySelector("[data-ok-accordion]"),
      text: document.querySelector("[data-ok-text]"),
      icon: document.querySelector("[data-ok-icon]"),
    };

    this.IS_OPENED_CLASS = "is-opened";
  }

  init() {
    const { trigger, item, text, icon } = this.ok;

    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      const isOpened = item.classList.contains(this.IS_OPENED_CLASS);

      if (isOpened) {
        item.classList.remove(this.IS_OPENED_CLASS);
        this._close(item, text);
        gsap.set(icon, { rotate: 0 });
      } else {
        item.classList.add(this.IS_OPENED_CLASS);
        item.setAttribute("open", "true");
        this._open(text);
        gsap.set(icon, { rotate: -180 });
      }
    });
  }

  _open(content) {
    gsap.fromTo(
      content,
      { height: 0 },
      {
        height: "auto",
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      }
    );
  }

  _close(item, content) {
    gsap.to(content, {
      height: 0,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
      onComplete: () => {
        item.removeAttribute("open");
      },
    });
  }
}
