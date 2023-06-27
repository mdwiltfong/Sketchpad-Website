## Drawing Pad website

## Description:

This project is a TypeScript clone of Jeremy's original [SketchPad Website](https://th0ughttrain.github.io/Sketchpad-Website/).

This project implements a state managment system which controls the state of all the tools on the app. As well as the canvas.

It also implements Generic TypeScript classes to consolidate code.

Basic drawing pad app where you can draw whatever you like and save your work locally to your hard drive.

When the page is loaded the pencil tool will be automatically selected. The default color is black but You can pick a color from the palette on the left as well as adjust the amount of lightness and saturation you would like for each color. The current color box at the bottom left will change color based on what you select.

Eraser Tool: To use the eraser simply click the eraser button and adjust the slider from left to right to select a size that you would like

Eyedropper tool: By clicking the eyedropper button under the palette you can pick colors you already put on the screen to set them as your pencil color. The current color box will also update to reflect these changes.
Important! If you select the blank canvas it will give you a completely transparent color.

Clear Canvas: Does just that clear the entire canvas.

Save: Allows you to save the drawing to your hard drive.

## How to run the project locally:

1. Run `npm install`
2. Run `npm start`. The app will spin up on port 9000.
