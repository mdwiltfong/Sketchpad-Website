import Tool from "./Tool";

export default class Pencil extends Tool {
  constructor(pathId: string) {
    super("toolbar", "pencil", pathId, "button");
    this.element.setAttribute("id", "pencil");
  }
}
