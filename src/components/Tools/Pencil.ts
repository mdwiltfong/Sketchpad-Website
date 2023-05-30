import Tool from "./Tool";
import { insertAt } from "../BaseComponent";
import { bind, projectState } from "../../utils/utils";
export default class Pencil extends Tool {
  private projectState = projectState.getState();
  private canvasContext = projectState.getCanvasContext();
  constructor(pathId: string) {
    super("toolbar", "pencil", pathId, "button");
    this.element.setAttribute("id", "pencil");
    this.configureFormSettings();
  }
  private configureFormSettings() {
    const formElement = document.createElement("form");
    formElement.setAttribute("id", "brush-settings");
    const label = document.createElement("label");
    label.setAttribute("for", "stroke-value");
    label.textContent = "Stroke Size";
    const strokeSizeInput = document.createElement("input");
    strokeSizeInput.type = "text";
    strokeSizeInput.id = "stroke-value";
    strokeSizeInput.placeholder = "1-50";
    const okButton = document.createElement("input");
    okButton.type = "button";
    okButton.id = "brush-size";
    okButton.value = "OK";
    formElement.insertAdjacentElement(insertAt.afterbegin, label);

    formElement.insertAdjacentElement(insertAt.beforeend, strokeSizeInput);
    strokeSizeInput.insertAdjacentElement(insertAt.afterend, okButton);

    // add element to button
    this.element.insertAdjacentElement(insertAt.afterend, formElement);
  }
  @bind
  public startTool(pointerEvent: PointerEvent) {
    if (
      pointerEvent.pressure > 0 &&
      this.projectState.pencilState.pencil == true
    ) {
      this.projectState.pencilState.drawing = true;
      let x = pointerEvent.offsetX;
      let y = pointerEvent.offsetY;
      this.canvasContext.moveTo(x, y);
    } else if (this.projectState.pencilState.pencil == true) {
      this.projectState.pencilState.drawing = true;
    }
  }
}
