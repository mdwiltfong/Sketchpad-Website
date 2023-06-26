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
  currentColor: string;
};

export type eventTypes =
  | "activatePencil"
  | "startDrawing"
  | "stopDrawing"
  | "startErasing"
  | "stopErasing"
  | "changeBrushSize"
  | "activateEyeDropper"
  | "startPickingColor"
  | "stopPickingColor"
  | "drawing"
  | "activateEraser"
  | "updateLightness"
  | "updateSaturation"
  | "erasing"
  | "changeEraserSize"
  | "pickingColor";

export type stateSubscriberTypes =
  | "changeBrushSize"
  | "updateLightness"
  | "updateSaturation"
  | "activateEraser"
  | "activatePencil"
  | "activateEyeDropper"
  | "updateColor"
  | "clearCanvas";

export type eventListenerType =
  | "pointerdown"
  | "pointermove"
  | "pointerup"
  | "pointerleave"
  | "click"
  | "submit"
  | "input";
