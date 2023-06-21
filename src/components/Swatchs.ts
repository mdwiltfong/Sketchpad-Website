import { eventTypes } from "../types/types";
import { bind, projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";
import SlideForm from "./SlideForm";
import Swatch, { Color } from "./swatch";

export default class Swatchs extends Component<HTMLDivElement, HTMLDivElement> {
  private state = projectState.getState();
  private canvas = projectState.getCanvas();
  private canvasCtx = this.canvas.getContext("2d")!;
  private currentColor: HTMLDivElement;
  constructor() {
    super("container-canvas", insertAt.afterbegin, "color-picker-menu");
    this.currentColor = document.getElementById(
      "currentcolor"
    )! as HTMLDivElement;
    this.renderContent();
    this.configure();

    projectState.subscribeState("updateLightness", () => {
      document.getElementById("color-picker-menu")!.innerHTML = "";
      this.renderContent();
      this.configure();
    });
  }

  public renderContent(): void {
    new Swatch(Color.red, this.state);
    new Swatch(Color.white, this.state);
    new Swatch(Color.black, this.state);
    new Swatch(Color.blue, this.state);
    new Swatch(Color.green, this.state);
    new Swatch(Color.orange, this.state);
    new Swatch(Color.pink, this.state);
    new SlideForm(this.state, this.canvasCtx);
  }
  @bind
  private pickSwatch(e: Event): void {
    const target = e.target as HTMLButtonElement;
    const color = target.value;
    this.updateCurrentColor(color);
    this.canvasCtx.strokeStyle = color;
    this.canvasCtx.beginPath();
  }
  private updateCurrentColor(color: string): void {
    this.currentColor.style.backgroundColor = color;
  }
  public configure(): void {
    const swatchs = document.querySelectorAll(".swatch-btn");
    swatchs.forEach((swatch) => {
      swatch.addEventListener("click", this.pickSwatch);
    });
  }
}
