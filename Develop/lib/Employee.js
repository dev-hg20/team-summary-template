// TODO: Write code to define and export the Employee

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// const emp = new Employee("Haylie", 1, "email@mail.com");

// const name = emp.getName();

// console.log(name);
