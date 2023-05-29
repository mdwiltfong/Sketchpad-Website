import Tool from "../components/Tools/Tool";

export function bind(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjustedDescriptor;
}

type Listener<T> = (items: T[]) => void;
class State<T> {
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Tool> {
  private tools: Tool[] = [];
  private static instance: ProjectState;
  // Default values for the sliders
  private lightSliderValue: Number = 50;
  private satSliderValue: Number = 100;

  // Pencil State
  private pencil: Boolean = true;
  private drawing: Boolean = false;
  private strokeValue: Number = 1;
  private pencilIconBackground: String = "white";
  // Eraser status
  private eraser: Boolean = false;
  private erasing: Boolean = false;
  private eraserValue: Number = 25;
  // Eye Dropper State
  private eyeDropper: Boolean = false;
  private pickingColor: Boolean = false;

  private constructor() {
    super();
  }
  public getState() {
    return {
      lightSliderValue: this.lightSliderValue,
      satSliderValue: this.satSliderValue,
      pencil: this.pencil,
      drawing: this.drawing,
      strokeValue: this.strokeValue,
      pencilIconBackground: this.pencilIconBackground,
      eraser: this.eraser,
      erasing: this.erasing,
      eraserValue: this.eraserValue,
      eyeDropper: this.eyeDropper,
      pickingColor: this.pickingColor,
    };
  }
  public setState(newState: any): void {}
  updateListeners() {
    for (const listenerFn of this.listeners) {
      // We use `.slice()` here because we want to make a copy of the array of listeners, not the original one.
      //This is so that we can remove a listener without worrying about a potential error with trying to remove a listener that doesn't exist.
      listenerFn(this.tools.slice());
    }
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
  addListener(listener: Listener<Tool>) {
    this.listeners.push(listener);
  }
}

export const projectState = ProjectState.getInstance();
