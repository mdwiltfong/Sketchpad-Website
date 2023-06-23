import { stateType } from "../types/types";
import { bind, projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";

export default class PencilSettings extends Component<
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
    this.element.setAttribute("id", "brush-settings");
    const label = document.createElement("label");
    label.setAttribute("for", "stroke-value");
    label.textContent = "Stroke Size";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "stroke-value";
    input.placeholder = "1-50";
    input.value = this.state.pencilState.strokeValue.toString();
    const button = document.createElement("input");
    button.type = "button";
    button.id = "brush-size";
    button.value = "OK";
    this.element.insertAdjacentElement(insertAt.afterbegin, label);
    this.element.insertAdjacentElement(insertAt.beforeend, input);
    input.insertAdjacentElement(insertAt.afterend, button);

    // add element to button
    this.hostElement.insertAdjacentElement(insertAt.beforeend, this.element);
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
