import { gsap } from "gsap";

export class Accordion {
  constructor() {
    this.IS_OPENED_CLASS = "is-opened";

    this.targets = [
      {
        trigger: document.querySelector("[data-ok-trigger]"),
        item: document.querySelector("[data-ok-accordion]"),
        text: document.querySelector("[data-ok-text]"),
        icon: document.querySelector("[data-ok-icon]"),
      },
      {
        trigger: document.querySelector("[data-ng-trigger]"),
        item: document.querySelector("[data-ng-accordion]"),
        text: document.querySelector("[data-ng-text]"),
        icon: document.querySelector("[data-ng-icon]"),
      },
    ];
  }

  init() {
    this.targets.forEach(({ trigger, item, text, icon }) => {

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
