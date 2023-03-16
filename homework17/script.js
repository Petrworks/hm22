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
    return `${this.rate * this.days}`;
  }
  getInfo() {
    return `${this.name} ${this.surname} got ${this.rate * this.days}`;
  }
}

const worker1 = new Worker();

console.log(worker1);
worker1.getSalary();
worker1.getInfo();

/* Створіть клас Boss, який наслідується від класа Worker. Цей клас має ті ж самі властивості, що і Worker і плюс додаткова властивість totalProfit. Напишіть метод getSalary(), який рахує зарплату співробітника так само, як метод getSalary() класу Worker + 10% від прибутку (totalProfit) */

function makeClass() {
  if (key === 'worker') {
    class Boss extends Worker {
      constructor(name, surname, rate, days, salary, totalProfit) {
        super();
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        this.totalProfit = totalProfit;
        this.salary = salary;
      }
      getSalary() {
        return `${this.salary * this.totalProfit}`;
      }
    }
  }
  if (key === 'trainee') {
    class Trainee extends Worker {
      constructor(name, surname, rate, days) {
        super();
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
      }
    }
  }
}

for (obj of employees) {
  Object.keys(obj).forEach((key) => {
    let salary = 0;
    if (key === 'worker' || key === 'trainee') {
      for (let i = 0; i < employees.length; i++) {
        salary += rate * days;
      }
    }
    return salary;
  });
}
