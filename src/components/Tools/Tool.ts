import { boundEventListenerType } from "../../types/types";
import Component, { insertAt } from "../BaseComponent";

export default abstract class Tool extends Component<
  HTMLDivElement,
  HTMLDivElement
> {
  protected svg: SVGElement;
  private pathTag: SVGPathElement;

  constructor(
    private toolId: string,
    private pathD: string,
    private elementTag: string
  ) {
    super("toolbar", insertAt.afterbegin, elementTag);
    this.configure();
    this.renderContent();
  }
  public configure(): void {
    this.element.setAttribute("class", "icon");
    this.element.setAttribute("id", `${this.toolId}`);
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.pathTag = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    this.configureSVG();
    this.configurePath();
  }
  private configureSVG(): void {
    this.svg.setAttribute("class", "icon-img bi bi-eraser-fill");
    this.svg.setAttribute("id", `${this.toolId}-icon`);
    this.svg.setAttribute("width", "28");
    this.svg.setAttribute("height", "28");
    this.svg.setAttribute("viewBox", "0 0 16 16");
    this.svg.setAttribute("fill", "currentColor");
    this.element.insertAdjacentElement(insertAt.afterbegin, this.svg);
  }
  private configurePath() {
    this.pathTag.setAttribute("d", this.pathD);
    this.svg.insertAdjacentElement(insertAt.beforeend, this.pathTag);
  }
  abstract render(): void;
  /*  abstract startTool(pointerEvent: PointerEvent): void;
  abstract implementTool(eventObject: Event): void;
  abstract stopTool(eventObject: Event): void;
  abstract activateTool(eventObject: Event): void; */
}
