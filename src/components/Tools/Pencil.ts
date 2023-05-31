import Tool from "./Tool";
import { insertAt } from "../BaseComponent";
import { bind, projectState } from "../../utils/utils";
export default class Pencil extends Tool {
  private state = projectState.getState();
  private canvasContext = projectState.getCanvasContext();
  constructor(pathId: string) {
    super("toolbar", "pencil", pathId, "button");
    this.element.setAttribute("id", "pencil");
    this.configureFormSettings();
    projectState.addListener(this.listener);
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
    if (pointerEvent.pressure > 0 && this.state.pencilState.pencil == true) {
      this.state.pencilState.drawing = true;
      projectState.setState(this.state);
      let x = pointerEvent.offsetX;
      let y = pointerEvent.offsetY;
      this.canvasContext.moveTo(x, y);
    } else if (this.state.pencilState.pencil == true) {
      this.state.pencilState.drawing = true;
      projectState.setState(this.state);
    }
  }
  @bind
  public activateTool(eventObject: Event): void {
    if (
      this.state.eraserState.eraser == true ||
      this.state.eyeDropperState.eyeDropper == true
    ) {
      this.state.eyeDropperState.eyeDropper = false;
      this.state.eraserState.eraser = false;
      this.state.pencilState.pencil = true;
    }
    this.state.pencilState.pencilIconBackground = "white";
    projectState.setState(this.state);
  }
  @bind
  public implementTool(pointerEvent: PointerEvent): void {
    if (
      this.state.pencilState.drawing == true &&
      this.state.pencilState.pencil == true
    ) {
      let x = pointerEvent.offsetX;
      let y = pointerEvent.offsetY;
      this.canvasContext.lineTo(x, y);
      this.canvasContext.stroke();
    }
  }
  @bind
  public stopTool(eventObject: Event): void {
    this.state.pencilState.drawing = false;
  }
  private listener() {
    this.state.eyeDropperState.backgroundColor = "transparent";
    this.state.eraserState.backgroundColor = "transparent";
  }
}
