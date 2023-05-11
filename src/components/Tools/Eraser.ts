import Tool from "./Tool";

export default class Eraser extends Tool {
  constructor(pathD: string) {
    super("toolbar", "eraser", pathD);
  }
}
