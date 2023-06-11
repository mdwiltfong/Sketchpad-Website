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
  public configure(): void {
    /*   projectState.subscribe(eventTypes.activatePencil, (state: stateType) => {
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
    projectState.subscribe(eventTypes.stopDrawing, (state: stateType) => {
      this.state.pencilState.drawing = state.pencilState.drawing;
      projectState.setState(this.state);
      this.renderTools();
    }); */
  }
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
    new Pencil(1, this.state);
    this.renderCanvasButtons();
  }
  public renderContent(...tools: Tool[]): void {}
}
