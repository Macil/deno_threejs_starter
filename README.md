# Deno X WebGPU X Three

This is a fork of [Three.js](https://github.com/mrdoob/three.js/) that aims to test [Three.js's](https://github.com/mrdoob/three.js/) compatibility with [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) running on [Deno Window Manager](https://github.com/deno-windowing/dwm).

The test helps uncover what potential issues are there intergrating the three technologies which may serve as a starting point for creating an issue in the future.

In addition it also allows us to test against the latest version of threejs in which at the creation of this repository has some additional bug fixes that allow WebGPU to work well.
So you can say it also allows us to test the bleeding version of [Three.js](https://github.com/mrdoob/three.js/) on the `dev` branch.

With the two cases mention above the repo has two samples
1. Running the threejs from the current build in [main.ts](./deno_webgpu/main.ts)
2. Running the threejs from source [without_build.ts](./deno_webgpu/src/without_build.ts)

[main.ts](./deno_webgpu/main.ts) - uses the latest build from threejs. This can be used just for running threejs as usual.
[without_build.ts](./deno_webgpu/src/without_build.ts) - uses threejs straight from source. This can be used for debugging i.e you can at least
jump into the source code and make some tweeks if need be.




## Running
This requires at least deno 2.5 since the [deno.lock](./deno_webgpu/deno.lock) file has the permissions already setup there.

To run the two samples
[main.ts](./deno_webgpu/main.ts)
```
cd deno_webgpu
deno run -P main.ts
```

[without_build.ts](./deno_webgpu/src/without_build.ts)
```
cd deno_webgpu
deno run -P src/without_build.ts
```

## Note
- There is a [canvas.ts](./deno_webgpu/src/canvas.ts) file that polyfills the html canvas element. Threejs heavily relies on this canvas 
to be present thus the need for emulation. To make it easier to idenitify which properties are being accessed there is a [logging-proxy.ts](./deno_webgpu/src/logging-proxy.ts)
that is called in the [without_build.ts](./deno_webgpu/src/without_build.ts) to offer visibility on what threejs requires. This is helpful for when you are testing features and Threejs
acceses a method/property that hasn't been defined.
- Note the two files are just samplee which you can extend with your custom logic and build on that
