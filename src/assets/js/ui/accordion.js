import { gsap } from "gsap";

export class Accordion {
  constructor() {
    this.ngItem = document.querySelector("[data-ng-accordion]");
    this.ngText = document.querySelector("[data-ng-text]");
  }

  init() {
    this.ngItem.addEventListener("click", () => {
      if (this.ngItem.getAttribute("data-ng-accordion") === "closed") {
        this._open();
      } else {
        this._close();
      }
    });
  }

  _open() {
    gsap.fromTo(
      this.ngText,
      { height: 0 },
      {
        height: "auto",
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          this.ngItem.setAttribute("data-ng-accordion", "open");
        },
      }
    );
  }

  _close() {
    gsap.to(this.ngText, {
      height: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        this.ngItem.setAttribute("data-ng-accordion", "closed");
      },
    });
  }
}
