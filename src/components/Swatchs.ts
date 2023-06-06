import { projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";
import Swatch, { Color } from "./swatch";

export default class Swatchs extends Component<HTMLDivElement, HTMLDivElement> {
  private state = projectState.getState();
  private swatches: Swatch[] = [
    new Swatch(Color.red),
    new Swatch(Color.white),
    new Swatch(Color.black),
    new Swatch(Color.blue),
    new Swatch(Color.green),
    new Swatch(Color.orange),
    new Swatch(Color.pink),
  ];
  constructor() {
    super("container-canvas", insertAt.afterbegin, "color-picker-menu");
  }
  public renderContent(): void {}
  public configure(): void {}
  public renderSwatches(): void {}
}
