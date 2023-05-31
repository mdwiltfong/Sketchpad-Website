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

type Listener<T> = () => void;

type subscribers = {
  [key: string]: Listener<any>[];
};
class State<T> {
  protected subscribers: subscribers;
  addListener(listenerFn: Listener<T>) {
    this.subscribers;
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
  backgroundColor: string;
};

type eyeDropperState = {
  eyeDropper: boolean;
  pickingColor: boolean;
  backgroundColor: string;
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
      backgroundColor: "transparent",
    },
    eyeDropperState: {
      eyeDropper: false,
      pickingColor: false,
      backgroundColor: "buttonface",
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
  public getState(): stateType {
    return JSON.parse(JSON.stringify(this.state));
  }
  public setState(newState: stateType): void {
    this.state = { ...this.state, ...newState };
    this.updateListeners();
  }

  private updateListeners() {
    for (const event in this.subscribers) {
      if (this.subscribers.hasOwnProperty(event)) {
        const arrayOfListeners = this.subscribers[event];
        arrayOfListeners.forEach((listener) => {
          listener();
        });
      }
    }
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
}

export const projectState = ProjectState.getInstance();
