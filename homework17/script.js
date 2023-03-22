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
  #totalProfit = 1.1;
  constructor(name, surname, rate, days) {
    super(name, surname, rate, days);
    this.totalProfit = Boss.totalProfit;
  }

  getSalary() {
    const bossSal = salary + this.rate * this.days * this.#totalProfit;
    console.log(bossSal);
    return bossSal;
  }
}
class Trainee extends Worker {
  constructor(name, surname, rate, days) {
    super(name, surname, rate, days);
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

const newEmployees = employees.map(function (employee) {
  for (let employee of employees) {
    if (employee.position === 'worker') {
      const worker = new Worker(
        employee.name,
        employee.surname,
        employee.rate,
        employee.days
      );
      console.log(worker);
      return worker;
    }
    if (employee.position === 'boss') {
      const boss = new Boss(
        employee.name,
        employee.surname,
        employee.rate,
        employee.days
      );
      console.log(boss);
      return boss;
    }
    if (employee.position === 'trainee') {
      const trainee = new Trainee(
        employee.name,
        employee.surname,
        employee.rate,
        employee.days
      );
      console.log(trainee);
      return trainee;
    }
  }
});

// employees.forEach(function (employee) {
//   let salary = 0;
//   if (employee.position !== 'boss') {
//     salary += employee.rate * employee.days;
//   }
//   console.log(salary);
//   return salary;
// });

// worker.getSalary();
