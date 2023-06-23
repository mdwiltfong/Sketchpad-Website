import { stateType } from "../types/types";
import Component, { insertAt } from "./BaseComponent";

export enum Color {
  red = "red",
  white = "white",
  black = "black",
  blue = "blue",
  green = "green",
  orange = "orange",
  pink = "pink",
}
const colorMap = {
  red: [0, 100, 50],
  white: [0, 100, 100],
  black: [0, 100, 0],
  blue: [240, 100, 50],
  green: [120, 100, 50],
  orange: [30, 100, 50],
  pink: [330, 100, 50],
};

export default class Swatch extends Component<HTMLDivElement, HTMLDivElement> {
  private swatchDiv: HTMLDivElement;
  private innerText: string;
  private hue: Number;
  private saturation: Number;
  private lightness: Number;
  private hslColor: string;
  constructor(private defaultColor: Color, private state: stateType) {
    super("color-picker-menu", insertAt.afterbegin, "div");
    const [h, s, l] = colorMap[defaultColor];
    this.hue = h;
    this.saturation = (s * this.state.sliderState.satSliderValue) / 100;
    this.lightness = (l * this.state.sliderState.lightSliderValue) / 100;
    this.hslColor = this.calculateColor(h, s, l);
    this.configure();
  }

  public configure() {
    this.configureInnerText();
    this.swatchDiv = this.createSwatchElement();
    this.renderContent();
  }

  public renderContent() {
    this.hostElement.insertAdjacentElement(insertAt.afterbegin, this.swatchDiv);
  }
  private calculateColor(h: number, s: number, l: number): string {
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }
  private createSwatchElement(): HTMLDivElement {
    this.element.setAttribute("style", `background-color:${this.hslColor}`);
    this.element.setAttribute("class", "swatch");
    const swatch = document.createElement("button");
    swatch.className = "swatch-btn";
    swatch.type = "button";
    swatch.value = this.hslColor;
    swatch.innerText = this.innerText;
    this.element.insertAdjacentElement(insertAt.afterbegin, swatch);
    return this.element;
  }

  private configureInnerText() {
    switch (this.defaultColor) {
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
