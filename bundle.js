/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BaseComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/BaseComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component),
/* harmony export */   insertAt: () => (/* binding */ insertAt)
/* harmony export */ });
var insertAt;
(function (insertAt) {
    insertAt["afterbegin"] = "afterbegin";
    insertAt["beforeend"] = "beforeend";
    insertAt["afterend"] = "afterend";
})(insertAt || (insertAt = {}));
class Component {
    constructor(hostElementId, insertAtStart, elementTag) {
        this.hostElement = document.getElementById(hostElementId);
        this.element = document.createElement(elementTag);
        this.attach(insertAtStart);
    }
    attach(insertAtStart) {
        this.hostElement.insertAdjacentElement(insertAtStart, this.element);
    }
}


/***/ }),

/***/ "./src/components/PencilSettings.ts":
/*!******************************************!*\
  !*** ./src/components/PencilSettings.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PencilSettings)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/components/BaseComponent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class PencilSettings extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(state, canvasContext) {
        super("toolbar", _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, "form");
        this.state = state;
        this.canvasContext = canvasContext;
        this.configure();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("changeBrushSize", this.changeBrushSize, this.element);
        this.element.addEventListener("submit", this.changeBrushSize);
    }
    configure() {
        this.element.setAttribute("id", "brush-settings");
        const label = document.createElement("label");
        label.setAttribute("for", "stroke-value");
        label.textContent = "Stroke Size";
        const input = document.createElement("input");
        input.type = "text";
        input.id = "stroke-value";
        input.placeholder = "1-50";
        input.value = this.state.pencilState.strokeValue.toString();
        const button = document.createElement("input");
        button.type = "button";
        button.id = "brush-size";
        button.value = "OK";
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterbegin, label);
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, input);
        input.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterend, button);
        this.hostElement.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.element);
    }
    changeBrushSize(e) {
        console.log("changeBrushSize");
        e.preventDefault();
        const inputElement = document.importNode(this.element, true).childNodes[1];
        const strokeValue = Number(inputElement.value);
        if (strokeValue > 50 || strokeValue < 1 || strokeValue == undefined) {
            alert("Only values 1 through 50 are accepted");
            return;
        }
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = strokeValue;
        this.state.pencilState.strokeValue = strokeValue;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("changeBrushSize", this.state);
    }
    renderContent() { }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], PencilSettings.prototype, "changeBrushSize", null);


/***/ }),

/***/ "./src/components/SlideForm.ts":
/*!*************************************!*\
  !*** ./src/components/SlideForm.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideForm)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/components/BaseComponent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class SlideForm extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(state, canvasContext) {
        super("color-picker-menu", _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, "form");
        this.state = state;
        this.canvasContext = canvasContext;
        this.configure();
        this.renderContent();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("updateLightness", this.updateLightness, this.lightInputElement);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("updateSaturation", this.updateSaturation, this.saturationInputElement);
    }
    configure() {
        const lightLabel = document.createElement("label");
        lightLabel.setAttribute("for", "lightness");
        lightLabel.innerText = "Light";
        this.lightInputElement = document.createElement("input");
        this.lightInputElement.type = "range";
        this.lightInputElement.id = "lightness";
        this.lightInputElement.className = "range";
        this.lightInputElement.value =
            this.state.sliderState.lightSliderValue.toString();
        const saturationLabel = document.createElement("label");
        saturationLabel.setAttribute("for", "saturation");
        saturationLabel.innerText = "Saturation";
        this.saturationInputElement = document.createElement("input");
        this.saturationInputElement.type = "range";
        this.saturationInputElement.id = "saturation";
        this.saturationInputElement.className = "range";
        this.saturationInputElement.value =
            this.state.sliderState.satSliderValue.toString();
        this.element.appendChild(lightLabel);
        this.element.appendChild(this.lightInputElement);
        this.element.appendChild(saturationLabel);
        this.element.appendChild(this.saturationInputElement);
        this.element.id = "slide-form";
        return this.element;
    }
    updateLightness(e) {
        e.preventDefault();
        console.log("updateLightness");
        this.state.sliderState.lightSliderValue = Number(this.lightInputElement.value);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("updateLightness", this.state);
    }
    updateSaturation(e) {
        e.preventDefault();
        console.log("updateSaturation");
        this.state.sliderState.satSliderValue = Number(this.saturationInputElement.value);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("updateSaturation", this.state);
    }
    renderContent() { }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], SlideForm.prototype, "updateLightness", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], SlideForm.prototype, "updateSaturation", null);


/***/ }),

/***/ "./src/components/Swatchs.ts":
/*!***********************************!*\
  !*** ./src/components/Swatchs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Swatchs)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/components/BaseComponent.ts");
/* harmony import */ var _SlideForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideForm */ "./src/components/SlideForm.ts");
/* harmony import */ var _swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swatch */ "./src/components/swatch.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class Swatchs extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super("container-canvas", _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterbegin, "div");
        this.state = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getState();
        this.canvas = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getCanvas();
        this.canvasCtx = this.canvas.getContext("2d");
        this.currentColor = document.getElementById("currentcolor");
        this.renderContent();
        this.configure();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("updateLightness", () => {
            const swatchs = document.getElementsByClassName("swatch");
            while (swatchs.length > 0) {
                swatchs[0].parentNode.removeChild(swatchs[0]);
            }
            this.renderContent();
            this.configure();
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("updateSaturation", () => {
            const swatchs = document.getElementsByClassName("swatch");
            while (swatchs.length > 0) {
                swatchs[0].parentNode.removeChild(swatchs[0]);
            }
            this.renderContent();
            this.configure();
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("updateColor", (data) => {
            this.updateCurrentColor(data.currentColor);
        });
        new _SlideForm__WEBPACK_IMPORTED_MODULE_2__["default"](this.state, this.canvasCtx);
    }
    renderContent() {
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.red, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.white, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.black, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.blue, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.green, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.orange, this.state);
        new _swatch__WEBPACK_IMPORTED_MODULE_3__["default"](_swatch__WEBPACK_IMPORTED_MODULE_3__.Color.pink, this.state);
    }
    pickSwatch(e) {
        const target = e.target;
        const color = target.value;
        this.updateCurrentColor(color);
        this.canvasCtx.strokeStyle = color;
        this.canvasCtx.beginPath();
    }
    updateCurrentColor(color) {
        this.currentColor.style.backgroundColor = color;
    }
    configure() {
        const swatchs = document.querySelectorAll(".swatch-btn");
        swatchs.forEach((swatch) => {
            swatch.addEventListener("click", this.pickSwatch);
        });
    }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Swatchs.prototype, "pickSwatch", null);


/***/ }),

/***/ "./src/components/Tools/Eraser.ts":
/*!****************************************!*\
  !*** ./src/components/Tools/Eraser.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Eraser)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseComponent */ "./src/components/BaseComponent.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tool */ "./src/components/Tools/Tool.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Eraser extends _Tool__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(state) {
        super("eraser", "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z", "button");
        this.state = state;
        this.canvas = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getCanvas();
        this.element.setAttribute("id", "eraser");
        this.eraserButton = this.element;
        this.configureFormSettings();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("startErasing", this.startTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("erasing", this.implementTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("stopErasing", this.stopTool, this.canvas);
        this.eraserButton.addEventListener("click", this.activateTool);
        this.eraserSettings.addEventListener("input", this.changeEraserSize);
    }
    configureFormSettings() {
        this.eraserSettings = document.createElement("form");
        const label = document.createElement("label");
        this.eraserInput = document.createElement("input");
        this.eraserSettings.setAttribute("id", "eraser-settings");
        label.setAttribute("for", "eraser-value");
        label.textContent = "Eraser Size";
        this.eraserInput.type = "range";
        this.eraserInput.id = "eraser-value";
        this.eraserInput.value = this.state.eraserState.eraserValue.toString();
        this.eraserSettings.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterbegin, label);
        this.eraserSettings.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.eraserInput);
        this.svg.style.background = this.state.eraserState.eraser
            ? "white"
            : "transparent";
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterend, this.eraserSettings);
    }
    startTool(pointerEvent) {
        if (this.state.eraserState.eraser == true) {
            console.log("startTool - Eraser");
            this.state.eraserState.erasing = true;
        }
    }
    stopTool(pointerEvent) {
        console.log("stopTool - Eraser");
        this.state.eraserState.erasing = false;
    }
    implementTool(e) {
        if (this.state.eraserState.eraser == true &&
            this.state.eraserState.erasing == true) {
            console.log("erasing");
            const ctx = this.canvas.getContext("2d");
            let x = e.offsetX;
            let y = e.offsetY;
            ctx.beginPath();
            ctx.clearRect(x - 12, y - 12, Number(this.state.eraserState.eraserValue), Number(this.state.eraserState.eraserValue));
        }
    }
    changeEraserSize(e) {
        e.preventDefault();
        console.log("changeEraserSize - Eraser");
        this.state.eraserState.eraserValue = Number(this.eraserInput.value);
    }
    activateTool(e) {
        console.log("startTool - Eraser");
        if (this.state.eraserState.eraser == false) {
            this.state.eraserState.eraser = true;
            this.state.eraserState.backgroundColor = "White";
            this.state.pencilState.pencil = false;
            this.state.pencilState.pencilIconBackground = "transparent";
            this.state.eyeDropperState.eyeDropper = false;
            this.state.eyeDropperState.backgroundColor = "transparent";
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("activateEraser", this.state);
        }
    }
    renderContent() { }
    render() { }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Eraser.prototype, "startTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Eraser.prototype, "stopTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Eraser.prototype, "implementTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Eraser.prototype, "changeEraserSize", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], Eraser.prototype, "activateTool", null);


/***/ }),

/***/ "./src/components/Tools/EyeDropper.ts":
/*!********************************************!*\
  !*** ./src/components/Tools/EyeDropper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EyeDropper)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseComponent */ "./src/components/BaseComponent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class EyeDropper extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(state) {
        super("color-picker-menu", _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, "div");
        this.state = state;
        this.canvas = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getCanvas();
        this.configure();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("startPickingColor", this.startTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("stopPickingColor", this.stopTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.addEventListener("pickingColor", this.implementTool, this.canvas);
        this.eyeDropperButton.addEventListener("click", this.activateTool);
    }
    configure() {
        this.eyeDropperButton = document.createElement("button");
        this.eyeDropperButton.setAttribute("id", "eye-btn");
        this.eyeDropperButton.setAttribute("class", "icon");
        this.svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.pathTag = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.configureSVG();
        this.configurePath();
        this.eyeDropperButton.style.background = this.state.eyeDropperState
            .eyeDropper
            ? "white"
            : "transparent";
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.eyeDropperButton);
        this.element.id = "eyedropper";
    }
    configureSVG() {
        this.svgElement.setAttribute("class", "icon-img");
        this.svgElement.setAttribute("id", "eyedrop-icon");
        this.svgElement.setAttribute("width", "28px");
        this.svgElement.setAttribute("height", "28px");
        this.svgElement.setAttribute("viewBox", "0 0 16 16");
        this.svgElement.setAttribute("fill", "currentColor");
        this.eyeDropperButton.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.afterbegin, this.svgElement);
    }
    configurePath() {
        this.pathTag.setAttribute("d", "M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z");
        this.svgElement.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.pathTag);
    }
    activateTool() {
        if (this.state.eyeDropperState.eyeDropper == false) {
            console.log("activating tool - Eyedropper");
            this.state.eraserState.eraser = false;
            this.state.pencilState.pencil = false;
            this.state.eyeDropperState.eyeDropper = true;
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("activateEyeDropper", this.state);
        }
    }
    implementTool(e) {
        if (this.state.eyeDropperState.eyeDropper == true) {
            const ctx = this.canvas.getContext("2d");
            let x = e.offsetX;
            let y = e.offsetY;
            let imageData = ctx.getImageData(x, y, 1, 1);
            let red = imageData.data[0];
            let green = imageData.data[1];
            let blue = imageData.data[2];
            let colorValues = this.rgbToHsl(red, green, blue);
            this.state.currentColor = colorValues;
            ctx.beginPath();
            ctx.strokeStyle = colorValues;
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("updateColor", this.state);
        }
    }
    rgbToHsl(r, g, b) {
        (r /= 255), (g /= 255), (b /= 255);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return `hsl(${h * 360}, ${s * 100}%, ${l * 100}%)`;
    }
    stopTool(pointerEvent) {
        if (this.state.eyeDropperState.pickingColor == true) {
            console.log("stopping tool - EyeDropper");
            this.state.eyeDropperState.pickingColor = false;
        }
    }
    startTool(e) {
        if (this.state.eyeDropperState.eyeDropper == true) {
            this.state.eyeDropperState.pickingColor = true;
        }
    }
    renderContent() { }
    render() { }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], EyeDropper.prototype, "activateTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], EyeDropper.prototype, "implementTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], EyeDropper.prototype, "stopTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], EyeDropper.prototype, "startTool", null);


/***/ }),

/***/ "./src/components/Tools/Pencil.ts":
/*!****************************************!*\
  !*** ./src/components/Tools/Pencil.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pencil)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/components/Tools/Tool.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _PencilSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PencilSettings */ "./src/components/PencilSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Pencil extends _Tool__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(state) {
        super("pencil", "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z", "button");
        this.state = state;
        this.canvas = _utils_utils__WEBPACK_IMPORTED_MODULE_1__.projectState.getCanvas();
        this.canvasContext = this.canvas.getContext("2d");
        this.element.setAttribute("id", "pencil");
        this.configurePencil();
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__.projectState.addEventListener("startDrawing", this.startTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__.projectState.addEventListener("drawing", this.implementTool, this.canvas);
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__.projectState.addEventListener("stopDrawing", this.stopTool, this.canvas);
        this.pencilIcon.addEventListener("click", this.activateTool);
    }
    configurePencil() {
        this.configureFormSettings();
        this.pencilIcon = this.element;
        this.svg.style.background = this.state.pencilState.pencil
            ? "white"
            : "transparent";
    }
    configureFormSettings() {
        new _PencilSettings__WEBPACK_IMPORTED_MODULE_2__["default"](this.state, this.canvasContext);
    }
    render() {
        this.configureFormSettings();
    }
    startTool(pointerEvent) {
        const canvasContext = this.canvas.getContext("2d");
        if (pointerEvent.pressure > 0 && this.state.pencilState.pencil == true) {
            console.log("startTool - Pencil");
            this.state.pencilState.drawing = true;
            let x = pointerEvent.offsetX;
            let y = pointerEvent.offsetY;
            canvasContext.moveTo(x, y);
        }
        else if (this.state.pencilState.pencil == true) {
            this.state.pencilState.drawing = true;
        }
    }
    activateTool(eventObject) {
        console.log("Activate Pencil ");
        if (this.state.eraserState.eraser == true ||
            this.state.eyeDropperState.eyeDropper == true ||
            this.state.pencilState.pencil == false) {
            this.state.eyeDropperState.eyeDropper = false;
            this.state.eraserState.eraser = false;
            this.state.pencilState.pencil = true;
            console.log("activateTool - pencil");
            this.state.pencilState.pencilIconBackground = "white";
            _utils_utils__WEBPACK_IMPORTED_MODULE_1__.projectState.publish("activatePencil", this.state);
        }
    }
    implementTool(pointerEvent) {
        if (this.state.pencilState.drawing == true &&
            this.state.pencilState.pencil == true) {
            console.log("impementTool - Pencil");
            let x = pointerEvent.offsetX;
            let y = pointerEvent.offsetY;
            this.canvasContext.lineTo(x, y);
            this.canvasContext.stroke();
        }
    }
    stopTool(eventObject) {
        console.log("stopTool - Pencil");
        this.state.pencilState.drawing = false;
    }
    renderContent() { }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bind
], Pencil.prototype, "startTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bind
], Pencil.prototype, "activateTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bind
], Pencil.prototype, "implementTool", null);
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bind
], Pencil.prototype, "stopTool", null);


/***/ }),

/***/ "./src/components/Tools/Tool.ts":
/*!**************************************!*\
  !*** ./src/components/Tools/Tool.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tool)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseComponent */ "./src/components/BaseComponent.ts");

class Tool extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(toolId, pathD, elementTag) {
        super("toolbar", _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.afterbegin, elementTag);
        this.toolId = toolId;
        this.pathD = pathD;
        this.elementTag = elementTag;
        this.configure();
        this.renderContent();
    }
    configure() {
        this.element.setAttribute("class", "icon");
        this.element.setAttribute("id", `${this.toolId}`);
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.pathTag = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.configureSVG();
        this.configurePath();
    }
    configureSVG() {
        this.svg.setAttribute("class", "icon-img bi bi-eraser-fill");
        this.svg.setAttribute("id", `${this.toolId}-icon`);
        this.svg.setAttribute("width", "28");
        this.svg.setAttribute("height", "28");
        this.svg.setAttribute("viewBox", "0 0 16 16");
        this.svg.setAttribute("fill", "currentColor");
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.afterbegin, this.svg);
    }
    configurePath() {
        this.pathTag.setAttribute("d", this.pathD);
        this.svg.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.beforeend, this.pathTag);
    }
}


/***/ }),

/***/ "./src/components/Tools/ToolBar.ts":
/*!*****************************************!*\
  !*** ./src/components/Tools/ToolBar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToolBar)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseComponent */ "./src/components/BaseComponent.ts");
/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pencil */ "./src/components/Tools/Pencil.ts");
/* harmony import */ var _EyeDropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EyeDropper */ "./src/components/Tools/EyeDropper.ts");
/* harmony import */ var _Eraser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Eraser */ "./src/components/Tools/Eraser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class ToolBar extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super("container", _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, "div");
        this.state = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getState();
        this.canvas = _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.getCanvas();
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("changeBrushSize", (data) => {
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.setState(data);
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("activateEraser", (data) => {
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.setState(data);
            this.renderTools();
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("activatePencil", (data) => {
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.setState(data);
            this.renderTools();
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("activateEyeDropper", (data) => {
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.setState(data);
            this.renderTools();
        });
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.subscribeState("clearCanvas", (data) => {
            _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.setState(data);
            this.renderTools();
        });
        this.renderCanvasButtons();
        this.configure();
        this.renderTools();
    }
    configure() { }
    renderCanvasButtons() {
        this.clearCanvasBtn = document.createElement("button");
        this.clearCanvasBtn.innerText = "Clear Canvas";
        this.clearCanvasBtn.id = "clear";
        this.clearCanvasBtn.type = "button";
        this.clearCanvasBtn.addEventListener("click", this.clearCanvase);
        this.saveCanvasBtn = document.createElement("button");
        this.saveCanvasBtn.innerText = "Save Canvas";
        this.saveCanvasBtn.id = "save";
        this.saveCanvasBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            try {
                return _utils_utils__WEBPACK_IMPORTED_MODULE_0__.SaveFileHandler.saveDrawing(this.canvas);
            }
            catch (error) {
                console.error(error);
                return;
            }
        }));
        this.element.setAttribute("id", "toolbar");
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.clearCanvasBtn);
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__.insertAt.beforeend, this.saveCanvasBtn);
    }
    renderTools() {
        console.log("Render Tools");
        console.log(this.element);
        this.element.innerHTML = "";
        new _Pencil__WEBPACK_IMPORTED_MODULE_2__["default"](this.state);
        new _Eraser__WEBPACK_IMPORTED_MODULE_4__["default"](this.state);
        this.renderEyeDropper();
        this.renderCanvasButtons();
    }
    renderContent(...tools) { }
    renderEyeDropper() {
        const eyeDropper = document.getElementById("eyedropper");
        if (eyeDropper) {
            eyeDropper.parentNode.removeChild(eyeDropper);
        }
        new _EyeDropper__WEBPACK_IMPORTED_MODULE_3__["default"](this.state);
    }
    clearCanvase() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, 700, 500);
        ctx.beginPath();
        this.state.pencilState.pencil = true;
        this.state.eraserState.eraser = false;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__.projectState.publish("clearCanvas", this.state);
    }
}
__decorate([
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bind
], ToolBar.prototype, "clearCanvase", null);


/***/ }),

/***/ "./src/components/swatch.ts":
/*!**********************************!*\
  !*** ./src/components/swatch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   "default": () => (/* binding */ Swatch)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ "./src/components/BaseComponent.ts");

var Color;
(function (Color) {
    Color["red"] = "red";
    Color["white"] = "white";
    Color["black"] = "black";
    Color["blue"] = "blue";
    Color["green"] = "green";
    Color["orange"] = "orange";
    Color["pink"] = "pink";
})(Color || (Color = {}));
const colorMap = {
    red: [0, 100, 50],
    white: [0, 100, 100],
    black: [0, 100, 0],
    blue: [240, 100, 50],
    green: [120, 100, 50],
    orange: [30, 100, 50],
    pink: [330, 100, 50],
};
class Swatch extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(defaultColor, state) {
        super("color-picker-menu", _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.afterbegin, "div");
        this.defaultColor = defaultColor;
        this.state = state;
        const [h, s, l] = colorMap[defaultColor];
        this.hue = h;
        this.saturation = (s * this.state.sliderState.satSliderValue) / 100;
        this.lightness = (l * this.state.sliderState.lightSliderValue) / 100;
        this.hslColor = this.calculateColor(h, s, l);
        this.configure();
    }
    configure() {
        this.configureInnerText();
        this.swatchDiv = this.createSwatchElement();
        this.renderContent();
    }
    renderContent() {
        this.hostElement.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.afterbegin, this.swatchDiv);
    }
    calculateColor(h, s, l) {
        return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    }
    createSwatchElement() {
        this.element.setAttribute("style", `background-color:${this.hslColor}`);
        this.element.setAttribute("class", "swatch");
        const swatch = document.createElement("button");
        swatch.className = "swatch-btn";
        swatch.type = "button";
        swatch.value = this.hslColor;
        swatch.innerText = this.innerText;
        this.element.insertAdjacentElement(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__.insertAt.afterbegin, swatch);
        return this.element;
    }
    configureInnerText() {
        switch (this.defaultColor) {
            case Color.red:
                this.innerText = "Red";
                break;
            case Color.white:
                this.innerText = "White";
                break;
            case Color.black:
                this.innerText = "Black";
                break;
            case Color.blue:
                this.innerText = "Blue";
                break;
            case Color.green:
                this.innerText = "Green";
                break;
            case Color.orange:
                this.innerText = "Orange";
                break;
            case Color.pink:
                this.innerText = "Pink";
                break;
        }
    }
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveFileHandler: () => (/* binding */ SaveFileHandler),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   projectState: () => (/* binding */ projectState)
/* harmony export */ });
function bind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        },
    };
    return adjustedDescriptor;
}
class State {
    constructor() {
        this.eventListeners = {
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
            updateLightness: [],
            updateSaturation: [],
            erasing: [],
            changeEraserSize: [],
            pickingColor: [],
        };
        this.subscribers = {
            changeBrushSize: [],
            updateLightness: [],
            updateSaturation: [],
            activateEraser: [],
            activatePencil: [],
            activateEyeDropper: [],
            updateColor: [],
            clearCanvas: [],
        };
    }
}
const eventMap = {
    startDrawing: ["pointerdown"],
    stopDrawing: ["pointerup", "pointerleave"],
    drawing: ["pointermove"],
    activatePencil: ["click"],
    activateEraser: ["click"],
    startErasing: ["pointerdown"],
    stopErasing: ["pointerup", "pointerleave"],
    changeBrushSize: ["submit"],
    activateEyeDropper: ["click"],
    startPickingColor: ["pointerdown"],
    stopPickingColor: ["pointerup"],
    updateLightness: ["input"],
    updateSaturation: ["input"],
    erasing: ["pointermove"],
    changeEraserSize: ["input"],
    pickingColor: ["pointerdown"],
};
class ProjectState extends State {
    constructor() {
        super();
        this.state = {
            sliderState: {
                lightSliderValue: 100,
                satSliderValue: 100,
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
            currentColor: "transparent",
        };
        this.canvasElement = document.getElementById("canva");
    }
    getCanvas() {
        return this.canvasElement;
    }
    getState() {
        return JSON.parse(JSON.stringify(this.state));
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
    }
    addEventListener(eventName, callback, element) {
        if (this.eventListeners[eventName].length > 0)
            return;
        const listeners = this.eventListeners[eventName];
        if (element) {
            eventMap[eventName].forEach((event) => {
                element.addEventListener(event, callback);
            });
            listeners.push(callback);
        }
        else {
            listeners.push(callback);
        }
    }
    subscribeState(eventName, callback) {
        if (this.subscribers[eventName].length > 0)
            return;
        this.subscribers[eventName].push(callback);
    }
    publish(eventName, data) {
        if (!this.subscribers[eventName]) {
            return;
        }
        const callbacks = this.subscribers[eventName];
        callbacks.forEach((callback) => {
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
class SaveFileHandler {
    static saveDrawing(canvas) {
        canvas.toBlob((blob) => {
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = URL.createObjectURL(blob);
            link.click();
        }, "image/png");
    }
}
SaveFileHandler.options = {
    types: [
        {
            desciption: "Text File",
            accept: {
                "text/plain": [".txt"],
            },
        },
    ],
};
const projectState = ProjectState.getInstance();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Swatchs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Swatchs */ "./src/components/Swatchs.ts");
/* harmony import */ var _components_Tools_ToolBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tools/ToolBar */ "./src/components/Tools/ToolBar.ts");


new _components_Swatchs__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _components_Tools_ToolBar__WEBPACK_IMPORTED_MODULE_1__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMMkM7QUFDTTtBQUNqRCxJQUFJLDJEQUFPLEVBQUUsQ0FBQztBQUNkLElBQUksaUVBQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1za2V0Y2hwYWQvLi9zcmMvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkLy4vc3JjL2NvbXBvbmVudHMvUGVuY2lsU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1za2V0Y2hwYWQvLi9zcmMvY29tcG9uZW50cy9TbGlkZUZvcm0udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1za2V0Y2hwYWQvLi9zcmMvY29tcG9uZW50cy9Td2F0Y2hzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkLy4vc3JjL2NvbXBvbmVudHMvVG9vbHMvRXJhc2VyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkLy4vc3JjL2NvbXBvbmVudHMvVG9vbHMvRXllRHJvcHBlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXNrZXRjaHBhZC8uL3NyYy9jb21wb25lbnRzL1Rvb2xzL1BlbmNpbC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXNrZXRjaHBhZC8uL3NyYy9jb21wb25lbnRzL1Rvb2xzL1Rvb2wudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1za2V0Y2hwYWQvLi9zcmMvY29tcG9uZW50cy9Ub29scy9Ub29sQmFyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkLy4vc3JjL2NvbXBvbmVudHMvc3dhdGNoLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXNrZXRjaHBhZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtc2tldGNocGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1za2V0Y2hwYWQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIGluc2VydEF0IHtcbiAgYWZ0ZXJiZWdpbiA9IFwiYWZ0ZXJiZWdpblwiLFxuICBiZWZvcmVlbmQgPSBcImJlZm9yZWVuZFwiLFxuICBhZnRlcmVuZCA9IFwiYWZ0ZXJlbmRcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFxuICBUIGV4dGVuZHMgSFRNTEVsZW1lbnQgJiBIVE1MRGl2RWxlbWVudCxcbiAgVSBleHRlbmRzIEhUTUxFbGVtZW50IHwgSFRNTEZvcm1FbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCBIVE1MQnV0dG9uRWxlbWVudFxuPiB7XG4gIHByb3RlY3RlZCBob3N0RWxlbWVudDogVDtcbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IFU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaG9zdEVsZW1lbnRJZDogc3RyaW5nLFxuICAgIGluc2VydEF0U3RhcnQ6IGluc2VydEF0LFxuICAgIGVsZW1lbnRUYWc6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCkhIGFzIFQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VGFnKSBhcyBVO1xuICAgIHRoaXMuYXR0YWNoKGluc2VydEF0U3RhcnQpO1xuICB9XG4gIHByaXZhdGUgYXR0YWNoKGluc2VydEF0U3RhcnQ6IGluc2VydEF0KSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXRTdGFydCwgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGFic3RyYWN0IGNvbmZpZ3VyZSgpOiB2b2lkO1xuICBhYnN0cmFjdCByZW5kZXJDb250ZW50KCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBzdGF0ZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IGJpbmQsIHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCwgeyBpbnNlcnRBdCB9IGZyb20gXCIuL0Jhc2VDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuY2lsU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBIVE1MRm9ybUVsZW1lbnRcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0YXRlOiBzdGF0ZVR5cGUsXG4gICAgcHJpdmF0ZSBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKSB7XG4gICAgc3VwZXIoXCJ0b29sYmFyXCIsIGluc2VydEF0LmJlZm9yZWVuZCwgXCJmb3JtXCIpO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8S2V5Ym9hcmRFdmVudD4oXG4gICAgICBcImNoYW5nZUJydXNoU2l6ZVwiLFxuICAgICAgdGhpcy5jaGFuZ2VCcnVzaFNpemUsXG4gICAgICB0aGlzLmVsZW1lbnRcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuY2hhbmdlQnJ1c2hTaXplKTtcbiAgfVxuICBwdWJsaWMgY29uZmlndXJlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJydXNoLXNldHRpbmdzXCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInN0cm9rZS12YWx1ZVwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiU3Ryb2tlIFNpemVcIjtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQuaWQgPSBcInN0cm9rZS12YWx1ZVwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCIxLTUwXCI7XG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLnN0cm9rZVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidXR0b24uaWQgPSBcImJydXNoLXNpemVcIjtcbiAgICBidXR0b24udmFsdWUgPSBcIk9LXCI7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5hZnRlcmJlZ2luLCBsYWJlbCk7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5iZWZvcmVlbmQsIGlucHV0KTtcbiAgICBpbnB1dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXQuYWZ0ZXJlbmQsIGJ1dHRvbik7XG5cbiAgICAvLyBhZGQgZWxlbWVudCB0byBidXR0b25cbiAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5iZWZvcmVlbmQsIHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgQGJpbmRcbiAgcHJpdmF0ZSBjaGFuZ2VCcnVzaFNpemUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZUJydXNoU2l6ZVwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRydWVcbiAgICApLmNoaWxkTm9kZXNbMV0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBzdHJva2VWYWx1ZSA9IE51bWJlcihpbnB1dEVsZW1lbnQudmFsdWUpO1xuICAgIGlmIChzdHJva2VWYWx1ZSA+IDUwIHx8IHN0cm9rZVZhbHVlIDwgMSB8fCBzdHJva2VWYWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsZXJ0KFwiT25seSB2YWx1ZXMgMSB0aHJvdWdoIDUwIGFyZSBhY2NlcHRlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jYW52YXNDb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZVZhbHVlO1xuICAgIHRoaXMuc3RhdGUucGVuY2lsU3RhdGUuc3Ryb2tlVmFsdWUgPSBzdHJva2VWYWx1ZTtcbiAgICBwcm9qZWN0U3RhdGUucHVibGlzaChcImNoYW5nZUJydXNoU2l6ZVwiLCB0aGlzLnN0YXRlKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyQ29udGVudCgpIHt9XG59XG4iLCJpbXBvcnQgeyBzdGF0ZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IGJpbmQsIHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCwgeyBpbnNlcnRBdCB9IGZyb20gXCIuL0Jhc2VDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50PFxuICBIVE1MRGl2RWxlbWVudCxcbiAgSFRNTEZvcm1FbGVtZW50XG4+IHtcbiAgcHJpdmF0ZSBsaWdodElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBzYXR1cmF0aW9uSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0YXRlOiBzdGF0ZVR5cGUsXG4gICAgcHJpdmF0ZSBjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKSB7XG4gICAgc3VwZXIoXCJjb2xvci1waWNrZXItbWVudVwiLCBpbnNlcnRBdC5iZWZvcmVlbmQsIFwiZm9ybVwiKTtcbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPElucHV0RXZlbnQ+KFxuICAgICAgXCJ1cGRhdGVMaWdodG5lc3NcIixcbiAgICAgIHRoaXMudXBkYXRlTGlnaHRuZXNzLFxuICAgICAgdGhpcy5saWdodElucHV0RWxlbWVudFxuICAgICk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8SW5wdXRFdmVudD4oXG4gICAgICBcInVwZGF0ZVNhdHVyYXRpb25cIixcbiAgICAgIHRoaXMudXBkYXRlU2F0dXJhdGlvbixcbiAgICAgIHRoaXMuc2F0dXJhdGlvbklucHV0RWxlbWVudFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY29uZmlndXJlKCkge1xuICAgIC8vIExpZ2h0bmVzcyBzbGlkZXJcbiAgICBjb25zdCBsaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxpZ2h0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibGlnaHRuZXNzXCIpO1xuICAgIGxpZ2h0TGFiZWwuaW5uZXJUZXh0ID0gXCJMaWdodFwiO1xuICAgIHRoaXMubGlnaHRJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5saWdodElucHV0RWxlbWVudC50eXBlID0gXCJyYW5nZVwiO1xuICAgIHRoaXMubGlnaHRJbnB1dEVsZW1lbnQuaWQgPSBcImxpZ2h0bmVzc1wiO1xuICAgIHRoaXMubGlnaHRJbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJyYW5nZVwiO1xuICAgIHRoaXMubGlnaHRJbnB1dEVsZW1lbnQudmFsdWUgPVxuICAgICAgdGhpcy5zdGF0ZS5zbGlkZXJTdGF0ZS5saWdodFNsaWRlclZhbHVlLnRvU3RyaW5nKCk7XG4gICAgLy8gU2F0dXJhdGlvbiBzbGlkZXJcbiAgICBjb25zdCBzYXR1cmF0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc2F0dXJhdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNhdHVyYXRpb25cIik7XG4gICAgc2F0dXJhdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiU2F0dXJhdGlvblwiO1xuICAgIHRoaXMuc2F0dXJhdGlvbklucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aGlzLnNhdHVyYXRpb25JbnB1dEVsZW1lbnQudHlwZSA9IFwicmFuZ2VcIjtcbiAgICB0aGlzLnNhdHVyYXRpb25JbnB1dEVsZW1lbnQuaWQgPSBcInNhdHVyYXRpb25cIjtcbiAgICB0aGlzLnNhdHVyYXRpb25JbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gXCJyYW5nZVwiO1xuICAgIHRoaXMuc2F0dXJhdGlvbklucHV0RWxlbWVudC52YWx1ZSA9XG4gICAgICB0aGlzLnN0YXRlLnNsaWRlclN0YXRlLnNhdFNsaWRlclZhbHVlLnRvU3RyaW5nKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobGlnaHRMYWJlbCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGlnaHRJbnB1dEVsZW1lbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzYXR1cmF0aW9uTGFiZWwpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNhdHVyYXRpb25JbnB1dEVsZW1lbnQpO1xuICAgIHRoaXMuZWxlbWVudC5pZCA9IFwic2xpZGUtZm9ybVwiO1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbiAgQGJpbmRcbiAgcHJpdmF0ZSB1cGRhdGVMaWdodG5lc3MoZTogSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZUxpZ2h0bmVzc1wiKTtcbiAgICB0aGlzLnN0YXRlLnNsaWRlclN0YXRlLmxpZ2h0U2xpZGVyVmFsdWUgPSBOdW1iZXIoXG4gICAgICB0aGlzLmxpZ2h0SW5wdXRFbGVtZW50LnZhbHVlXG4gICAgKTtcbiAgICBwcm9qZWN0U3RhdGUucHVibGlzaChcInVwZGF0ZUxpZ2h0bmVzc1wiLCB0aGlzLnN0YXRlKTtcbiAgfVxuICBAYmluZFxuICBwcml2YXRlIHVwZGF0ZVNhdHVyYXRpb24oZTogSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVNhdHVyYXRpb25cIik7XG4gICAgdGhpcy5zdGF0ZS5zbGlkZXJTdGF0ZS5zYXRTbGlkZXJWYWx1ZSA9IE51bWJlcihcbiAgICAgIHRoaXMuc2F0dXJhdGlvbklucHV0RWxlbWVudC52YWx1ZVxuICAgICk7XG4gICAgcHJvamVjdFN0YXRlLnB1Ymxpc2goXCJ1cGRhdGVTYXR1cmF0aW9uXCIsIHRoaXMuc3RhdGUpO1xuICB9XG4gIHB1YmxpYyByZW5kZXJDb250ZW50KCkge31cbn1cbiIsImltcG9ydCB7IGV2ZW50VHlwZXMsIHN0YXRlVHlwZSB9IGZyb20gXCIuLi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgYmluZCwgcHJvamVjdFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50LCB7IGluc2VydEF0IH0gZnJvbSBcIi4vQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IFNsaWRlRm9ybSBmcm9tIFwiLi9TbGlkZUZvcm1cIjtcbmltcG9ydCBTd2F0Y2gsIHsgQ29sb3IgfSBmcm9tIFwiLi9zd2F0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dhdGNocyBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCwgSFRNTERpdkVsZW1lbnQ+IHtcbiAgcHJpdmF0ZSBzdGF0ZSA9IHByb2plY3RTdGF0ZS5nZXRTdGF0ZSgpO1xuICBwcml2YXRlIGNhbnZhcyA9IHByb2plY3RTdGF0ZS5nZXRDYW52YXMoKTtcbiAgcHJpdmF0ZSBjYW52YXNDdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xuICBwcml2YXRlIGN1cnJlbnRDb2xvcjogSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiY29udGFpbmVyLWNhbnZhc1wiLCBpbnNlcnRBdC5hZnRlcmJlZ2luLCBcImRpdlwiKTtcbiAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjdXJyZW50Y29sb3JcIlxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG5cbiAgICBwcm9qZWN0U3RhdGUuc3Vic2NyaWJlU3RhdGUoXCJ1cGRhdGVMaWdodG5lc3NcIiwgKCkgPT4ge1xuICAgICAgLy8gVGhpcyBtZXRob2QgaXMgdG9vIGRlc3RydWN0aXZlLiBJdCBvbmx5IG5lZWRzIHRvIHJlbW92ZSB0aGUgc3dhdGNoZXMuIE5vdCBldmVyeXRoaW5nIHVuZGVyIGBjb2xvci1waWNrZXItbWVudWAuXG4gICAgICBjb25zdCBzd2F0Y2hzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN3YXRjaFwiKTtcbiAgICAgIHdoaWxlIChzd2F0Y2hzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc3dhdGNoc1swXS5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzd2F0Y2hzWzBdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0U3RhdGUuc3Vic2NyaWJlU3RhdGUoXCJ1cGRhdGVTYXR1cmF0aW9uXCIsICgpID0+IHtcbiAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIHRvbyBkZXN0cnVjdGl2ZS4gSXQgb25seSBuZWVkcyB0byByZW1vdmUgdGhlIHN3YXRjaGVzLiBOb3QgZXZlcnl0aGluZyB1bmRlciBgY29sb3ItcGlja2VyLW1lbnVgLlxuICAgICAgY29uc3Qgc3dhdGNocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzd2F0Y2hcIik7XG4gICAgICB3aGlsZSAoc3dhdGNocy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHN3YXRjaHNbMF0ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoc3dhdGNoc1swXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgfSk7XG4gICAgcHJvamVjdFN0YXRlLnN1YnNjcmliZVN0YXRlKFwidXBkYXRlQ29sb3JcIiwgKGRhdGE6IHN0YXRlVHlwZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50Q29sb3IoZGF0YS5jdXJyZW50Q29sb3IpO1xuICAgIH0pO1xuICAgIG5ldyBTbGlkZUZvcm0odGhpcy5zdGF0ZSwgdGhpcy5jYW52YXNDdHgpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckNvbnRlbnQoKTogdm9pZCB7XG4gICAgbmV3IFN3YXRjaChDb2xvci5yZWQsIHRoaXMuc3RhdGUpO1xuICAgIG5ldyBTd2F0Y2goQ29sb3Iud2hpdGUsIHRoaXMuc3RhdGUpO1xuICAgIG5ldyBTd2F0Y2goQ29sb3IuYmxhY2ssIHRoaXMuc3RhdGUpO1xuICAgIG5ldyBTd2F0Y2goQ29sb3IuYmx1ZSwgdGhpcy5zdGF0ZSk7XG4gICAgbmV3IFN3YXRjaChDb2xvci5ncmVlbiwgdGhpcy5zdGF0ZSk7XG4gICAgbmV3IFN3YXRjaChDb2xvci5vcmFuZ2UsIHRoaXMuc3RhdGUpO1xuICAgIG5ldyBTd2F0Y2goQ29sb3IucGluaywgdGhpcy5zdGF0ZSk7XG4gIH1cbiAgQGJpbmRcbiAgcHJpdmF0ZSBwaWNrU3dhdGNoKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgY29sb3IgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy51cGRhdGVDdXJyZW50Q29sb3IoY29sb3IpO1xuICAgIHRoaXMuY2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50Q29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudENvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB9XG4gIHB1YmxpYyBjb25maWd1cmUoKTogdm9pZCB7XG4gICAgY29uc3Qgc3dhdGNocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dhdGNoLWJ0blwiKTtcbiAgICBzd2F0Y2hzLmZvckVhY2goKHN3YXRjaCkgPT4ge1xuICAgICAgc3dhdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnBpY2tTd2F0Y2gpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzdGF0ZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IGJpbmQsIHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgaW5zZXJ0QXQgfSBmcm9tIFwiLi4vQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcmFzZXIgZXh0ZW5kcyBUb29sIHtcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gcHJvamVjdFN0YXRlLmdldENhbnZhcygpO1xuICBwcml2YXRlIGVyYXNlcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBwcml2YXRlIGVyYXNlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgZXJhc2VyU2V0dGluZ3M6IEhUTUxGb3JtRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogc3RhdGVUeXBlKSB7XG4gICAgc3VwZXIoXG4gICAgICBcImVyYXNlclwiLFxuICAgICAgXCJNOC4wODYgMi4yMDdhMiAyIDAgMCAxIDIuODI4IDBsMy44NzkgMy44NzlhMiAyIDAgMCAxIDAgMi44MjhsLTUuNSA1LjVBMiAyIDAgMCAxIDcuODc5IDE1SDUuMTJhMiAyIDAgMCAxLTEuNDE0LS41ODZsLTIuNS0yLjVhMiAyIDAgMCAxIDAtMi44MjhsNi44NzktNi44Nzl6bS42NiAxMS4zNEwzLjQ1MyA4LjI1NCAxLjkxNCA5Ljc5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjUgMi41YTEgMSAwIDAgMCAuNzA3LjI5M0g3Ljg4YTEgMSAwIDAgMCAuNzA3LS4yOTNsLjE2LS4xNnpcIixcbiAgICAgIFwiYnV0dG9uXCJcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVyYXNlclwiKTtcbiAgICB0aGlzLmVyYXNlckJ1dHRvbiA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZ3VyZUZvcm1TZXR0aW5ncygpO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudD4oXG4gICAgICBcInN0YXJ0RXJhc2luZ1wiLFxuICAgICAgdGhpcy5zdGFydFRvb2wsXG4gICAgICB0aGlzLmNhbnZhc1xuICAgICk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8UG9pbnRlckV2ZW50PihcbiAgICAgIFwiZXJhc2luZ1wiLFxuICAgICAgdGhpcy5pbXBsZW1lbnRUb29sLFxuICAgICAgdGhpcy5jYW52YXNcbiAgICApO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudD4oXG4gICAgICBcInN0b3BFcmFzaW5nXCIsXG4gICAgICB0aGlzLnN0b3BUb29sLFxuICAgICAgdGhpcy5jYW52YXNcbiAgICApO1xuXG4gICAgdGhpcy5lcmFzZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWN0aXZhdGVUb29sKTtcbiAgICB0aGlzLmVyYXNlclNldHRpbmdzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLmNoYW5nZUVyYXNlclNpemUpO1xuICB9XG4gIHByaXZhdGUgY29uZmlndXJlRm9ybVNldHRpbmdzKCkge1xuICAgIHRoaXMuZXJhc2VyU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aGlzLmVyYXNlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMuZXJhc2VyU2V0dGluZ3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlcmFzZXItc2V0dGluZ3NcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZXJhc2VyLXZhbHVlXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJFcmFzZXIgU2l6ZVwiO1xuICAgIHRoaXMuZXJhc2VySW5wdXQudHlwZSA9IFwicmFuZ2VcIjtcbiAgICB0aGlzLmVyYXNlcklucHV0LmlkID0gXCJlcmFzZXItdmFsdWVcIjtcbiAgICB0aGlzLmVyYXNlcklucHV0LnZhbHVlID0gdGhpcy5zdGF0ZS5lcmFzZXJTdGF0ZS5lcmFzZXJWYWx1ZS50b1N0cmluZygpO1xuXG4gICAgdGhpcy5lcmFzZXJTZXR0aW5ncy5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXQuYWZ0ZXJiZWdpbiwgbGFiZWwpO1xuICAgIHRoaXMuZXJhc2VyU2V0dGluZ3MuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgaW5zZXJ0QXQuYmVmb3JlZW5kLFxuICAgICAgdGhpcy5lcmFzZXJJbnB1dFxuICAgICk7XG4gICAgdGhpcy5zdmcuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2VyXG4gICAgICA/IFwid2hpdGVcIlxuICAgICAgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgLy8gYWRkIGVsZW1lbnQgdG8gYnV0dG9uXG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5hZnRlcmVuZCwgdGhpcy5lcmFzZXJTZXR0aW5ncyk7XG4gIH1cbiAgQGJpbmRcbiAgcHVibGljIHN0YXJ0VG9vbChwb2ludGVyRXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNlciA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJ0VG9vbCAtIEVyYXNlclwiKTtcbiAgICAgIHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQGJpbmRcbiAgcHVibGljIHN0b3BUb29sKHBvaW50ZXJFdmVudDogUG9pbnRlckV2ZW50KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJzdG9wVG9vbCAtIEVyYXNlclwiKTtcbiAgICB0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNpbmcgPSBmYWxzZTtcbiAgfVxuICBAYmluZFxuICBwdWJsaWMgaW1wbGVtZW50VG9vbChlOiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNlciA9PSB0cnVlICYmXG4gICAgICB0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNpbmcgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJlcmFzaW5nXCIpO1xuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgICAgIGxldCB4ID0gZS5vZmZzZXRYO1xuICAgICAgbGV0IHkgPSBlLm9mZnNldFk7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguY2xlYXJSZWN0KFxuICAgICAgICB4IC0gMTIsXG4gICAgICAgIHkgLSAxMixcbiAgICAgICAgTnVtYmVyKHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2VyVmFsdWUpLFxuICAgICAgICBOdW1iZXIodGhpcy5zdGF0ZS5lcmFzZXJTdGF0ZS5lcmFzZXJWYWx1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIEBiaW5kXG4gIHB1YmxpYyBjaGFuZ2VFcmFzZXJTaXplKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlRXJhc2VyU2l6ZSAtIEVyYXNlclwiKTtcbiAgICB0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNlclZhbHVlID0gTnVtYmVyKHRoaXMuZXJhc2VySW5wdXQudmFsdWUpO1xuICB9XG4gIEBiaW5kXG4gIHB1YmxpYyBhY3RpdmF0ZVRvb2woZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRUb29sIC0gRXJhc2VyXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNlciA9PSBmYWxzZSkge1xuICAgICAgLy8gVXBkYXRlIGVyYXNlciBzdGF0ZVxuICAgICAgdGhpcy5zdGF0ZS5lcmFzZXJTdGF0ZS5lcmFzZXIgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZS5lcmFzZXJTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIldoaXRlXCI7XG4gICAgICAvLyBVcGRhdGUgcGVuY2lsIHN0YXRlXG4gICAgICB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLnBlbmNpbCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWxJY29uQmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgIC8vVXBkYXRlIGV5ZSBkcm9wcGVyIHN0YXRlXG4gICAgICB0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5leWVEcm9wcGVyID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgICAgIHByb2plY3RTdGF0ZS5wdWJsaXNoKFwiYWN0aXZhdGVFcmFzZXJcIiwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyByZW5kZXJDb250ZW50KCk6IHZvaWQge31cbiAgcHVibGljIHJlbmRlcigpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBzdGF0ZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IGJpbmQsIHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCwgeyBpbnNlcnRBdCB9IGZyb20gXCIuLi9CYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeWVEcm9wcGVyIGV4dGVuZHMgQ29tcG9uZW50PFxuICBIVE1MRGl2RWxlbWVudCxcbiAgSFRNTEJ1dHRvbkVsZW1lbnRcbj4ge1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBwcm9qZWN0U3RhdGUuZ2V0Q2FudmFzKCk7XG4gIHByaXZhdGUgZXllRHJvcHBlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByaXZhdGUgc3ZnRWxlbWVudDogU1ZHRWxlbWVudDtcbiAgcHJpdmF0ZSBwYXRoVGFnOiBTVkdQYXRoRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogc3RhdGVUeXBlKSB7XG4gICAgc3VwZXIoXCJjb2xvci1waWNrZXItbWVudVwiLCBpbnNlcnRBdC5iZWZvcmVlbmQsIFwiZGl2XCIpO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8UG9pbnRlckV2ZW50PihcbiAgICAgIFwic3RhcnRQaWNraW5nQ29sb3JcIixcbiAgICAgIHRoaXMuc3RhcnRUb29sLFxuICAgICAgdGhpcy5jYW52YXNcbiAgICApO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudD4oXG4gICAgICBcInN0b3BQaWNraW5nQ29sb3JcIixcbiAgICAgIHRoaXMuc3RvcFRvb2wsXG4gICAgICB0aGlzLmNhbnZhc1xuICAgICk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8UG9pbnRlckV2ZW50PihcbiAgICAgIFwicGlja2luZ0NvbG9yXCIsXG4gICAgICB0aGlzLmltcGxlbWVudFRvb2wsXG4gICAgICB0aGlzLmNhbnZhc1xuICAgICk7XG4gICAgdGhpcy5leWVEcm9wcGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFjdGl2YXRlVG9vbCk7XG4gIH1cbiAgcHVibGljIGNvbmZpZ3VyZSgpOiB2b2lkIHtcbiAgICAvLyBDb25maWd1cmUgYW5kIGNyZWF0ZSBleWUgZHJvcHBlciBidXR0b25cbiAgICB0aGlzLmV5ZURyb3BwZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuZXllRHJvcHBlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV5ZS1idG5cIik7XG4gICAgdGhpcy5leWVEcm9wcGVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcbiAgICAvLyBDcmVhdGUgYW5kIGNvbmZpZ3VyZSBzdmcgZWxlbWVudFxuICAgIHRoaXMuc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHRoaXMucGF0aFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwicGF0aFwiXG4gICAgKTtcbiAgICB0aGlzLmNvbmZpZ3VyZVNWRygpO1xuICAgIHRoaXMuY29uZmlndXJlUGF0aCgpO1xuICAgIHRoaXMuZXllRHJvcHBlckJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5zdGF0ZS5leWVEcm9wcGVyU3RhdGVcbiAgICAgIC5leWVEcm9wcGVyXG4gICAgICA/IFwid2hpdGVcIlxuICAgICAgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIGluc2VydEF0LmJlZm9yZWVuZCxcbiAgICAgIHRoaXMuZXllRHJvcHBlckJ1dHRvblxuICAgICk7XG4gICAgdGhpcy5lbGVtZW50LmlkID0gXCJleWVkcm9wcGVyXCI7XG4gIH1cbiAgcHJpdmF0ZSBjb25maWd1cmVTVkcoKTogdm9pZCB7XG4gICAgdGhpcy5zdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvbi1pbWdcIik7XG4gICAgdGhpcy5zdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXllZHJvcC1pY29uXCIpO1xuICAgIHRoaXMuc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjI4cHhcIik7XG4gICAgdGhpcy5zdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjI4cHhcIik7XG4gICAgdGhpcy5zdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMTYgMTZcIik7XG4gICAgdGhpcy5zdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG4gICAgdGhpcy5leWVEcm9wcGVyQnV0dG9uLmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIGluc2VydEF0LmFmdGVyYmVnaW4sXG4gICAgICB0aGlzLnN2Z0VsZW1lbnRcbiAgICApO1xuICB9XG4gIHByaXZhdGUgY29uZmlndXJlUGF0aCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhdGhUYWcuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xMy4zNTQuNjQ2YTEuMjA3IDEuMjA3IDAgMCAwLTEuNzA4IDBMOC41IDMuNzkzbC0uNjQ2LS42NDdhLjUuNSAwIDEgMC0uNzA4LjcwOEw4LjI5MyA1bC03LjE0NyA3LjE0NkEuNS41IDAgMCAwIDEgMTIuNXYxLjc5M2wtLjg1NC44NTNhLjUuNSAwIDEgMCAuNzA4LjcwN0wxLjcwNyAxNUgzLjVhLjUuNSAwIDAgMCAuMzU0LS4xNDZMMTEgNy43MDdsMS4xNDYgMS4xNDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLS42NDctLjY0NiAzLjE0Ny0zLjE0NmExLjIwNyAxLjIwNyAwIDAgMCAwLTEuNzA4bC0yLTJ6TTIgMTIuNzA3bDctN0wxMC4yOTMgN2wtNyA3SDJ2LTEuMjkzelwiXG4gICAgKTtcbiAgICB0aGlzLnN2Z0VsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGluc2VydEF0LmJlZm9yZWVuZCwgdGhpcy5wYXRoVGFnKTtcbiAgfVxuICBAYmluZFxuICBwdWJsaWMgYWN0aXZhdGVUb29sKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5leWVEcm9wcGVyID09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdGl2YXRpbmcgdG9vbCAtIEV5ZWRyb3BwZXJcIik7XG4gICAgICB0aGlzLnN0YXRlLmVyYXNlclN0YXRlLmVyYXNlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUuZXllRHJvcHBlclN0YXRlLmV5ZURyb3BwZXIgPSB0cnVlO1xuICAgICAgcHJvamVjdFN0YXRlLnB1Ymxpc2goXCJhY3RpdmF0ZUV5ZURyb3BwZXJcIiwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG4gIEBiaW5kXG4gIHB1YmxpYyBpbXBsZW1lbnRUb29sKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5leWVEcm9wcGVyID09IHRydWUpIHtcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XG4gICAgICBsZXQgeCA9IGUub2Zmc2V0WDtcbiAgICAgIGxldCB5ID0gZS5vZmZzZXRZO1xuICAgICAgbGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XG4gICAgICBsZXQgcmVkID0gaW1hZ2VEYXRhLmRhdGFbMF07XG4gICAgICBsZXQgZ3JlZW4gPSBpbWFnZURhdGEuZGF0YVsxXTtcbiAgICAgIGxldCBibHVlID0gaW1hZ2VEYXRhLmRhdGFbMl07XG4gICAgICBsZXQgY29sb3JWYWx1ZXMgPSB0aGlzLnJnYlRvSHNsKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Q29sb3IgPSBjb2xvclZhbHVlcztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yVmFsdWVzO1xuICAgICAgcHJvamVjdFN0YXRlLnB1Ymxpc2goXCJ1cGRhdGVDb2xvclwiLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSByZ2JUb0hzbChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAociAvPSAyNTUpLCAoZyAvPSAyNTUpLCAoYiAvPSAyNTUpO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbGV0IGg6IG51bWJlcixcbiAgICAgIHM6IG51bWJlcixcbiAgICAgIGw6IG51bWJlciA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiOlxuICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBoISAvPSA2O1xuICAgIH1cblxuICAgIHJldHVybiBgaHNsKCR7aCEgKiAzNjB9LCAke3MgKiAxMDB9JSwgJHtsICogMTAwfSUpYDtcbiAgfVxuXG4gIEBiaW5kXG4gIHB1YmxpYyBzdG9wVG9vbChwb2ludGVyRXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5waWNraW5nQ29sb3IgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJzdG9wcGluZyB0b29sIC0gRXllRHJvcHBlclwiKTtcbiAgICAgIHRoaXMuc3RhdGUuZXllRHJvcHBlclN0YXRlLnBpY2tpbmdDb2xvciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBAYmluZFxuICBwdWJsaWMgc3RhcnRUb29sKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlLmV5ZURyb3BwZXJTdGF0ZS5leWVEcm9wcGVyID09IHRydWUpIHtcbiAgICAgIHRoaXMuc3RhdGUuZXllRHJvcHBlclN0YXRlLnBpY2tpbmdDb2xvciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlckNvbnRlbnQoKTogdm9pZCB7fVxuICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge31cbn1cbiIsImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcbmltcG9ydCB7IHN0YXRlVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlLCBiaW5kIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQZW5jaWxTZXR0aW5ncyBmcm9tIFwiLi4vUGVuY2lsU2V0dGluZ3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbmNpbCBleHRlbmRzIFRvb2wge1xuICBwcml2YXRlIGNhbnZhcyA9IHByb2plY3RTdGF0ZS5nZXRDYW52YXMoKTtcbiAgcHJpdmF0ZSBjYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgcHJpdmF0ZSBwZW5jaWxCdXR0b246IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgcGVuY2lsU2V0dGluZ3M6IEhUTUxGb3JtRWxlbWVudDtcbiAgcHJpdmF0ZSBwZW5jaWxJY29uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBzdHJva2VJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogc3RhdGVUeXBlKSB7XG4gICAgLy8gVGhpcyBzdXBlciBpcyB1c2luZyB0aGUgdG9vbGJhciBpbiB0aGUgSFRNTCB0byBhbmNob3IgdGhlIHBlbmNpbCB2ZXJzdXMgdGhlIGRpdiB0aGF0IGlzIGNyZWF0ZWQgaW4gVG9vbEJhci4gQXMgYSByZXN1bHQgaXQgZG9lc24ndCBlbXB0eSB0aGUgZGl2LlxuICAgIHN1cGVyKFxuICAgICAgXCJwZW5jaWxcIixcbiAgICAgIFwiTTEyLjE0Ni4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMyAzYS41LjUgMCAwIDEgMCAuNzA4bC0xMCAxMGEuNS41IDAgMCAxLS4xNjguMTFsLTUgMmEuNS41IDAgMCAxLS42NS0uNjVsMi01YS41LjUgMCAwIDEgLjExLS4xNjhsMTAtMTB6TTExLjIwNyAyLjUgMTMuNSA0Ljc5MyAxNC43OTMgMy41IDEyLjUgMS4yMDcgMTEuMjA3IDIuNXptMS41ODYgM0wxMC41IDMuMjA3IDQgOS43MDdWMTBoLjVhLjUuNSAwIDAgMSAuNS41di41aC41YS41LjUgMCAwIDEgLjUuNXYuNWguMjkzbDYuNS02LjV6bS05Ljc2MSA1LjE3NS0uMTA2LjEwNi0xLjUyOCAzLjgyMSAzLjgyMS0xLjUyOC4xMDYtLjEwNkEuNS41IDAgMCAxIDUgMTIuNVYxMmgtLjVhLjUuNSAwIDAgMS0uNS0uNVYxMWgtLjVhLjUuNSAwIDAgMS0uNDY4LS4zMjV6XCIsXG4gICAgICBcImJ1dHRvblwiXG4gICAgKTtcblxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBlbmNpbFwiKTtcbiAgICB0aGlzLmNvbmZpZ3VyZVBlbmNpbCgpO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudD4oXG4gICAgICBcInN0YXJ0RHJhd2luZ1wiLFxuICAgICAgdGhpcy5zdGFydFRvb2wsXG4gICAgICB0aGlzLmNhbnZhc1xuICAgICk7XG4gICAgcHJvamVjdFN0YXRlLmFkZEV2ZW50TGlzdGVuZXI8UG9pbnRlckV2ZW50PihcbiAgICAgIFwiZHJhd2luZ1wiLFxuICAgICAgdGhpcy5pbXBsZW1lbnRUb29sLFxuICAgICAgdGhpcy5jYW52YXNcbiAgICApO1xuICAgIHByb2plY3RTdGF0ZS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudD4oXG4gICAgICBcInN0b3BEcmF3aW5nXCIsXG4gICAgICB0aGlzLnN0b3BUb29sLFxuICAgICAgdGhpcy5jYW52YXNcbiAgICApO1xuICAgIHRoaXMucGVuY2lsSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmF0ZVRvb2wpO1xuICB9XG4gIHB1YmxpYyBjb25maWd1cmVQZW5jaWwoKSB7XG4gICAgdGhpcy5jb25maWd1cmVGb3JtU2V0dGluZ3MoKTtcbiAgICB0aGlzLnBlbmNpbEljb24gPSB0aGlzLmVsZW1lbnQ7XG4gICAgLy90aGlzLnBlbmNpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmF0ZVRvb2wpO1xuICAgIHRoaXMuc3ZnLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLnBlbmNpbFxuICAgICAgPyBcIndoaXRlXCJcbiAgICAgIDogXCJ0cmFuc3BhcmVudFwiO1xuICB9XG4gIHByaXZhdGUgY29uZmlndXJlRm9ybVNldHRpbmdzKCkge1xuICAgIG5ldyBQZW5jaWxTZXR0aW5ncyh0aGlzLnN0YXRlLCB0aGlzLmNhbnZhc0NvbnRleHQpO1xuICB9XG4gIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWd1cmVGb3JtU2V0dGluZ3MoKTtcbiAgfVxuXG4gIEBiaW5kXG4gIHB1YmxpYyBzdGFydFRvb2wocG9pbnRlckV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgICBpZiAocG9pbnRlckV2ZW50LnByZXNzdXJlID4gMCAmJiB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLnBlbmNpbCA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJ0VG9vbCAtIFBlbmNpbFwiKTtcbiAgICAgIHRoaXMuc3RhdGUucGVuY2lsU3RhdGUuZHJhd2luZyA9IHRydWU7XG4gICAgICBsZXQgeCA9IHBvaW50ZXJFdmVudC5vZmZzZXRYO1xuICAgICAgbGV0IHkgPSBwb2ludGVyRXZlbnQub2Zmc2V0WTtcbiAgICAgIGNhbnZhc0NvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWwgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5kcmF3aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgQGJpbmRcbiAgcHVibGljIGFjdGl2YXRlVG9vbChldmVudE9iamVjdDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiQWN0aXZhdGUgUGVuY2lsIFwiKTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2VyID09IHRydWUgfHxcbiAgICAgIHRoaXMuc3RhdGUuZXllRHJvcHBlclN0YXRlLmV5ZURyb3BwZXIgPT0gdHJ1ZSB8fFxuICAgICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWwgPT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHRoaXMuc3RhdGUuZXllRHJvcHBlclN0YXRlLmV5ZURyb3BwZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2VyID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLnBlbmNpbCA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdGl2YXRlVG9vbCAtIHBlbmNpbFwiKTtcbiAgICAgIHRoaXMuc3RhdGUucGVuY2lsU3RhdGUucGVuY2lsSWNvbkJhY2tncm91bmQgPSBcIndoaXRlXCI7XG4gICAgICAvLyBUT0RPOiBOZWVkIHRvIHRoaW5rIGFib3V0IHRoaXMgc29tZSBtb3JlLiBNYXliZSB3cml0ZSBvdXQgYSBkaWFncmFtLlxuICAgICAgcHJvamVjdFN0YXRlLnB1Ymxpc2goXCJhY3RpdmF0ZVBlbmNpbFwiLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cbiAgQGJpbmRcbiAgcHVibGljIGltcGxlbWVudFRvb2wocG9pbnRlckV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLnBlbmNpbFN0YXRlLmRyYXdpbmcgPT0gdHJ1ZSAmJlxuICAgICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWwgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJpbXBlbWVudFRvb2wgLSBQZW5jaWxcIik7XG4gICAgICBsZXQgeCA9IHBvaW50ZXJFdmVudC5vZmZzZXRYO1xuICAgICAgbGV0IHkgPSBwb2ludGVyRXZlbnQub2Zmc2V0WTtcbiAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgICB0aGlzLmNhbnZhc0NvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XG4gIEBiaW5kXG4gIHB1YmxpYyBzdG9wVG9vbChldmVudE9iamVjdDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcInN0b3BUb29sIC0gUGVuY2lsXCIpO1xuICAgIHRoaXMuc3RhdGUucGVuY2lsU3RhdGUuZHJhd2luZyA9IGZhbHNlO1xuICB9XG4gIHB1YmxpYyByZW5kZXJDb250ZW50KCk6IHZvaWQge31cbn1cbiIsImltcG9ydCBDb21wb25lbnQsIHsgaW5zZXJ0QXQgfSBmcm9tIFwiLi4vQmFzZUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUb29sIGV4dGVuZHMgQ29tcG9uZW50PFxuICBIVE1MRGl2RWxlbWVudCxcbiAgSFRNTEJ1dHRvbkVsZW1lbnRcbj4ge1xuICBwcm90ZWN0ZWQgc3ZnOiBTVkdFbGVtZW50O1xuICBwcml2YXRlIHBhdGhUYWc6IFNWR1BhdGhFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9vbElkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBwYXRoRDogc3RyaW5nLFxuICAgIHByaXZhdGUgZWxlbWVudFRhZzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKFwidG9vbGJhclwiLCBpbnNlcnRBdC5hZnRlcmJlZ2luLCBlbGVtZW50VGFnKTtcbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG4gIHB1YmxpYyBjb25maWd1cmUoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaWNvblwiKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGhpcy50b29sSWR9YCk7XG4gICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICB0aGlzLnBhdGhUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgdGhpcy5jb25maWd1cmVTVkcoKTtcbiAgICB0aGlzLmNvbmZpZ3VyZVBhdGgoKTtcbiAgfVxuICBwcml2YXRlIGNvbmZpZ3VyZVNWRygpOiB2b2lkIHtcbiAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImljb24taW1nIGJpIGJpLWVyYXNlci1maWxsXCIpO1xuICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3RoaXMudG9vbElkfS1pY29uYCk7XG4gICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyOFwiKTtcbiAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyOFwiKTtcbiAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDE2IDE2XCIpO1xuICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG4gICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5hZnRlcmJlZ2luLCB0aGlzLnN2Zyk7XG4gIH1cbiAgcHJpdmF0ZSBjb25maWd1cmVQYXRoKCkge1xuICAgIHRoaXMucGF0aFRhZy5zZXRBdHRyaWJ1dGUoXCJkXCIsIHRoaXMucGF0aEQpO1xuICAgIHRoaXMuc3ZnLmluc2VydEFkamFjZW50RWxlbWVudChpbnNlcnRBdC5iZWZvcmVlbmQsIHRoaXMucGF0aFRhZyk7XG4gIH1cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG4gIC8qICBhYnN0cmFjdCBzdGFydFRvb2wocG9pbnRlckV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkO1xuICBhYnN0cmFjdCBpbXBsZW1lbnRUb29sKGV2ZW50T2JqZWN0OiBFdmVudCk6IHZvaWQ7XG4gIGFic3RyYWN0IHN0b3BUb29sKGV2ZW50T2JqZWN0OiBFdmVudCk6IHZvaWQ7XG4gIGFic3RyYWN0IGFjdGl2YXRlVG9vbChldmVudE9iamVjdDogRXZlbnQpOiB2b2lkOyAqL1xufVxuIiwiaW1wb3J0IHsgU2F2ZUZpbGVIYW5kbGVyLCBiaW5kLCBwcm9qZWN0U3RhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQsIHsgaW5zZXJ0QXQgfSBmcm9tIFwiLi4vQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9QZW5jaWxcIjtcbmltcG9ydCBFeWVEcm9wcGVyIGZyb20gXCIuL0V5ZURyb3BwZXJcIjtcbmltcG9ydCBFcmFzZXIgZnJvbSBcIi4vRXJhc2VyXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XG5pbXBvcnQgeyBzdGF0ZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xCYXIgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxEaXZFbGVtZW50PiB7XG4gIHByaXZhdGUgY2xlYXJDYW52YXNCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwcml2YXRlIHNhdmVDYW52YXNCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICBwcml2YXRlIHN0YXRlID0gcHJvamVjdFN0YXRlLmdldFN0YXRlKCk7XG4gIHByaXZhdGUgY2FudmFzID0gcHJvamVjdFN0YXRlLmdldENhbnZhcygpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcImNvbnRhaW5lclwiLCBpbnNlcnRBdC5iZWZvcmVlbmQsIFwiZGl2XCIpO1xuICAgIHByb2plY3RTdGF0ZS5zdWJzY3JpYmVTdGF0ZShcImNoYW5nZUJydXNoU2l6ZVwiLCAoZGF0YTogc3RhdGVUeXBlKSA9PiB7XG4gICAgICBwcm9qZWN0U3RhdGUuc2V0U3RhdGUoZGF0YSk7XG4gICAgfSk7XG4gICAgcHJvamVjdFN0YXRlLnN1YnNjcmliZVN0YXRlKFwiYWN0aXZhdGVFcmFzZXJcIiwgKGRhdGE6IHN0YXRlVHlwZSkgPT4ge1xuICAgICAgcHJvamVjdFN0YXRlLnNldFN0YXRlKGRhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJUb29scygpO1xuICAgIH0pO1xuICAgIHByb2plY3RTdGF0ZS5zdWJzY3JpYmVTdGF0ZShcImFjdGl2YXRlUGVuY2lsXCIsIChkYXRhOiBzdGF0ZVR5cGUpID0+IHtcbiAgICAgIHByb2plY3RTdGF0ZS5zZXRTdGF0ZShkYXRhKTtcbiAgICAgIHRoaXMucmVuZGVyVG9vbHMoKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0U3RhdGUuc3Vic2NyaWJlU3RhdGUoXCJhY3RpdmF0ZUV5ZURyb3BwZXJcIiwgKGRhdGE6IHN0YXRlVHlwZSkgPT4ge1xuICAgICAgcHJvamVjdFN0YXRlLnNldFN0YXRlKGRhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJUb29scygpO1xuICAgIH0pO1xuICAgIHByb2plY3RTdGF0ZS5zdWJzY3JpYmVTdGF0ZShcImNsZWFyQ2FudmFzXCIsIChkYXRhOiBzdGF0ZVR5cGUpID0+IHtcbiAgICAgIHByb2plY3RTdGF0ZS5zZXRTdGF0ZShkYXRhKTtcbiAgICAgIHRoaXMucmVuZGVyVG9vbHMoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlckNhbnZhc0J1dHRvbnMoKTtcbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMucmVuZGVyVG9vbHMoKTtcbiAgfVxuICBwdWJsaWMgY29uZmlndXJlKCk6IHZvaWQge31cbiAgcHJpdmF0ZSByZW5kZXJDYW52YXNCdXR0b25zKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDYW52YXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuY2xlYXJDYW52YXNCdG4uaW5uZXJUZXh0ID0gXCJDbGVhciBDYW52YXNcIjtcbiAgICB0aGlzLmNsZWFyQ2FudmFzQnRuLmlkID0gXCJjbGVhclwiO1xuICAgIHRoaXMuY2xlYXJDYW52YXNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgdGhpcy5jbGVhckNhbnZhc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGVhckNhbnZhc2UpO1xuICAgIHRoaXMuc2F2ZUNhbnZhc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGhpcy5zYXZlQ2FudmFzQnRuLmlubmVyVGV4dCA9IFwiU2F2ZSBDYW52YXNcIjtcbiAgICB0aGlzLnNhdmVDYW52YXNCdG4uaWQgPSBcInNhdmVcIjtcbiAgICB0aGlzLnNhdmVDYW52YXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBTYXZlRmlsZUhhbmRsZXIuc2F2ZURyYXdpbmcodGhpcy5jYW52YXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b29sYmFyXCIpO1xuICAgIHRoaXMuZWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXQuYmVmb3JlZW5kLCB0aGlzLmNsZWFyQ2FudmFzQnRuKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGluc2VydEF0LmJlZm9yZWVuZCwgdGhpcy5zYXZlQ2FudmFzQnRuKTtcbiAgfVxuICBwcml2YXRlIHJlbmRlclRvb2xzKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyIFRvb2xzXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbmV3IFBlbmNpbCh0aGlzLnN0YXRlKTtcbiAgICBuZXcgRXJhc2VyKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMucmVuZGVyRXllRHJvcHBlcigpO1xuXG4gICAgdGhpcy5yZW5kZXJDYW52YXNCdXR0b25zKCk7XG4gIH1cbiAgcHVibGljIHJlbmRlckNvbnRlbnQoLi4udG9vbHM6IFRvb2xbXSk6IHZvaWQge31cbiAgcHJpdmF0ZSByZW5kZXJFeWVEcm9wcGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGV5ZURyb3BwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV5ZWRyb3BwZXJcIik7XG4gICAgaWYgKGV5ZURyb3BwZXIpIHtcbiAgICAgIGV5ZURyb3BwZXIucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoZXllRHJvcHBlcik7XG4gICAgfVxuICAgIG5ldyBFeWVEcm9wcGVyKHRoaXMuc3RhdGUpO1xuICB9XG4gIEBiaW5kXG4gIHB1YmxpYyBjbGVhckNhbnZhc2UoKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNTAwKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5zdGF0ZS5wZW5jaWxTdGF0ZS5wZW5jaWwgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUuZXJhc2VyU3RhdGUuZXJhc2VyID0gZmFsc2U7XG4gICAgcHJvamVjdFN0YXRlLnB1Ymxpc2goXCJjbGVhckNhbnZhc1wiLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3RhdGVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgQ29tcG9uZW50LCB7IGluc2VydEF0IH0gZnJvbSBcIi4vQmFzZUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZW51bSBDb2xvciB7XG4gIHJlZCA9IFwicmVkXCIsXG4gIHdoaXRlID0gXCJ3aGl0ZVwiLFxuICBibGFjayA9IFwiYmxhY2tcIixcbiAgYmx1ZSA9IFwiYmx1ZVwiLFxuICBncmVlbiA9IFwiZ3JlZW5cIixcbiAgb3JhbmdlID0gXCJvcmFuZ2VcIixcbiAgcGluayA9IFwicGlua1wiLFxufVxuY29uc3QgY29sb3JNYXAgPSB7XG4gIHJlZDogWzAsIDEwMCwgNTBdLFxuICB3aGl0ZTogWzAsIDEwMCwgMTAwXSxcbiAgYmxhY2s6IFswLCAxMDAsIDBdLFxuICBibHVlOiBbMjQwLCAxMDAsIDUwXSxcbiAgZ3JlZW46IFsxMjAsIDEwMCwgNTBdLFxuICBvcmFuZ2U6IFszMCwgMTAwLCA1MF0sXG4gIHBpbms6IFszMzAsIDEwMCwgNTBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dhdGNoIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRGl2RWxlbWVudD4ge1xuICBwcml2YXRlIHN3YXRjaERpdjogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgaW5uZXJUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgaHVlOiBOdW1iZXI7XG4gIHByaXZhdGUgc2F0dXJhdGlvbjogTnVtYmVyO1xuICBwcml2YXRlIGxpZ2h0bmVzczogTnVtYmVyO1xuICBwcml2YXRlIGhzbENvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmYXVsdENvbG9yOiBDb2xvciwgcHJpdmF0ZSBzdGF0ZTogc3RhdGVUeXBlKSB7XG4gICAgc3VwZXIoXCJjb2xvci1waWNrZXItbWVudVwiLCBpbnNlcnRBdC5hZnRlcmJlZ2luLCBcImRpdlwiKTtcbiAgICBjb25zdCBbaCwgcywgbF0gPSBjb2xvck1hcFtkZWZhdWx0Q29sb3JdO1xuICAgIHRoaXMuaHVlID0gaDtcbiAgICB0aGlzLnNhdHVyYXRpb24gPSAocyAqIHRoaXMuc3RhdGUuc2xpZGVyU3RhdGUuc2F0U2xpZGVyVmFsdWUpIC8gMTAwO1xuICAgIHRoaXMubGlnaHRuZXNzID0gKGwgKiB0aGlzLnN0YXRlLnNsaWRlclN0YXRlLmxpZ2h0U2xpZGVyVmFsdWUpIC8gMTAwO1xuICAgIHRoaXMuaHNsQ29sb3IgPSB0aGlzLmNhbGN1bGF0ZUNvbG9yKGgsIHMsIGwpO1xuICAgIHRoaXMuY29uZmlndXJlKCk7XG4gIH1cblxuICBwdWJsaWMgY29uZmlndXJlKCkge1xuICAgIHRoaXMuY29uZmlndXJlSW5uZXJUZXh0KCk7XG4gICAgdGhpcy5zd2F0Y2hEaXYgPSB0aGlzLmNyZWF0ZVN3YXRjaEVsZW1lbnQoKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJDb250ZW50KCkge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGluc2VydEF0LmFmdGVyYmVnaW4sIHRoaXMuc3dhdGNoRGl2KTtcbiAgfVxuICBwcml2YXRlIGNhbGN1bGF0ZUNvbG9yKGg6IG51bWJlciwgczogbnVtYmVyLCBsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHNsKCR7dGhpcy5odWV9LCAke3RoaXMuc2F0dXJhdGlvbn0lLCAke3RoaXMubGlnaHRuZXNzfSUpYDtcbiAgfVxuICBwcml2YXRlIGNyZWF0ZVN3YXRjaEVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuaHNsQ29sb3J9YCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3dhdGNoXCIpO1xuICAgIGNvbnN0IHN3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3dhdGNoLmNsYXNzTmFtZSA9IFwic3dhdGNoLWJ0blwiO1xuICAgIHN3YXRjaC50eXBlID0gXCJidXR0b25cIjtcbiAgICBzd2F0Y2gudmFsdWUgPSB0aGlzLmhzbENvbG9yO1xuICAgIHN3YXRjaC5pbm5lclRleHQgPSB0aGlzLmlubmVyVGV4dDtcbiAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGluc2VydEF0LmFmdGVyYmVnaW4sIHN3YXRjaCk7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlSW5uZXJUZXh0KCkge1xuICAgIHN3aXRjaCAodGhpcy5kZWZhdWx0Q29sb3IpIHtcbiAgICAgIGNhc2UgQ29sb3IucmVkOlxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiUmVkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb2xvci53aGl0ZTpcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBcIldoaXRlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb2xvci5ibGFjazpcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBcIkJsYWNrXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb2xvci5ibHVlOlxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiQmx1ZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ29sb3IuZ3JlZW46XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gXCJHcmVlblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ29sb3Iub3JhbmdlOlxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiT3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb2xvci5waW5rOlxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiUGlua1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUb29sIGZyb20gXCIuLi9jb21wb25lbnRzL1Rvb2xzL1Rvb2xcIjtcbmltcG9ydCB7XG4gIHN0YXRlVHlwZSxcbiAgZXZlbnRUeXBlcyxcbiAgZXZlbnRMaXN0ZW5lclR5cGUsXG4gIHN0YXRlU3Vic2NyaWJlclR5cGVzLFxufSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQoXG4gIHRhcmdldDogT2JqZWN0LFxuICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvclxuKTogUHJvcGVydHlEZXNjcmlwdG9yIHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICBjb25zdCBhZGp1c3RlZERlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciA9IHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGFkanVzdGVkRGVzY3JpcHRvcjtcbn1cblxudHlwZSBMaXN0ZW5lcjxUPiA9IChkYXRhT2JqZWN0OiBUKSA9PiB2b2lkO1xuXG50eXBlIGV2ZW50TGlzdGVuZXJPYmplY3RUeXBlID0ge1xuICBba2V5IGluIGV2ZW50VHlwZXNdOiAoRXZlbnRMaXN0ZW5lciB8IExpc3RlbmVyPHN0YXRlVHlwZT4pW107XG59O1xuXG50eXBlIFN0YXRlU3Vic2NyaWJlcnMgPSB7XG4gIFtrZXkgaW4gc3RhdGVTdWJzY3JpYmVyVHlwZXNdOiBMaXN0ZW5lcjxzdGF0ZVR5cGU+W107XG59O1xuY2xhc3MgU3RhdGU8VD4ge1xuICBwcm90ZWN0ZWQgZXZlbnRMaXN0ZW5lcnM6IGV2ZW50TGlzdGVuZXJPYmplY3RUeXBlID0ge1xuICAgIHN0YXJ0RHJhd2luZzogW10sXG4gICAgZHJhd2luZzogW10sXG4gICAgYWN0aXZhdGVFcmFzZXI6IFtdLFxuICAgIGFjdGl2YXRlUGVuY2lsOiBbXSxcbiAgICBhY3RpdmF0ZUV5ZURyb3BwZXI6IFtdLFxuICAgIHN0YXJ0RXJhc2luZzogW10sXG4gICAgc3RvcEVyYXNpbmc6IFtdLFxuICAgIGNoYW5nZUJydXNoU2l6ZTogW10sXG4gICAgc3RvcERyYXdpbmc6IFtdLFxuICAgIHN0YXJ0UGlja2luZ0NvbG9yOiBbXSxcbiAgICBzdG9wUGlja2luZ0NvbG9yOiBbXSxcbiAgICB1cGRhdGVMaWdodG5lc3M6IFtdLFxuICAgIHVwZGF0ZVNhdHVyYXRpb246IFtdLFxuICAgIGVyYXNpbmc6IFtdLFxuICAgIGNoYW5nZUVyYXNlclNpemU6IFtdLFxuICAgIHBpY2tpbmdDb2xvcjogW10sXG4gIH07XG4gIHByb3RlY3RlZCBzdWJzY3JpYmVyczogU3RhdGVTdWJzY3JpYmVycyA9IHtcbiAgICBjaGFuZ2VCcnVzaFNpemU6IFtdLFxuICAgIHVwZGF0ZUxpZ2h0bmVzczogW10sXG4gICAgdXBkYXRlU2F0dXJhdGlvbjogW10sXG4gICAgYWN0aXZhdGVFcmFzZXI6IFtdLFxuICAgIGFjdGl2YXRlUGVuY2lsOiBbXSxcbiAgICBhY3RpdmF0ZUV5ZURyb3BwZXI6IFtdLFxuICAgIHVwZGF0ZUNvbG9yOiBbXSxcbiAgICBjbGVhckNhbnZhczogW10sXG4gIH07XG59XG5jb25zdCBldmVudE1hcDoge1xuICBba2V5IGluIGV2ZW50VHlwZXNdOiBldmVudExpc3RlbmVyVHlwZVtdO1xufSA9IHtcbiAgc3RhcnREcmF3aW5nOiBbXCJwb2ludGVyZG93blwiXSxcbiAgc3RvcERyYXdpbmc6IFtcInBvaW50ZXJ1cFwiLCBcInBvaW50ZXJsZWF2ZVwiXSxcbiAgZHJhd2luZzogW1wicG9pbnRlcm1vdmVcIl0sXG4gIGFjdGl2YXRlUGVuY2lsOiBbXCJjbGlja1wiXSxcbiAgYWN0aXZhdGVFcmFzZXI6IFtcImNsaWNrXCJdLFxuICBzdGFydEVyYXNpbmc6IFtcInBvaW50ZXJkb3duXCJdLFxuICBzdG9wRXJhc2luZzogW1wicG9pbnRlcnVwXCIsIFwicG9pbnRlcmxlYXZlXCJdLFxuICBjaGFuZ2VCcnVzaFNpemU6IFtcInN1Ym1pdFwiXSxcbiAgYWN0aXZhdGVFeWVEcm9wcGVyOiBbXCJjbGlja1wiXSxcbiAgc3RhcnRQaWNraW5nQ29sb3I6IFtcInBvaW50ZXJkb3duXCJdLFxuICBzdG9wUGlja2luZ0NvbG9yOiBbXCJwb2ludGVydXBcIl0sXG4gIHVwZGF0ZUxpZ2h0bmVzczogW1wiaW5wdXRcIl0sXG4gIHVwZGF0ZVNhdHVyYXRpb246IFtcImlucHV0XCJdLFxuICBlcmFzaW5nOiBbXCJwb2ludGVybW92ZVwiXSxcbiAgY2hhbmdlRXJhc2VyU2l6ZTogW1wiaW5wdXRcIl0sXG4gIHBpY2tpbmdDb2xvcjogW1wicG9pbnRlcmRvd25cIl0sXG59O1xuY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8VG9vbD4ge1xuICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHN0YXRlOiBzdGF0ZVR5cGUgPSB7XG4gICAgc2xpZGVyU3RhdGU6IHtcbiAgICAgIGxpZ2h0U2xpZGVyVmFsdWU6IDEwMCxcbiAgICAgIHNhdFNsaWRlclZhbHVlOiAxMDAsXG4gICAgfSxcbiAgICBwZW5jaWxTdGF0ZToge1xuICAgICAgcGVuY2lsOiB0cnVlLFxuICAgICAgZHJhd2luZzogZmFsc2UsXG4gICAgICBzdHJva2VWYWx1ZTogMSxcbiAgICAgIHBlbmNpbEljb25CYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgfSxcbiAgICBlcmFzZXJTdGF0ZToge1xuICAgICAgZXJhc2VyOiBmYWxzZSxcbiAgICAgIGVyYXNpbmc6IGZhbHNlLFxuICAgICAgZXJhc2VyVmFsdWU6IDI1LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgfSxcbiAgICBleWVEcm9wcGVyU3RhdGU6IHtcbiAgICAgIGV5ZURyb3BwZXI6IGZhbHNlLFxuICAgICAgcGlja2luZ0NvbG9yOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJidXR0b25mYWNlXCIsXG4gICAgfSxcbiAgICBjdXJyZW50Q29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgfTtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2plY3RTdGF0ZTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgfVxuICBwdWJsaWMgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0VsZW1lbnQhO1xuICB9XG4gIHB1YmxpYyBnZXRTdGF0ZSgpOiBzdGF0ZVR5cGUge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcbiAgfVxuICBwdWJsaWMgc2V0U3RhdGUobmV3U3RhdGU6IHN0YXRlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIC4uLm5ld1N0YXRlIH07XG4gIH1cbiAgLypcbiAgc3Vic2NyaWJlciBtZXRob2QgZm9yIGV2ZW50bGlzdGVuZXJzXG4gIEBwYXJhbSBldmVudE5hbWU6IGV2ZW50VHlwZXNcbiAgQHBhcmFtIGNhbGxiYWNrOiAodGhpczogSFRNTEVsZW1lbnQsIGU6IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQpID0+IGFueVxuICBAcmV0dXJuczogdm9pZFxuICBAZGVzY3JpcHRpb246IGFkZHMgZXZlbnRsaXN0ZW5lcnMgdG8gdGhlIGNhbnZhcyBlbGVtZW50IHdoaWxlIGFsc28ga2VlcGluZyB0cmFjayBvZiB0aGVzZSBsaXN0ZW5lcnNcbiAgQGV4YW1wbGU6XG4gIHByb2plY3RTdGF0ZS5zdWJzY3JpYmUoXCJzdGFydERyYXdpbmdcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuICAqL1xuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcjxcbiAgICBUIGV4dGVuZHMgUG9pbnRlckV2ZW50IHwgTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBzdGF0ZVR5cGUgfCBJbnB1dEV2ZW50XG4gID4oXG4gICAgZXZlbnROYW1lOiBldmVudFR5cGVzLFxuICAgIGNhbGxiYWNrOiAodGhpczogSFRNTEVsZW1lbnQsIGU6IFQpID0+IGFueSB8IExpc3RlbmVyPHN0YXRlVHlwZT4sXG4gICAgZWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZXZlbnRNYXBbZXZlbnROYW1lXS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrIGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayBhcyBFdmVudExpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2sgYXMgTGlzdGVuZXI8c3RhdGVUeXBlPik7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzdWJzY3JpYmVTdGF0ZShcbiAgICBldmVudE5hbWU6IHN0YXRlU3Vic2NyaWJlclR5cGVzLFxuICAgIGNhbGxiYWNrOiBMaXN0ZW5lcjxzdGF0ZVR5cGU+XG4gICkge1xuICAgIGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuICBwdWJsaWMgcHVibGlzaChldmVudE5hbWU6IHN0YXRlU3Vic2NyaWJlclR5cGVzLCBkYXRhOiBzdGF0ZVR5cGUpIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gYXMgTGlzdGVuZXI8c3RhdGVUeXBlPltdO1xuICAgIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFByb2plY3RTdGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlRmlsZUhhbmRsZXIge1xuICBwcml2YXRlIHN0YXRpYyBvcHRpb25zOiB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGRlc2NpcHRpb246IHN0cmluZztcbiAgICAgIGFjY2VwdDoge1xuICAgICAgICBcInRleHQvcGxhaW5cIjogc3RyaW5nW107XG4gICAgICB9O1xuICAgIH1bXTtcbiAgfSA9IHtcbiAgICB0eXBlczogW1xuICAgICAge1xuICAgICAgICBkZXNjaXB0aW9uOiBcIlRleHQgRmlsZVwiLFxuICAgICAgICBhY2NlcHQ6IHtcbiAgICAgICAgICBcInRleHQvcGxhaW5cIjogW1wiLnR4dFwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIHNhdmVEcmF3aW5nKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpOyAvLyBDcmVhdGUgYSBkb3dubG9hZCBsaW5rXG4gICAgICBsaW5rLmRvd25sb2FkID0gXCJpbWFnZS5wbmdcIjsgLy8gRmlsZW5hbWUgZm9yIGRvd25sb2FkXG4gICAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IgYXMgQmxvYik7IC8vIENyZWF0ZSBhIFVSTCBmb3IgdGhlIEJsb2JcbiAgICAgIGxpbmsuY2xpY2soKTtcbiAgICB9LCBcImltYWdlL3BuZ1wiKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2xpZGVGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvU2xpZGVGb3JtXCI7XG5pbXBvcnQgU3dhdGNocyBmcm9tIFwiLi9jb21wb25lbnRzL1N3YXRjaHNcIjtcbmltcG9ydCBUb29sQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvVG9vbHMvVG9vbEJhclwiO1xubmV3IFN3YXRjaHMoKTtcbm5ldyBUb29sQmFyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=