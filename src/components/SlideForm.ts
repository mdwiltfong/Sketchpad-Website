import { stateType } from "../types/types";
import { bind, projectState } from "../utils/utils";
import Component, { insertAt } from "./BaseComponent";

export default class SlideForm extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
  private lightInputElement: HTMLInputElement;
  private saturationInputElement: HTMLInputElement;
  constructor(
    private state: stateType,
    private canvasContext: CanvasRenderingContext2D
  ) {
    super("color-picker-menu", insertAt.beforeend, "form");
    this.configure();
    this.renderContent();
    projectState.addEventListener<InputEvent>(
      "updateLightness",
      this.updateLightness,
      this.lightInputElement
    );
    projectState.addEventListener<InputEvent>(
      "updateSaturation",
      this.updateSaturation,
      this.saturationInputElement
    );
  }

  public configure() {
    // Lightness slider
    const lightLabel = document.createElement("label");
    lightLabel.setAttribute("for", "lightness");
    lightLabel.innerText = "Light";
    this.lightInputElement = document.createElement("input");
    this.lightInputElement.type = "range";
    this.lightInputElement.id = "lightness";
    this.lightInputElement.className = "range";
    this.lightInputElement.value =
      this.state.sliderState.lightSliderValue.toString();
    // Saturation slider
    const saturationLabel = document.createElement("label");
    saturationLabel.setAttribute("for", "saturation");
    saturationLabel.innerText = "Saturation";
    this.saturationInputElement = document.createElement("input");
    this.saturationInputElement.type = "range";
    this.saturationInputElement.id = "saturation";
    this.saturationInputElement.className = "range";
    this.saturationInputElement.value =
      this.state.sliderState.satSliderValue.toString();

    this.element.appendChild(lightLabel);
    this.element.appendChild(this.lightInputElement);
    this.element.appendChild(saturationLabel);
    this.element.appendChild(this.saturationInputElement);
    this.element.id = "slide-form";
    return this.element;
  }
  @bind
  private updateLightness(e: InputEvent): void {
    e.preventDefault();
    console.log("updateLightness");
    this.state.sliderState.lightSliderValue = Number(
      this.lightInputElement.value
    );
    projectState.publish("updateLightness", this.state);
  }
  @bind
  private updateSaturation(e: InputEvent): void {
    e.preventDefault();
    console.log("updateSaturation");
    this.state.sliderState.satSliderValue = Number(
      this.saturationInputElement.value
    );
    projectState.publish("updateSaturation", this.state);
  }
  private extractHSL(hsl: string): number[] {
    const regex = /\d+/g;
    const matches = hsl.match(regex);
    return matches!.map(Number);
  }
  public renderContent() {}
}
