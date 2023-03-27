/* Створіть клас Worker з наступними властивостями name, surname, rate, days.
Напишіть в середині класа метод getSalary(), який рахує зарплату (рейт помножений на кількість відпрацьованих днів) і метод getInfo(), який повертає рядок з інформацією про отриману зарплату співробітника
<name> <surname> got $<money>*/

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    if (this.position === 'trainee' && this.days <= 60) {
      return `${this.rate * this.days * 0.7}`;
    } else {
      return `${this.rate * this.days}`;
    }
  }
  getInfo() {
    return `${this.name} ${this.surname} got ${this.getSalary()}`;
  }
}

/* Створіть клас Boss, який наслідується від класа Worker. Цей клас має ті ж самі властивості, що і Worker і плюс додаткова властивість totalProfit. Напишіть метод getSalary(), який рахує зарплату співробітника так само, як метод getSalary() класу Worker + 10% від прибутку (totalProfit) */

class Boss extends Worker {
  totalProfit = 1.1;
  salary = 1000; // не розумію як передати salary зовні
  constructor(name, surname, rate, days) {
    super(name, surname, rate, days);
  }
  getBossSalary() {
    return `${this.rate * this.days + this.salary * this.totalProfit}`;
  }
}

const newEmployees = employees.map(function (employee) {
  if (employee.position === 'worker') {
    const worker = new Worker(
      employee.name,
      employee.surname,
      employee.rate,
      employee.days
    );
    console.log(worker.getInfo());
    console.log(worker.getSalary());
    return worker;
  }
  if (employee.position === 'boss') {
    const boss = new Boss(
      employee.name,
      employee.surname,
      employee.rate,
      employee.days
    );

    console.log(boss.getInfo());
    console.log(boss.getBossSalary());
    return boss;
  }
});

let sum = 0;

const salary = employees.reduce(function (accumulator, currentValue) {
  if (employees.position !== 'boss') {
    return accumulator + currentValue.days * currentValue.rate;
  }
}, sum);

console.log(salary);
