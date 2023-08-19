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