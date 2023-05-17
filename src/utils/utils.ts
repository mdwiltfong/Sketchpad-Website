import Tool from "../components/Tools/Tool";

export default function bind(
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
  private constructor(...tools: Tool[]) {
    super();
    this.tools = tools;
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
