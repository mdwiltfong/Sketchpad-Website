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

type sliderState = {
  lightSliderValue: number;
  satSliderValue: number;
};

type pencilState = {
  pencil: boolean;
  drawing: boolean;
  strokeValue: number;
  pencilIconBackground: string;
};
type eraserState = {
  eraser: boolean;
  erasing: boolean;
  eraserValue: number;
};

type eyeDropperState = {
  eyeDropper: boolean;
  pickingColor: boolean;
};

type stateType = {
  sliderState: sliderState;
  pencilState: pencilState;
  eraserState: eraserState;
  eyeDropperState: eyeDropperState;
};

export class ProjectState extends State<Tool> {
  private canvasElement: HTMLCanvasElement;
  private state: stateType = {
    sliderState: {
      lightSliderValue: 50,
      satSliderValue: 50,
    },
    pencilState: {
      pencil: true,
      drawing: false,
      strokeValue: 1,
      pencilIconBackground: "white",
    },
    eraserState: {
      eraser: false,
      erasing: false,
      eraserValue: 25,
    },
    eyeDropperState: {
      eyeDropper: false,
      pickingColor: false,
    },
  };
  private tools: Tool[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
    this.canvasElement = document.getElementById("canva") as HTMLCanvasElement;
  }
  public getCanvasContext() {
    return this.canvasElement.getContext("2d")!;
  }
  public getState() {
    return JSON.parse(JSON.stringify(this.state));
  }
  public setState(newState: stateType): void {
    this.state = { ...this.state, ...newState };
    this.updateListeners();
  }

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
