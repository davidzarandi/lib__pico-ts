import { render, createVNode } from "@zdaav/pico-ts";

const vNode = createVNode("div", {}, "Hello world");

render(vNode, document.getElementById("app"));
