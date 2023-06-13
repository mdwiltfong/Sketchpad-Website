import { extend } from "lodash";
import Tool from "../components/Tools/Tool";
import { stateType, eventTypes, eventListenerType } from "../types/types";

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

type Listener<T> = (eventObject: T) => void;

type subscribers = {
  [key in eventTypes]: Listener<PointerEvent>[];
};
class State<T> {
  protected subscribers: subscribers = {
    startDrawing: [],
    drawing: [],
    activateEraser: [],
    activatePencil: [],
    activateEyeDropper: [],
    startErasing: [],
    stopErasing: [],
    changeBrushSize: [],
    stopDrawing: [],
    startPickingColor: [],
    stopPickingColor: [],
  };
  addListener(listenerFn: Listener<T>) {
    this.subscribers;
  }
}
const eventMap: {
  [key in eventTypes]: eventListenerType[];
} = {
  startDrawing: ["pointerdown"],
  stopDrawing: ["pointerup", "pointerleave"],
  drawing: ["pointermove"],
  activatePencil: ["click"],
  activateEraser: ["click"],
  startErasing: ["pointerdown"],
  stopErasing: ["pointerup"],
  changeBrushSize: ["click"],
  activateEyeDropper: ["click"],
  startPickingColor: ["pointerdown"],
  stopPickingColor: ["pointerup"],
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
  private static instance: ProjectState;

  private constructor() {
    super();
    this.canvasElement = document.getElementById("canva") as HTMLCanvasElement;
  }
  public getCanvas() {
    return this.canvasElement!;
  }
  public getState(): stateType {
    return JSON.parse(JSON.stringify(this.state));
  }
  public setState(newState: stateType): void {
    this.state = { ...this.state, ...newState };
  }
  /*
  subscriber method for eventlisteners
  @param eventName: eventTypes
  @param callback: (this: HTMLElement, e: PointerEvent | MouseEvent) => any
  @returns: void
  @description: adds eventlisteners to the canvas element while also keeping track of these listeners
  @example:
  projectState.subscribe("startDrawing", (e) => {
    console.log(e);
  }
  */
  public subscribe(
    eventName: eventTypes,
    callback: (this: HTMLElement, e: PointerEvent | MouseEvent) => any
  ) {
    if (this.subscribers[eventName].length > 0) return;
    const listeners = this.subscribers[eventName];
    eventMap[eventName].forEach((event) => {
      this.canvasElement.addEventListener(event, callback);
    });
    listeners.push(callback);
    this.subscribers[eventName] = listeners;
  }

  public publish(eventName: eventTypes, data: any) {
    if (!this.subscribers[eventName]) {
      return;
    }
    this.subscribers[eventName].forEach((callback) => {
      callback(data);
    });
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
