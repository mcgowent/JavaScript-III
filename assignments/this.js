/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding
 * 2. Implicit Binding
 * 3. New binding
 * 4. Explicit Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("D'Artagnan");


// Principle 2
// code example for Implicit Binding
const sayNameFunc = obj => {
    obj.sayName = function () {
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    };
};
const me = {
    name: 'Ryan'
};
const you = {
    name: 'Freddy'
};
sayNameFunc(me);
sayNameFunc(you);

// Invoke Methods on our objects
me.sayName();
you.sayName();

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();


// Principle 4
// code example for Explicit Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

// jerry.speak();
// newman.speak();

jerry.speak.call(newman);
newman.speak.apply(jerry);