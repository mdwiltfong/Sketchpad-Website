import Component, { insertAt } from "../BaseComponent";
import Tool from "./Tool";
export default class ToolBar extends Component<HTMLDivElement, HTMLDivElement> {
  private clearCanvasBtn: HTMLButtonElement;
  private saveCanvasBtn: HTMLButtonElement;
  constructor(...tools: Tool[]) {
    super("container", insertAt.beforeend, "toolbar");
    this.renderContent(...tools);
  }
  public configure(): void {
    this.clearCanvasBtn = document.createElement("button");
    this.clearCanvasBtn.innerText = "Clear Canvas";
    this.clearCanvasBtn.id = "clear";
    this.clearCanvasBtn.type = "button";

    this.saveCanvasBtn = document.createElement("button");
    this.saveCanvasBtn.innerText = "Save Canvas";
    this.saveCanvasBtn.id = "save";
    this.element.append(this.clearCanvasBtn, this.saveCanvasBtn);
  }
  public renderContent(...tools: Tool[]): void {}
}
