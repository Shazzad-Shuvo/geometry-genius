function calculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = parseFloat(triangleBase.value);

    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = parseFloat(triangleHeight.value);

    // console.log(triangleBaseValue, triangleHeightValue)

    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
    // console.log(area)
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}

function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = parseFloat(rectangleWidth.value);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLength.value);

    const rectangleArea = rectangleWidthValue * rectangleLengthValue;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

function calculateParallelogramArea(){
    const parallelogramBase = getInputFieldValueById('parallelogram-base');
    const parallelogramHeight = getInputFieldValueById('parallelogram-height');

    const parallelogramArea = parallelogramBase * parallelogramHeight;

    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = parallelogramArea;
    setElementInnerText('parallelogram-area', parallelogramArea);
}

function calculateEllipseArea(){
    const majorRadius = getInputFieldValueById('ellipse-major-radius');
    const minorRadius = getInputFieldValueById('ellipse-minor-radius');

    const ellipseArea = Math.PI * majorRadius * minorRadius;

    setElementInnerText('ellipse-area', ellipseArea);
}

// common functions/reusable functions

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}