// Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class EmpTable {
  constructor(bankEmpArr) {
    this.bankEmpArr = bankEmpArr.slice(0);
  }
  getHtml() {
    let tbl = `<table border="1">
    <caption>Bank employees</caption>
    <tr>
     <th>Name</th>
     <th>Position</th>
    </tr>`;
    for (let tr of this.bankEmpArr) {
      tbl += `<tr><td>${tr.name}</td><td>${tr.position}</td></tr>`;
    }
    document.write(`${tbl}`);
  }
}

let bankEmployees = [
  new Employee("Vasya", "plumber"),
  new Employee("Petya", "tractordriver"),
  new Employee("Fedya", "qa"),
  new Employee("Misha", "hr"),
]

let myEmplTable = new EmpTable(bankEmployees);
myEmplTable.getHtml();