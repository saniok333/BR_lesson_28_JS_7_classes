// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() {
        return this.radius;
    }

    set setRadius(radius) {
        this.radius = radius;
    }

    get getDiameter() {
        return this.radius * 2;
    }

    calcCircleSquare() {
        return Math.PI * this.radius ** 2;
    }

    calcCircleLength() {
        return 2 * Math.PI * this.radius;
    }
}

let myCircle = new Circle(10);

console.log(myCircle.radius);
console.log(myCircle.getRadius);

myCircle.setRadius = 20;
console.log(myCircle.getRadius);

myCircle.radius = 30;
console.log(myCircle.getRadius);

console.log(myCircle.calcCircleSquare());

console.log(myCircle.calcCircleLength());