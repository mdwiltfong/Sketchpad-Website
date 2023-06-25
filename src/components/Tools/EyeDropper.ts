import { stateType } from "../../types/types";
import { projectState } from "../../utils/utils";
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
    this.element.insertAdjacentElement(
      insertAt.beforeend,
      this.eyeDropperButton
    );
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
  public renderContent(): void {}
  public render(): void {}
}
