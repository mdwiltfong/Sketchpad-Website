import { stateType } from "../../types/types";
import { bind, projectState } from "../../utils/utils";
import Component, { insertAt } from "../BaseComponent";
import Tool from "./Tool";
export default class EyeDropper extends Component<
  HTMLDivElement,
  HTMLButtonElement
> {
  private canvas: HTMLCanvasElement = projectState.getCanvas();
  private eyeDropperButton: HTMLButtonElement;
  private svgElement: SVGElement;
  private pathTag: SVGPathElement;
  constructor(private state: stateType) {
    super("color-picker-menu", insertAt.beforeend, "div");
    this.configure();
    projectState.addEventListener<PointerEvent>(
      "startPickingColor",
      this.startTool,
      this.canvas
    );
    projectState.addEventListener<PointerEvent>(
      "stopPickingColor",
      this.stopTool,
      this.canvas
    );
    projectState.addEventListener<PointerEvent>(
      "pickingColor",
      this.implementTool,
      this.canvas
    );
    this.eyeDropperButton.addEventListener("click", this.activateTool);
  }
  public configure(): void {
    // Configure and create eye dropper button
    this.eyeDropperButton = document.createElement("button");
    this.eyeDropperButton.setAttribute("id", "eye-btn");
    this.eyeDropperButton.setAttribute("class", "icon");
    // Create and configure svg element
    this.svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.pathTag = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    this.configureSVG();
    this.configurePath();
    this.eyeDropperButton.style.background = this.state.eyeDropperState
      .eyeDropper
      ? "white"
      : "transparent";
    this.element.insertAdjacentElement(
      insertAt.beforeend,
      this.eyeDropperButton
    );
    this.element.id = "eyedropper";
  }
  private configureSVG(): void {
    this.svgElement.setAttribute("class", "icon-img");
    this.svgElement.setAttribute("id", "eyedrop-icon");
    this.svgElement.setAttribute("width", "28px");
    this.svgElement.setAttribute("height", "28px");
    this.svgElement.setAttribute("viewBox", "0 0 16 16");
    this.svgElement.setAttribute("fill", "currentColor");
    this.eyeDropperButton.insertAdjacentElement(
      insertAt.afterbegin,
      this.svgElement
    );
  }
  private configurePath(): void {
    this.pathTag.setAttribute(
      "d",
      "M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"
    );
    this.svgElement.insertAdjacentElement(insertAt.beforeend, this.pathTag);
  }
  @bind
  public activateTool(): void {
    if (this.state.eyeDropperState.eyeDropper == false) {
      console.log("activating tool - Eyedropper");
      this.state.eraserState.eraser = false;
      this.state.pencilState.pencil = false;
      this.state.eyeDropperState.eyeDropper = true;
      projectState.publish("activateEyeDropper", this.state);
    }
  }
  @bind
  public implementTool(e: PointerEvent): void {
    if (this.state.eyeDropperState.eyeDropper == true) {
      const ctx = this.canvas.getContext("2d")!;
      let x = e.offsetX;
      let y = e.offsetY;
      let imageData = ctx.getImageData(x, y, 1, 1);
      let red = imageData.data[0];
      let green = imageData.data[1];
      let blue = imageData.data[2];
      let colorValues = this.rgbToHsl(red, green, blue);
      this.state.currentColor = colorValues;
      ctx.beginPath();
      ctx.strokeStyle = colorValues;
      projectState.publish("updateColor", this.state);
    }
  }
  private rgbToHsl(r: number, g: number, b: number): string {
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h: number,
      s: number,
      l: number = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h! /= 6;
    }

    return `hsl(${h! * 360}, ${s * 100}%, ${l * 100}%)`;
  }

  @bind
  public stopTool(pointerEvent: PointerEvent): void {
    if (this.state.eyeDropperState.pickingColor == true) {
      console.log("stopping tool - EyeDropper");
      this.state.eyeDropperState.pickingColor = false;
    }
  }
  @bind
  public startTool(e: PointerEvent): void {
    if (this.state.eyeDropperState.eyeDropper == true) {
      this.state.eyeDropperState.pickingColor = true;
    }
  }

  public renderContent(): void {}
  public render(): void {}
}
