import { projectState } from "../../utils/utils";
import Component, { insertAt } from "../BaseComponent";
import Pencil from "./Pencil";
import EyeDropper from "./EyeDropper";
import Eraser from "./Eraser";
import Tool from "./Tool";
import { eventTypes, stateType } from "../../types/types";
export default class ToolBar extends Component<HTMLDivElement, HTMLDivElement> {
  private clearCanvasBtn: HTMLButtonElement;
  private saveCanvasBtn: HTMLButtonElement;
  private state = projectState.getState();
  constructor() {
    super("container", insertAt.beforeend, "div");
    this.renderCanvasButtons();
    this.configure();
    this.renderTools();
  }
  public configure(): void {}
  private renderCanvasButtons(): void {
    this.clearCanvasBtn = document.createElement("button");
    this.clearCanvasBtn.innerText = "Clear Canvas";
    this.clearCanvasBtn.id = "clear";
    this.clearCanvasBtn.type = "button";

    this.saveCanvasBtn = document.createElement("button");
    this.saveCanvasBtn.innerText = "Save Canvas";
    this.saveCanvasBtn.id = "save";
    this.element.setAttribute("id", "toolbar");
    this.element.insertAdjacentElement(insertAt.beforeend, this.clearCanvasBtn);
    this.element.insertAdjacentElement(insertAt.beforeend, this.saveCanvasBtn);
  }
  private renderTools(): void {
    this.element.innerHTML = "";
    new Pencil(this.state);
    this.renderCanvasButtons();
  }
  public renderContent(...tools: Tool[]): void {}
}
