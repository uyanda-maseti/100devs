//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    } 
}
class Cat extends Animal{
    constructor(name,color){
        super(name)
        this.color = color
    }
    speak(){
        console.log(`${this.name} meows`)
    }
}
let stanley = new Cat('Stanley', 'Black')
console.log(stanley)
let simba = new Dog('Simba', 'Sheperd')
