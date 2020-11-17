var fs = require("fs");
var Canvas = require("canvas");
var JsBarcode = require('jsbarcode');

var canvas = new Canvas.Canvas(200, 200, "png");
JsBarcode(canvas, "Hello");
//var g = canvas.getContext("2d");
//g.fillStyle = "black";
//g.fillRect(0, 0, 100, 100);

var buf = canvas.toBuffer();
fs.writeFileSync("test.png", buf);