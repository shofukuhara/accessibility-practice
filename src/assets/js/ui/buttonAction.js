import { gsap } from "gsap";

export class ButtonAction {
  constructor() {
    this.button = {
      ok: document.querySelectorAll("[data-ok-button]"),
      ng: document.querySelector("[data-ng-button]"),
    };
  }

  init() {
    this._action();
  }
  _action() {
    this.button.ok.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("OK button clicked");
      });
    });

    this.button.ng.addEventListener("click", (e) => {
      e.preventDefault();
      alert("NG button clicked");
    });
  }
}
