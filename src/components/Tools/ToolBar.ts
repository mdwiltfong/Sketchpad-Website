import { bind, projectState } from "../../utils/utils";
import Component, { insertAt } from "../BaseComponent";
import Pencil from "./Pencil";
import EyeDropper from "./EyeDropper";
import Eraser from "./Eraser";
import Tool from "./Tool";
import { stateType } from "../../types/types";
export default class ToolBar extends Component<HTMLDivElement, HTMLDivElement> {
  private clearCanvasBtn: HTMLButtonElement;
  private saveCanvasBtn: HTMLButtonElement;
  private state = projectState.getState();
  private canvas = projectState.getCanvas();
  constructor() {
    super("container", insertAt.beforeend, "div");
    projectState.subscribeState("changeBrushSize", (data: stateType) => {
      projectState.setState(data);
    });
    projectState.subscribeState("activateEraser", (data: stateType) => {
      projectState.setState(data);
      this.renderTools();
    });
    projectState.subscribeState("activatePencil", (data: stateType) => {
      projectState.setState(data);
      this.renderTools();
    });
    projectState.subscribeState("activateEyeDropper", (data: stateType) => {
      projectState.setState(data);
      this.renderTools();
    });
    projectState.subscribeState("clearCanvas", (data: stateType) => {
      projectState.setState(data);
      this.renderTools();
    });
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
    this.clearCanvasBtn.addEventListener("click", this.clearCanvase);
    this.saveCanvasBtn = document.createElement("button");
    this.saveCanvasBtn.innerText = "Save Canvas";
    this.saveCanvasBtn.id = "save";
    this.element.setAttribute("id", "toolbar");
    this.element.insertAdjacentElement(insertAt.beforeend, this.clearCanvasBtn);
    this.element.insertAdjacentElement(insertAt.beforeend, this.saveCanvasBtn);
  }
  private renderTools(): void {
    console.log("Render Tools");
    console.log(this.element);
    this.element.innerHTML = "";
    new Pencil(this.state);
    new Eraser(this.state);
    this.renderEyeDropper();

    this.renderCanvasButtons();
  }
  public renderContent(...tools: Tool[]): void {}
  private renderEyeDropper(): void {
    const eyeDropper = document.getElementById("eyedropper");
    if (eyeDropper) {
      eyeDropper.parentNode!.removeChild(eyeDropper);
    }
    new EyeDropper(this.state);
  }
  @bind
  public clearCanvase(): void {
    const ctx = this.canvas.getContext("2d")!;
    ctx.clearRect(0, 0, 700, 500);
    ctx.beginPath();
    this.state.pencilState.pencil = true;
    this.state.eraserState.eraser = false;
    projectState.publish("clearCanvas", this.state);
  }
}
