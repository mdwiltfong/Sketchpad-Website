import Component, { insertAt } from "../BaseComponent";
import Tool from "./Tool";
export default class ToolBar extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(...tools: Tool[]) {
    super("container", insertAt.beforeend, "toolbar");
    this.renderContent(...tools);
  }
  public configure(): void {}
  public renderContent(...tools: Tool[]): void {}
}
