let names = require('./4-names');
let sayHi = require('./5-name-method');

let person5 = require('./6-alternative module export')



sayHi(names.person1);
sayHi(names.person2);
sayHi(names.person3);
sayHi(person5.person5);


