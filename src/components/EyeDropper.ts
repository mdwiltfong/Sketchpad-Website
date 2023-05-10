import Component, { insertAt } from "./BaseComponent";

export default class EyeDropper extends Component<
  HTMLDivElement,
  HTMLDivElement
> {
  private svg: SVGElement;
  private icon: HTMLButtonElement;
  constructor() {
    super(
      "color-picker-menu",
      insertAt.beforeend,
      undefined,
      "div",
      "eyedropper"
    );
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.configureSVG();
    this.configure();
    this.renderContent();
  }
  private configureSVG() {
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.svg.id = "eyedrop-icon";
    this.svg.setAttribute("class", "icon-img bi bi-eyedropper");
    this.svg.setAttribute("width", "28");
    this.svg.setAttribute("height", "28");
    this.svg.setAttribute("viewBox", "0 0 16 16");
    this.svg.setAttribute("fill", "currentColor");
    this.svg.innerHTML = `
  <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
`;
  }
  public configure() {
    this.icon = document.createElement("button");
    this.icon.id = "eye-btn";
    this.icon.className = "icon";
  }
  public renderContent() {
    this.icon.appendChild(this.svg);
    this.element.appendChild(this.icon);
  }
}
