//Create a constructor with 4 properties and 3 methods
function Pizza(crust, size, slices, price) {
    this.crust = crust;
    this.size = size;
    this.slices = slices;
    this.price = price;

    this.eatSlices = () => {
        console.log(`You ate a slice of ${this.size} ${this.crust} crust pizza.`);
        this.slices--;
    }

    this.getPrice = () => {
        return this.price;
    }

    this.getDescription = () => {
        return `This is a ${this.size} ${this.crust} crust pizza with ${this.slices} slices left.`;
    }
}