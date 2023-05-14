import Tool from "./Tool";
export default class EyeDropper extends Tool {
  private parentDiv: HTMLDivElement;
  constructor(pathD: string) {
    super("color-picker-menu", "eye-btn", pathD, "button", "icon", "eraser");
    this.element.setAttribute("id", "eye-btn");
  }
}
