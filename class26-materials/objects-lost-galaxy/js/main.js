//Create a dog object that has four properties and three methods
let  pizza = {};

pizza.numberOfSlices = 8;
pizza.layers = 3;
pizza.size = "large";
pizza.crust = "stuffed";
pizza.extraCheese = true;

pizza.eat = function() {
    return "Nom nom nom!";
};

pizza.delivery = function() {
    return "Your pizza is on its way!";
};

pizza.describe = function() {
    return `This pizza is a ${this.size} size with ${this.crust} crust and has ${this.numberOfSlices} slices.`;
};

console.log(pizza.eat());
console.log(pizza.delivery());
console.log(pizza.describe());