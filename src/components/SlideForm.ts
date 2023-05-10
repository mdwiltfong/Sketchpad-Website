import Component, { insertAt } from "./BaseComponent";

export default class SlideForm extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
  constructor() {
    super(
      "color-picker-menu",
      insertAt.beforeend,
      undefined,
      "form",
      "slide-form"
    );
    this.configure();
    this.renderContent();
  }

  public configure() {
    // Lightness slider
    const lightLabel = document.createElement("label");
    lightLabel.setAttribute("for", "lightness");
    lightLabel.innerText = "Light";
    const lightInput = document.createElement("input");
    lightInput.type = "range";
    lightInput.id = "lightness";
    lightInput.className = "range";
    // Saturation slider
    const saturationLabel = document.createElement("label");
    saturationLabel.setAttribute("for", "saturation");
    saturationLabel.innerText = "Saturation";
    const saturationInput = document.createElement("input");
    saturationInput.type = "range";
    saturationInput.id = "saturation";
    saturationInput.className = "range";

    this.element.appendChild(lightLabel);
    this.element.appendChild(lightInput);
    this.element.appendChild(saturationLabel);
    this.element.appendChild(saturationInput);
    return this.element;
  }
  public renderContent() {}
}
