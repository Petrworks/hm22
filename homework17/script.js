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
    console.log(`${this.rate * this.days}`);
    return `${this.rate * this.days}`;
  }
  getInfo() {
    return `${this.name} ${this.surname} got ${this.rate * this.days}`;
  }
}

/* Створіть клас Boss, який наслідується від класа Worker. Цей клас має ті ж самі властивості, що і Worker і плюс додаткова властивість totalProfit. Напишіть метод getSalary(), який рахує зарплату співробітника так само, як метод getSalary() класу Worker + 10% від прибутку (totalProfit) */

class Boss extends Worker {
  constructor(name, surname, rate, days, totalProfit) {
    super();
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.totalProfit = totalProfit;
  }

  getSalary() {
    return `${this.rate * this.days * totalProfit}`;
  }
}
class Trainee extends Worker {
  constructor(name, surname, rate, days) {
    super();
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    if (employee.position === 'trainee' && employee.days <= '60') {
      return `${this.rate * this.days * 0.7}`;
    }
    if (employee.position === 'trainee' && employee.days > '60') {
      return `${this.rate * this.days}`;
    }
  }
}

for (let employee of employees) {
  if (employee.position === 'worker') {
    new Worker(employee.name, employee.surname, employee.rate, employee.days);
  }
  if (employee.position === 'boss') {
    new Boss(
      employee.name,
      employee.surname,
      employee.rate,
      employee.days,
      (totalProfit = 1.1)
    );
  }
  if (employee.position === 'trainee') {
    new Trainee(employee.name, employee.surname, employee.rate, employee.days);
  }
}

employees.forEach(function (employee) {
  let salary = 0;
  if (employee.position === 'worker') {
    salary += employee.rate * employee.days;
  }
  console.log(salary);
  return salary;
});

employees.getSalary();
employees.getInfo();
