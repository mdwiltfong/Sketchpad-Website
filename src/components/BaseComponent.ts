export enum insertAt {
  afterbegin = "afterbegin",
  beforeend = "beforeend",
}

export default abstract class Component<
  T extends HTMLElement & HTMLDivElement,
  U extends HTMLElement | HTMLFormElement | HTMLDivElement
> {
  protected hostElement: T;
  private element: U;

  constructor(
    hostElementId: string,
    insertAtStart: insertAt,
    newElementId?: string
  ) {
    this.hostElement = document.getElementById(hostElementId)! as T;
    if (newElementId) {
      this.element = document.getElementById(newElementId)! as U;
      this.hostElement.insertAdjacentElement(insertAtStart, this.element);
    }
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
