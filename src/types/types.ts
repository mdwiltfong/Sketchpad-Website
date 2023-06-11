export type sliderState = {
  lightSliderValue: number;
  satSliderValue: number;
};

export type pencilState = {
  pencil: boolean;
  drawing: boolean;
  strokeValue: number;
  pencilIconBackground: string;
};
export type eraserState = {
  eraser: boolean;
  erasing: boolean;
  eraserValue: number;
  backgroundColor: string;
};

export type eyeDropperState = {
  eyeDropper: boolean;
  pickingColor: boolean;
  backgroundColor: string;
};

export type stateType = {
  sliderState: sliderState;
  pencilState: pencilState;
  eraserState: eraserState;
  eyeDropperState: eyeDropperState;
};

export enum eventTypes {
  activatePencil = "activatePencil",
  activateEraser = "activateEraser",
  startDrawing = "startDrawing",
  stopDrawing = "stopDrawing",
  startErasing = "startErasing",
  stopErasing = "stopErasing",
  changeBrushSize = "changeBrushSize",
  activateEyeDropper = "activateEyeDropper",
  startPickingColor = "startPickingColor",
  stopPickingColor = "stopPickingColor",
  drawing = "drawing",
}
export type eventListenerType =
  | "pointerdown"
  | "pointerup"
  | "pointermove"
  | "pointercancel"
  | "pointerleave"
  | "click";

export type boundEventListenerType = {
  [event in eventListenerType]: event extends "click"
    ? (e: MouseEvent) => void
    : (e: PointerEvent) => void;
};
