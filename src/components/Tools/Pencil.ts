import Tool from "./Tool";
import { insertAt } from "../BaseComponent";
import { stateType } from "../../types/types";
import { projectState } from "../../utils/utils";
export default class Pencil extends Tool {
  constructor(private strokeValue: number, private state: stateType) {
    super(
      "toolbar",
      "pencil",
      "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z",
      "button"
    );
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
    strokeSizeInput.value = this.strokeValue.toString();
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
  public render(): void {
    this.configureFormSettings();
  }
  /* @bind
  public startTool(pointerEvent: PointerEvent) {
    projectState.subscribe(eventTypes.startDrawing, () => {
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
    });
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
  } */
  public renderContent(): void {}
}
