import type { WindowGPU } from "@gfx/dwm/ext/webgpu";

const defaultStyle: any = {
	width: "",
	height: "",
	touchAction: "",
};

export class DenoCanvas {
	"data-enigine" = "three.js r182dev webgpu";

	_width: string;
	_height: string;
	_windowGPU: WindowGPU;
	_style = defaultStyle;

	constructor(window: WindowGPU) {
		this._windowGPU = window;

		this.width = window.window.size.width.toString();
		this.height = window.window.size.height.toString();
	}

	setAttribute(qualifiedName: string, value: string) {}

	get clientWidth() {
		return this._width;
	}

	get clientHeight() {
		return this._height;
	}

	get width() {
		return this._width;
	}

	set width(width: string) {
		this._width = width;
	}

	get height() {
		return this._height;
	}

	set height(height: string) {
		this._height = height;
	}

	get style() {
		return this._style;
	}

	set style(str: string) {
		console.log(str);
		this._style = str;
	}

	removeEventListener(...args: any) {
		removeEventListener(...args);
	}

	getRootNode() {
		return this;
	}

	addEventListener(...args: any) {
		addEventListener(...args);
	}

	setPointerCapture() {}
	releasePointerCapture() {}
}
