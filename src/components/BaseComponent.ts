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
    elementId?: string,
    element?: string,
    newElementId?: string
  ) {
    this.hostElement = document.getElementById(hostElementId)! as T;
    if (newElementId && element) {
      this.element = document.createElement(element)! as U;
      this.element.setAttribute("class", newElementId);
    }
    if (elementId) {
      this.element = document.getElementById(elementId)! as U;
    }
    this.attach(insertAtStart);
  }
  private attach(insertAtStart: insertAt) {
    this.hostElement.insertAdjacentElement(insertAtStart, this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
