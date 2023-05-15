import { insertAt } from "../BaseComponent";
import Tool from "./Tool";

export default class Eraser extends Tool {
  constructor(pathD: string) {
    super("toolbar", "eraser", pathD, "button");
    this.element.setAttribute("id", "eraser");
    this.configureFormSettings();
  }
  private configureFormSettings() {
    const formElement = document.createElement("form");
    const label = document.createElement("label");
    const rangeInput = document.createElement("input");
    formElement.setAttribute("id", "eraser-settings");
    label.setAttribute("for", "eraser-value");
    label.textContent = "Eraser Size";
    rangeInput.type = "range";
    rangeInput.id = "eraser-value";
    rangeInput.value = "25";

    formElement.insertAdjacentElement(insertAt.afterbegin, label);
    formElement.insertAdjacentElement(insertAt.beforeend, rangeInput);
    // add element to button
    this.element.insertAdjacentElement(insertAt.afterend, formElement);
  }
}
