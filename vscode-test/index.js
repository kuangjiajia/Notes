let str = "this is a string"
function foo() {
  console.log(str)
  test()
  return 123
}


function test() {
  kuangjiajia()
  return "kuangjiajia"
}

foo()



function kuangjiajia() {
  console.log("this is a test")
}


class Person {
  //constructor
  constructor(name) {
    this.name = name
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

let kuangjiajia2 = new Person("kuangjiajia", 30)
console.log(kuangjiajia2)
