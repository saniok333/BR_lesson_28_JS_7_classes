// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;

// поле, которое хранит количество чернил в маркере (в процентах);

// метод для печати (метод принимает строку и выводит текст соответствующим цветом;
// текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).

// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера
// и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(color, qtyOfInk) {
        this.color = color;
        if (qtyOfInk > 100) {
            this.qtyOfInk = 100;
        } else {
            this.qtyOfInk = qtyOfInk;
        }
    }

    printText(text) {
        let str = ``;
        for (let i = 0;
            (i < text.length) && (this.qtyOfInk > 0); i++) {
            str += text[i];
            if (text[i] != ` `) this.qtyOfInk -= 0.5;
        }
        document.write(`<p style="color:${this.color}">${str}</p>`);
    }
}

class RefuelingMarker extends Marker {
    refill(refQtyOfInk) {
        if ((this.qtyOfInk + refQtyOfInk) > 100) {
            this.qtyOfInk = 100;
        } else {
            this.qtyOfInk += refQtyOfInk;
        }
    }
}


let myMarker = new Marker("red", 5);
console.log(myMarker);
myMarker.printText("Hello, World!!!");
console.log(myMarker);


let myRefMarker = new RefuelingMarker("blue", 6);
console.log(myRefMarker);
myRefMarker.printText("Hello, World!!!");
console.log(myRefMarker);

myRefMarker.refill(102);
console.log(myRefMarker);
myRefMarker.printText("Hello, World!!!");
console.log(myRefMarker);