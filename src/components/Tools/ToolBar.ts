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
  private tools: Tool[] = [new Pencil(1, this.state)];
  constructor(...tools: Tool[]) {
    super("container", insertAt.beforeend, "toolbar");
    this.tools = tools;
    this.renderContent(...tools);
    this.configure();
    this.renderTools();
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
    projectState.subscribe(eventTypes.activatePencil, (state: stateType) => {
      this.state = state;
      console.log("activatePencil subscriber method");
      projectState.setState(this.state);
      this.renderTools();
    });
    projectState.subscribe(eventTypes.startDrawing, (state: stateType) => {
      this.state.pencilState.drawing = state.pencilState.drawing;
      projectState.setState(this.state);
      this.renderTools();
    });
  }
  private renderTools(): void {
    this.element.innerHTML = "";
    this.tools.forEach((tool) => {
      tool.render();
    });
  }
  public renderContent(...tools: Tool[]): void {}
}
