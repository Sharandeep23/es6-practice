class Parent {
    constructor() {
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent {
    constructor(name) {
        // This calls the parent class constructor
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());
