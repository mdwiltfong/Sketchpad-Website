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
    new SlideForm();
  }

  public renderContent(): void {
    new Swatch(Color.red);
    new Swatch(Color.white);
    new Swatch(Color.black);
    new Swatch(Color.blue);
    new Swatch(Color.green);
    new Swatch(Color.orange);
    new Swatch(Color.pink);
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
