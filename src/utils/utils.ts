import Tool from "../components/Tools/Tool";
import {
  stateType,
  sliderState,
  pencilState,
  eraserState,
  eyeDropperState,
  eventTypes,
} from "../types/types";

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
  }

  public subscribe(eventName: eventTypes, callback: Listener<any>) {
    const listeners = this.subscribers[eventName] || [];
    listeners.push(callback);
    this.subscribers[eventName] = listeners;
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
