import { stateType } from "../types/types";
import { bind, projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";

export enum Color {
  red = "hsl(0,100%,50%)",
  white = "hsl(0,100%,100%)",
  black = "hsl(0,100%,0%)",
  blue = "hsl(240,100%,50%)",
  green = "hsl(120,100%,50%)",
  orange = "hsl(30,100%,50%)",
  pink = "hsl(330,100%,50%)",
}

export default class Swatch extends Component<HTMLDivElement, HTMLDivElement> {
  private swatchDiv: HTMLDivElement;
  private color: string;
  private innerText: string;
  constructor(defaultColor: Color, private state: stateType) {
    super("color-picker-menu", insertAt.beforeend, "div");
    this.color = defaultColor;
    this.configure();
  }

  public configure() {
    this.configureInnerText();
    this.swatchDiv = this.createSwatchElement();
    this.renderContent();
  }
  public renderContent() {
    this.hostElement.appendChild(this.swatchDiv);
  }
  private createSwatchElement(): HTMLDivElement {
    this.element.setAttribute("style", `background-color:${this.color}`);
    this.element.setAttribute("class", "swatch");
    const swatch = document.createElement("button");
    swatch.className = "swatch-btn";
    swatch.type = "button";
    swatch.value = this.color;
    swatch.innerText = this.innerText;
    this.element.appendChild(swatch);
    return this.element;
  }
  @bind
  private updateLightness(e: InputEvent): void {
    e.preventDefault();
    const [h, s, l] = this.extractHSL(this.color);
    const { sliderState } = this.state;
    this.color = `hsl(${h},${s}%,${sliderState.lightSliderValue.toString()}%)`;
  }
  private extractHSL(hsl: string): number[] {
    const regex = /\d+/g;
    const matches = hsl.match(regex);
    return matches!.map(Number);
  }
  private configureInnerText() {
    switch (this.color) {
      case Color.red:
        this.innerText = "Red";
        break;
      case Color.white:
        this.innerText = "White";
        break;
      case Color.black:
        this.innerText = "Black";
        break;
      case Color.blue:
        this.innerText = "Blue";
        break;
      case Color.green:
        this.innerText = "Green";
        break;
      case Color.orange:
        this.innerText = "Orange";
        break;
      case Color.pink:
        this.innerText = "Pink";
        break;
    }
  }
}
