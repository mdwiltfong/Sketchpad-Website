import Component from "./BaseComponent";
import { insertAt } from "./BaseComponent";
export default class SketchPad extends Component<
  HTMLDivElement,
  HTMLDivElement
> {
  private canvasElement: HTMLCanvasElement;
  private canvasHeight = 500;
  private canvasWidth = 700;
  private canvasBorder = "1px solid black";
  constructor() {
    super("container", insertAt.afterbegin, "div");
    this.configure();
    this.renderContent();
  }

  public configure() {
    this.hostElement = document.getElementById(
      "container-canvas"
    ) as HTMLDivElement;
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.id = "canva";
    this.canvasElement.width = this.canvasWidth;
    this.canvasElement.height = this.canvasHeight;
    this.canvasElement.style.border = this.canvasBorder;
  }
  public renderContent() {
    this.hostElement.appendChild(this.canvasElement);
  }
}
