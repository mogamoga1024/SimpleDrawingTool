
const canvasHtmlElement = document.getElementsByTagName("canvas")[0];
const clearButtonHtmlElement = document.getElementById("clear-button");

const drawingCanvas = new DrawingCanvas(canvasHtmlElement);

["mousedown", "mouseover"].forEach(eventName => {
    canvasHtmlElement.addEventListener(eventName, function(event) {
        if (event.buttons !== 1) return; // 左クリック以外描画不可
        drawingCanvas.drawStart();
    });
});

["mouseup", "mouseout"].forEach(eventName => {
    canvasHtmlElement.addEventListener(eventName, function(event) {
        drawingCanvas.drawEnd(event.offsetX, event.offsetY);
    });
});

canvasHtmlElement.addEventListener("mousemove", function(event) {
    drawingCanvas.draw(event.offsetX, event.offsetY);
});

clearButtonHtmlElement.addEventListener("click", function() {
    drawingCanvas.clear();
});

