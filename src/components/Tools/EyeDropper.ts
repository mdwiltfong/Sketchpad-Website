import Tool from "./Tool";
export default class EyeDropper extends Tool {
  constructor(pathD: string) {
    super("color-picker-menu", "eyedropper", pathD);
  }
}
