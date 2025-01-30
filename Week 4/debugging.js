const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = PI * radius * radius
    return area;
}
area = circleArea(3);
console.log(area);