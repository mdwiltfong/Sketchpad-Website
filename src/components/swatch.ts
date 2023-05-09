export enum Color {
  red = "hsl(0,100%,50%)",
  white = "h(0,0,100%)",
  black = "hsl(0,0,0%)",
  blue = "hsl(240,100%,50%)",
  green = "hsl(120,100%,50%)",
  orange = "hsl(30,100%,50%)",
  pink = "hsl(330,100%,50%)",
}

export default class Swatch {
  private element: HTMLDivElement;
  private swatch: HTMLButtonElement;
  private color: string;
  private innerText: string;
  constructor(color: Color) {
    this.color = color;
    this.configureInnerText();
  }
  private configureInnerText() {
    switch (this.color) {
      case Color.red:
        this.innerText = "Red";
        break;
      case Color.white:
        this.innerText = "White";
        break;
      case Color.black:
        this.innerText = "Black";
        break;
      case Color.blue:
        this.innerText = "Blue";
        break;
      case Color.green:
        this.innerText = "Green";
        break;
      case Color.orange:
        this.innerText = "Orange";
        break;
      case Color.pink:
        this.innerText = "Pink";
        break;
    }
  }
}
