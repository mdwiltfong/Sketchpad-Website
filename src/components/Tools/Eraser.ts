import { stateType } from "../../types/types";
import { bind, projectState } from "../../utils/utils";
import { insertAt } from "../BaseComponent";
import Tool from "./Tool";

export default class Eraser extends Tool {
  private canvas: HTMLCanvasElement = projectState.getCanvas();
  private eraserInput: HTMLInputElement;
  private eraserButton: HTMLButtonElement;
  constructor(private state: stateType) {
    super(
      "eraser",
      "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z",
      "button"
    );
    this.element.setAttribute("id", "eraser");
    this.eraserButton = this.element;
    this.configureFormSettings();
    projectState.addEventListener<PointerEvent>(
      "startErasing",
      this.startTool,
      this.canvas
    );
    projectState.addEventListener<PointerEvent>(
      "erasing",
      this.implementTool,
      this.canvas
    );
    projectState.addEventListener<PointerEvent>(
      "stopErasing",
      this.stopTool,
      this.canvas
    );
    projectState.addEventListener<PointerEvent>(
      "activateEraser",
      this.activateTool,
      this.eraserButton
    );
  }
  private configureFormSettings() {
    const formElement = document.createElement("form");
    const label = document.createElement("label");
    this.eraserInput = document.createElement("input");
    formElement.setAttribute("id", "eraser-settings");
    label.setAttribute("for", "eraser-value");
    label.textContent = "Eraser Size";
    this.eraserInput.type = "range";
    this.eraserInput.id = "eraser-value";
    this.eraserInput.value = "25";

    formElement.insertAdjacentElement(insertAt.afterbegin, label);
    formElement.insertAdjacentElement(insertAt.beforeend, this.eraserInput);
    // add element to button
    this.element.insertAdjacentElement(insertAt.afterend, formElement);
  }
  @bind
  public startTool(pointerEvent: PointerEvent): void {
    if (this.state.eraserState.eraser == true) {
      console.log("startTool - Eraser");
      this.state.eraserState.erasing = true;
    }
  }

  @bind
  public stopTool(pointerEvent: PointerEvent): void {
    console.log("stopTool - Eraser");
    this.state.eraserState.erasing = false;
  }
  @bind
  public implementTool(e: PointerEvent): void {
    if (
      this.state.eraserState.eraser == true &&
      this.state.eraserState.erasing == true
    ) {
      console.log("erasing");
      const ctx = this.canvas.getContext("2d")!;
      let x = e.offsetX;
      let y = e.offsetY;
      ctx.beginPath();
      ctx.clearRect(
        x - 12,
        y - 12,
        Number(this.eraserInput.value),
        Number(this.eraserInput.value)
      );
    }
  }
  @bind
  public activateTool(e: MouseEvent): void {
    console.log("startTool - Eraser");
    if (this.state.eraserState.eraser == false) {
      // Update eraser state
      this.state.eraserState.eraser = true;
      this.state.eraserState.backgroundColor = "White";
      // Update pencil state
      this.state.pencilState.pencil = false;
      this.state.pencilState.pencilIconBackground = "transparent";
      //Update eye dropper state
      this.state.eyeDropperState.eyeDropper = false;
      this.state.eyeDropperState.backgroundColor = "transparent";

      projectState.publish("activateEraser", this.state);
    }
  }
  public renderContent(): void {}
  public render(): void {}
}
