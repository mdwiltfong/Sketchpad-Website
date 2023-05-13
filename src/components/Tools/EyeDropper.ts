import Tool from "./Tool";
export default class EyeDropper extends Tool {
  private parentDiv: HTMLDivElement;
  constructor(pathD: string) {
    super("color-picker-menu", "eye-btn", pathD, "button", "icon", "eye-btn");
    this.element.setAttribute("id", "eyedropper");
  }
}
