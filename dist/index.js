/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst canv = document.getElementsByTagName('canvas')[0];\nconst ctx = canv.getContext('2d');\nconst W = 500;\nconst H = 500;\nconst classes = {\n  r: [],\n  g: []\n};\nconst R = 10;\nlet line = [1, 1, 0.1, 1];\nlet learningRate = 0.06;\nfunction dot(a, b) {\n  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];\n}\nfunction add(a, b) {\n  return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];\n}\nfunction XN(x) {\n  return (x - W / 2) / (W / 2);\n}\nfunction YN(y) {\n  return (y - H / 2) / (H / 2);\n}\nfunction mult(k, fv) {\n  return fv.map(d => d * k);\n}\nfunction feat(x, y) {\n  return [x, y, x * x, y * y, x * y, 1];\n}\nfunction learn(line, p) {\n  const cls = dot(line, p.f) >= 0 ? 1 : -1;\n  const k = -learningRate * (cls - p.class);\n  if (cls != p.class) console.log('error', line);\n  line = add(line, mult(k, p.f));\n  let L = Math.sqrt(dot(line, line));\n  if (L == 0) L = 1;\n  return mult(1 / L, line);\n}\nfunction shuffleArray(array) {\n  for (var i = array.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var temp = array[i];\n    array[i] = array[j];\n    array[j] = temp;\n  }\n}\nlet temp = [];\nfunction rebuild() {\n  temp = [];\n  for (const p of classes['r']) {\n    temp.push(p);\n  }\n  for (const p of classes['g']) {\n    temp.push(p);\n  }\n\n  //  shuffleArray(temp);\n}\nfunction step() {\n  ctx.fillStyle = \"lightgrey\";\n  ctx.fillRect(0, 0, W, H);\n  ctx.beginPath();\n  ctx.fillStyle = \"#0f0\";\n  for (const p of classes['r']) {\n    ctx.beginPath();\n    ctx.fillStyle = \"#f00\";\n    ctx.arc(p.f[0] * W / 2 + W / 2, p.f[1] * (H / 2) + H / 2, R, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n  for (const p of classes['g']) {\n    ctx.beginPath();\n    ctx.fillStyle = \"#0f0\";\n    ctx.arc(p.f[0] * W / 2 + W / 2, p.f[1] * (H / 2) + H / 2, R, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n  for (var i = 0; i < temp.length; ++i) {\n    line = learn(line, temp[i]);\n  }\n  var L = dot(line, line);\n  L = Math.sqrt(L);\n  for (var x = 0; x < W; x += 5) {\n    for (var y = 0; y < H; y += 5) {\n      var px = (x - W / 2) / (W / 2);\n      var py = (y - H / 2) / (H / 2);\n      var d = dot(line, feat(px, py)) / L;\n      if (true) {\n        ctx.beginPath();\n        ctx.fillStyle = Math.abs(d) >= 0.01 ? \"grey\" : \"#000\";\n        ctx.arc(x, y, 1, 0, 2 * Math.PI);\n        ctx.fill();\n      }\n    }\n  }\n  requestAnimationFrame(step);\n}\nrequestAnimationFrame(step);\ncanv.addEventListener('mousedown', (w, ev) => {\n  let x = w.clientX - canv.getBoundingClientRect().left;\n  let y = w.clientY - canv.getBoundingClientRect().top;\n  const color = document.getElementsByName('cls')[0].checked ? 'r' : 'g';\n  const px = (x - W / 2) / (W / 2);\n  const py = (y - H / 2) / (H / 2);\n  const f = feat(px, py);\n  classes[color].push({\n    f,\n    class: color == 'r' ? 1 : -1\n  });\n  rebuild();\n});\n\n//# sourceURL=webpack://webpack-project/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;