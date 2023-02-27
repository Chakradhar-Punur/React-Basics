const myfunc = (name) => {
  console.log(name);
}

myfunc('Yogesh');

// Classes
class Human {
  constructor(){
    this.gender = 'male';
  }
  printGender() { 
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super();
    this.name = 'Yogesh';
  }
  printName() {
    console.log(this.name);
  }
}

// ES7 Standard without constructors
class Human {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human{
  name = 'Yogesh';
  printName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();
