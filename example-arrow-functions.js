var names = ["Ajan", "Arun", "Deepak", "Ravi", "Suvrat", "Umesh"];

// names.forEach(function(name) {
//     console.log('forEach', name);
// }, this);

// names.forEach((name) => {
//     console.log("arrowFunc", name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('AJRedDevil'));

// Anonymous take local this while arrow take parent this binding
// var person = {
//     name: "AJRedDevil",
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// }

// person.greet();


// Challenge Area
function add (a, b) {
    return a + b;
}

// addStatement
var addStatement = (a, b) => {
    return a + b;
}
// addExpression
var addExpression = (a, b) => a + b;

// console.log(add(1, 3));
// console.log(add(9, 0));

console.log(addStatement(2, 3));
console.log(addExpression(2, 3));