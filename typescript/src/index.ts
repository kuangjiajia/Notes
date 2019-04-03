// function sayHello(person: String) {
//   return "Hello, " + person
// }

// let isDone: boolean = false
// let decLiteral: number = 6

// console.log(decLiteral)
// console.log(isDone)
// console.log(sayHello("kjj"))

// let hexLiteral: number = 0xf00d
// console.log(hexLiteral)

// let binaryLiteral: number = 0b1010
// console.log(binaryLiteral)

// let notANumber: number = NaN
// console.log(notANumber)

// let octalLiteral: number = 0o744
// console.log(octalLiteral)

// let infinityNumber = Infinity
// console.log(infinityNumber)

// let mdzzName: string = "zzx"
// let sbName: string = "yzp"
// console.log(mdzzName)
// console.log(sbName)

// let sbName = "sbyzp"
// let sentence: string = `Hello, my name is ${sbName}.`

// console.log(sentence)


// let handsomeName = "kjj"
// const alertNameF = function (): void {
//   alert(handsomeName)
// }

// alertNameF()

// let unusable: void = undefined

// let hobby: string = "sleep"
// let favo: string = "hhhh"

// let anyThing: any = 'Tom'

// let something
// something = "seven"



// let strnum: string | number
// strnum = "kjj"
// strnum = 20


// function getLength(len: string | number): number {
//   return 123
// }

// console.log(getLength(998))

// function getStrLen(str: string): number {
//   return str.length
// }
// console.log(getStrLen("kuangjiajia"))

// interface Person {
//   name: string
//   age: number
// }

// let tom: Person = {
//   name: "tom",
//   age: 20
// }

// console.log(tom)


// interface Person {
//   name: string
//   age?: number
// }

// let tom: Person = {
//   name: "kuangjiajia"
// }

// interface Person {
//   name: string
//   age?: number
//   [propName: string]: any
// }


// interface Person {
//   name: string
//   age: 20
//   [propName: string]: any
//   readonly id: string
// }

// let lx = {
//   name: "lx",
//   age: 22,
//   id: "idsblx"
// }

// console.log(lx)

// lx.id = "idsbllll"

// console.log(lx)


// let fibonacci: (number | string)[] = [1, 2, 3, '1']
// fibonacci.push(777)
// console.log(fibonacci)



// function sumStr(x: string, y: string): string {
//   return x + y
// }

// console.log(sumStr("zzx,", "kjj"))

// function sum(x: number, y: number): number {
//   return x + y
// }

// console.log(sum(1, 2))



// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y
// }

// console.log(mySum(1, 2))

// interface numArr {
//   [index: number]: number
// }

// let fibonacci: numArr = [1, 2, 3, 4]
// console.log(fibonacci)

// let anyArr: any[] = [1, 2, "kuangjia", false]

// console.log(anyArr)


// interface SearchFun {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFun = function (source: string, subString): boolean {
//   return source.search(subString) === -1
// } 


// function buildName(fisrtName: string, lastName?: string): string {
//   if (lastName) {
//     return "Hello," + fisrtName + lastName
//   } else {
//     return "Hello," + fisrtName
//   }
// }

// console.log(buildName("kuang", "junjia"))


// function push(arr: number[], ...args: number[]): void {
//   arr.push(...args)
// }

// let arr: number[] = [1, 2, 3]
// push(arr, 1, 3, 9, 8)
// console.log(arr)

// function reverse(x: number | string): number | string {
//   if (typeof x === "number") {
//     return Number(x).toString().split("").reverse().join("")
//   } else {
//     return x.split("").reverse().join("")
//   }
// }

// let x = "kuangjiajia"
// console.log(reverse(x))


function getLength(something: string | number): number {
  if (typeof something === "string") {
    return something.length
  } else {
    return Number(something).toString().length
  }
}

console.log("length: " + getLength(999888))