export default class SketchPad {
  private hostElement: HTMLDivElement;
  private canvasElement: HTMLCanvasElement;
  constructor() {
    this.configure();
    this.render();
  }

  private configure() {
    this.hostElement = document.getElementById(
      "container-canvas"
    ) as HTMLDivElement;
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.id = "canva";
    this.canvasElement.width = 700;
    this.canvasElement.height = 500;
    this.canvasElement.style.border = "1px solid black";
  }
  private render() {
    this.hostElement.appendChild(this.canvasElement);
  }
}
