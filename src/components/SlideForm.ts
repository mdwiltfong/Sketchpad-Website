export default class SlideForm {
  private hostELement: HTMLDivElement;
  private formElement: HTMLFormElement;
  constructor() {
    this.configure();
    this.render();
  }
  private configure() {
    this.hostELement = document.getElementById(
      "color-picker-menu"
    )! as HTMLDivElement;
    this.formElement = document.createElement("form")! as HTMLFormElement;
    this.configureForm();
  }
  private configureForm() {
    this.formElement.id = "slide-form";
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

    this.formElement.appendChild(lightLabel);
    this.formElement.appendChild(lightInput);
    this.formElement.appendChild(saturationLabel);
    this.formElement.appendChild(saturationInput);
    return this.formElement;
  }
  private render() {
    this.hostELement.appendChild(this.formElement);
  }
}
