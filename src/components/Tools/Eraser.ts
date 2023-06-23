import { stateType } from "../../types/types";
import { insertAt } from "../BaseComponent";
import Tool from "./Tool";

export default class Eraser extends Tool {
  constructor(private state: stateType) {
    super(
      "eraser",
      "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z",
      "button"
    );
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
  public renderContent(): void {}
  public render(): void {}
}
