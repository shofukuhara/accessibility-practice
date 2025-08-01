import { gsap } from "gsap";

export class ButtonAction {
  constructor() {
    this.button = {
      ok: document.querySelectorAll("[data-ok-button]"),
      custumOk: document.querySelector("[data-ok-custum-button]"),
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
        alert("OK button action");
      });
    });

    this.button.ng.addEventListener("click", (e) => {
      e.preventDefault();
      alert("NG button action");
    });

    this.button.custumOk.addEventListener("click", (e) => {
      e.preventDefault();
      alert("custumOK button action");
    });

    this.button.custumOk.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        alert("custumOK button action");
      }
    });
  }
}
