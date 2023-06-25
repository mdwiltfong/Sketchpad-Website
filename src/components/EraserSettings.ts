import { stateType } from "../types/types";
import { bind, projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";

export default class EraserSettings extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
  constructor(
    private state: stateType,
    private canvasContext: CanvasRenderingContext2D
  ) {
    super("toolbar", insertAt.beforeend, "form");
    this.configure();
    projectState.addEventListener<KeyboardEvent>(
      "changeBrushSize",
      this.changeBrushSize,
      this.element
    );
  }
  public configure() {
    const formElement = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    formElement.setAttribute("id", "eraser-settings");
    label.setAttribute("for", "eraser-value");
    label.textContent = "Eraser Size";
    input.type = "range";
    input.id = "eraser-value";
    input.value = "25";

    formElement.insertAdjacentElement(insertAt.afterbegin, label);
    formElement.insertAdjacentElement(insertAt.beforeend, input);
    const pencilButton = document.getElementById("pencil")!;
    this.hostElement.insertBefore(formElement, pencilButton);
  }
  @bind
  private changeBrushSize(e: KeyboardEvent): void {
    console.log("changeBrushSize");
    e.preventDefault();
    const inputElement: HTMLInputElement = document.importNode(
      this.element,
      true
    ).childNodes[1] as HTMLInputElement;
    const strokeValue = Number(inputElement.value);
    if (strokeValue > 50 || strokeValue < 1 || strokeValue == undefined) {
      alert("Only values 1 through 50 are accepted");
      return;
    }

    this.canvasContext.beginPath();
    this.canvasContext.lineWidth = strokeValue;
    this.state.pencilState.strokeValue = strokeValue;
    //projectState.publish("changeBrushSize", this.state);
  }
  public renderContent() {}
}
