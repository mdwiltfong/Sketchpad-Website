import Tool from "./Tool";
import { insertAt } from "../BaseComponent";
import { stateType, eventTypes } from "../../types/types";
import { projectState, bind } from "../../utils/utils";
import * as _ from "lodash";
export default class Pencil extends Tool {
  private canvas = projectState.getCanvas();
  private canvasContext = this.canvas.getContext("2d")!;
  private pencilButton: HTMLInputElement;
  private pencilSettings: HTMLFormElement;
  constructor(private state: stateType) {
    // This super is using the toolbar in the HTML to anchor the pencil versus the div that is created in ToolBar. As a result it doesn't empty the div.
    super(
      "pencil",
      "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z",
      "button"
    );

    this.element.setAttribute("id", "pencil");
    this.configurePencil();
    projectState.subscribe(eventTypes.startDrawing, this.startTool);
    projectState.subscribe(eventTypes.drawing, this.implementTool);
    projectState.subscribe(eventTypes.stopDrawing, this.stopTool);
  }
  public addBoundEventListener(): void {}
  public configurePencil() {
    this.addBoundEventListener();
    this.configureFormSettings();

    this.pencilButton.addEventListener("click", this.activateTool);
    this.svg.style.background = this.state.pencilState.pencil
      ? "white"
      : "transparent";
  }
  private configureFormSettings() {
    this.pencilSettings = document.createElement("form");
    this.pencilSettings.setAttribute("id", "brush-settings");
    const label = document.createElement("label");
    label.setAttribute("for", "stroke-value");
    label.textContent = "Stroke Size";
    const strokeSizeInput = document.createElement("input");
    strokeSizeInput.type = "text";
    strokeSizeInput.id = "stroke-value";
    strokeSizeInput.placeholder = "1-50";
    strokeSizeInput.value = this.state.pencilState.strokeValue.toString();
    this.pencilButton = document.createElement("input");
    this.pencilButton.type = "button";
    this.pencilButton.id = "brush-size";
    this.pencilButton.value = "OK";
    this.pencilSettings.insertAdjacentElement(insertAt.afterbegin, label);
    this.pencilButton.addEventListener("click", this.activateTool);
    this.pencilSettings.insertAdjacentElement(
      insertAt.beforeend,
      strokeSizeInput
    );
    strokeSizeInput.insertAdjacentElement(insertAt.afterend, this.pencilButton);

    // add element to button
    this.element.insertAdjacentElement(insertAt.afterend, this.pencilSettings);
  }
  public render(): void {
    this.configureFormSettings();
  }
  @bind
  public startTool(pointerEvent: PointerEvent) {
    const canvasContext = this.canvas.getContext("2d")!;
    if (pointerEvent.pressure > 0 && this.state.pencilState.pencil == true) {
      console.log("startTool - Pencil");
      this.state.pencilState.drawing = true;
      let x = pointerEvent.offsetX;
      let y = pointerEvent.offsetY;
      canvasContext.moveTo(x, y);
    } else if (this.state.pencilState.pencil == true) {
      this.state.pencilState.drawing = true;
    }
  }
  @bind
  public activateTool(eventObject: MouseEvent): void {
    if (
      this.state.eraserState.eraser == true ||
      this.state.eyeDropperState.eyeDropper == true
    ) {
      if (this.state.pencilState.pencil == false) {
        this.state.eyeDropperState.eyeDropper = false;
        this.state.eraserState.eraser = false;
        this.state.pencilState.pencil = true;
        console.log("activateTool - pencil");
        this.state.pencilState.pencilIconBackground = "white";
        projectState.publish(eventTypes.activatePencil, this.state);
      }
    }
  }
  @bind
  public implementTool(pointerEvent: PointerEvent): void {
    if (
      this.state.pencilState.drawing == true &&
      this.state.pencilState.pencil == true
    ) {
      console.log("impementTool - Pencil");
      let x = pointerEvent.offsetX;
      let y = pointerEvent.offsetY;
      this.canvasContext.lineTo(x, y);
      this.canvasContext.stroke();
    }
  }
  @bind
  public stopTool(eventObject: Event): void {
    console.log("stopTool - Pencil");
    this.state.pencilState.drawing = false;
  }
  public renderContent(): void {}
}
