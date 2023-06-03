import { insertAt } from "../BaseComponent";
import Tool from "./Tool";
export default class EyeDropper extends Tool {
  constructor(pathD: string) {
    super("color-picker-menu", "eye-btn", pathD, "button", "icon", "eraser");
    this.element.setAttribute("id", "eye-btn");
  }
  public renderContent(): void {}
  public render(): void {}
}
