export enum insertAt {
  afterbegin = "afterbegin",
  beforeend = "beforeend",
}

export default abstract class Component<
  T extends HTMLElement & HTMLDivElement,
  U extends HTMLElement | HTMLFormElement | HTMLDivElement
> {
  protected hostElement: T;
  protected element: U;

  constructor(
    hostElementId: string,
    insertAtStart: insertAt,
    elementTag: string
  ) {
    this.hostElement = document.getElementById(hostElementId)! as T;
    this.element = document.createElement(elementTag) as U;
    this.attach(insertAtStart);
  }
  private attach(insertAtStart: insertAt) {
    this.hostElement.insertAdjacentElement(insertAtStart, this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
