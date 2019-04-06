(function () {
  'use strict';

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
  // function getLength(something: string | number): number {
  //   if (typeof something === "string") {
  //     return something.length
  //   } else {
  //     return Number(something).toString().length
  //   }
  // }
  // console.log("length: " + getLength(999888))
  // function getL≠ength(str: string | number): number {
  //   if((<string>str).length) {
  //     return (<string>str).length
  //   }else {
  //     return Number(str).toString().length
  //   }
  // } 
  // let a: number[] = [1, 2, 3, 4]
  // let ro: ReadonlyArray<number> = [1, 2, 3]
  // a = ro as number[]
  // console.log(a)
  // interface SquareConfig {
  //   color?: string;
  //   width?: number;
  // }
  // function createSquare(config: SquareConfig): { color: string; area: number } {
  //   let newSquare = { color: "white", area: 100 };
  //   if (config.color) {
  //     newSquare.color = config.color;
  //   }
  //   if (config.width) {
  //     newSquare.area = config.width * config.width;
  //   }
  //   return newSquare;
  // }
  // let mySquare = createSquare({ colour: "black" } as SquareConfig);
  // console.log(mySquare)
  // class Animal {
  //   private name: string;
  //   constructor(theName: string) { this.name = theName; }
  // }
  // class Rhino extends Animal {
  //   constructor() { super("Rhino"); }
  // }
  // let animal = new Animal("Goat");
  // let rhino = new Rhino();
  // console.log(rhino)
  // interface Card {
  //   suit: string
  //   card: number
  // }
  // interface Deck {
  //   suits: string[]
  //   cards: number[]
  //   createCardPicker(this: Deck): () => Card
  // }
  // let deck = {
  //   suits: ["hearts", "spades", "clubs", "diamonds"],
  //   cards: Array(52),
  //   createCardPicker: function (this: Deck) {
  //     return () => {
  //       let pickedCard = Math.floor(Math.random() * 52);
  //       let pickedSuit = Math.floor(pickedCard / 13);
  //       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
  //     }
  //   }
  // }
  // let cardPicker = deck.createCardPicker();
  // let pickedCard = cardPicker();
  // // alert("card: " + pickedCard.card + " of " + pickedCard.suit);
  // console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
  // const typed = document.getElementById("typed");
  // if (typed) {
  //   const pay = function (current: number, discount: number): number {
  //     return current * (discount / 100);
  //   }
  //   typed.addEventListener("click", function (this: HTMLElement, ev: MouseEvent) {
  //     console.log(pay(1000, 20))
  //   });
  // }
  // class UI {
  //   name: string
  //   constructor(name) {
  //     this.name = name
  //   }
  //   addEventListener(type: string, handler: (this: UI, e: string) => void) {
  //     handler.call(this, this.name)
  //   }
  // }
  // const ui = new UI("kuangjiajia")
  // const onClick = ui.addEventListener("click", function (e: string) {
  //   console.log(this.name)
  // })
  // class World {
  //   private max: number
  //   country: string
  //   constructor(country: string) {
  //     this.country = country
  //     this.max = 100
  //   }
  //   output() {
  //     return this.country
  //   }
  // }
  // class Country extends World {
  //   constructor(country: string) {
  //     super(country)
  //   }
  // }
  // let china = new Country("china")
  // console.log(china)
  // class staticClass {
  //   static sName = "kuangjiajia"
  //   static sFunc = (): string => staticClass.sName
  // }
  // console.log(staticClass.sFunc())
  // class Employee {
  //   private _fullName: string
  //   constructor(_fullName: string) {
  //     this._fullName = _fullName
  //   }
  //   get fullName(): string {
  //     return this._fullName
  //   }
  //   set fullName(newName: string) {
  //     this._fullName = newName
  //   }
  // }
  // let worker = new Employee("kuangjiajia")
  // worker.fullName = "jiajiakuang"
  // abstract class Department {
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   printName(): void {
  //     console.log(`Department name is ${this.name}`)
  //   }
  //   abstract printMeeting(): void
  // }
  // class AccountingDepartment extends Department {
  //   meeting: string
  //   constructor(name: string, meeting: string) {
  //     super(name)
  //     this.meeting = meeting
  //   }
  //   printMeeting(): void {
  //     console.log(`this meeting is ${this.meeting}`)
  //   }
  // }
  // let kjj = new AccountingDepartment("kuangjiajia", "redrock")
  // kjj.printMeeting()
  // kjj.printName()
  // class XDom {
  //   static xdom: XDom | null
  //   static shareInstance = (): XDom => {
  //     if (!XDom.xdom) {
  //       XDom.xdom = new XDom()
  //     }
  //     return XDom.xdom;
  //   }
  //   public dom: HTMLElement | null
  //   constructor() {
  //     this.dom = document.getElementById("root")
  //   }
  //   insert(text: string) {
  //     if (this.dom) {
  //       this.dom.innerText = text
  //     }
  //   }
  //   setColor(color: string) {
  //     if (this.dom) {
  //       this.dom.style.color = color
  //     }
  //   }
  // }
  // let xdom = new XDom()
  // xdom.insert("kuangjiajia")
  // xdom.setColor("pink")
  // function sum({x,y}: {x:number,y:number}): number {
  //   return x + y
  // }
  // interface ISum {
  //   x: number
  //   y: number
  // }
  // function sum({ x, y }: ISum): number {
  //   return x + y
  // }
  // console.log(sum({ x: 1, y: 2 }))
  // interface Test {
  //   readonly x: string
  //   readonly y: string
  // }
  // let test: Test = {
  //   x: "kjj",
  //   y: "lx"
  // }
  // console.log(test)
  // interface ICheckPoint {
  //   x: string
  //   y: string
  // }
  // function create(config: ICheckPoint): void {
  //   console.log(config)
  // }
  // create({
  //   x: "x",
  //   y: "y",
  //   zz: "zzx"
  // } as ICheckPoint)
  // interface A {
  //   x: string
  // }
  // interface B extends A {
  //   y: string
  // }
  // interface IFunc {
  //   sum: (x: number, y: number) => number
  // }
  // const d: IFunc = {
  //   sum(x: number, y: number): number {
  //     return x + y
  //   }
  // }
  // interface iArr {
  //   [index: number]: string
  // }
  // let x: iArr = ["zzx", "lx"]
  // console.log(x)
  // console.log(x[0])
  // type printType = <T>(args: T) => T
  // function print<T>(args: T): T {
  //   return args
  // }
  // console.log(print("kuangjiajia"))
  // const _p: printType = print
  // function extend<T, U>(first: T, second: U): T & U {
  //   let result = <T & U>{}
  //   for (let id in first) {
  //     (<any>result)[id] = (<any>first)[id]
  //   }
  //   for (let id in second) {
  //     if (!result.hasOwnProperty(id)) {
  //       (<any>result)[id] = (<any>second)[id]
  //     }
  //   }
  //   return result
  // }
  // class Person {
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  // }
  // interface Loggable {
  //   log(name: string): void
  // }
  // class ConsoLog implements Loggable {
  //   log(name: string): void {
  //     console.log(name)
  //   }
  // }
  // let newObj = extend(new Person("kuangjiajia"), new ConsoLog())
  // console.log(newObj)
  // function sumStr(input: number | string): string {
  //   if (typeof input === "string") {
  //     return `string: ${input}`
  //   } else if (typeof input === "number") {
  //     return `number: ${input}`
  //   } else {
  //     throw new Error("input error type")
  //   }
  // }
  // console.log(sumStr("kuangjiajia"))
  function pluck(o, names) {
      return names.map(function (n) { return o[n]; });
  }
  var d = pluck({
      d: "123"
  }, ["d"]);
  console.log(d);

}());
//# sourceMappingURL=index.js.map
