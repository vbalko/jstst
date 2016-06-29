// JavaScript File
function getRandom(range) {
    return _getRandomInt(0, range);
}

/**
 * Get a random floating point number between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {float} a random floating point number
 */
function _getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInCircle(x, y, radius) {
    var dx = radius - x;
    var dy = radius - y;
    var d = Math.pow(dx, 2) + Math.pow(dy, 2);
    var ret = d <= Math.pow(radius, 2);
    if (ret) {
        return "In";
    }
    else {
        return "Out";
    }
}

function _getCanvasContext(canvasName) {
    var c = document.getElementById(canvasName);
    return ctx = c.getContext("2d");
}

function drawCircle(canvasName, radius) {
    var ctx = _getCanvasContext(canvasName);
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.stroke();
}

function drawPoint(x, y, canvasName) {
    var ctx = _getCanvasContext(canvasName);
    ctx.fillRect(x, y, 1, 1);
}