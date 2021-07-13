class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    scream(noise) {
        console.log("scream: " + noise)
    }
    static a(param) {
        console.log("a:" + param)
    }
    get b() {
        return 10;
    }
}
const dog = new Animal("dog", 4);
dog.name = "Tuan Anh";
console.log(dog);
dog.scream("asdas");
console.log(Animal.a("asdas"));
console.log(dog.b);
