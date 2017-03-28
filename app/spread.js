'use strict';

var names = ['max', 'bill', 'toxa'];

function sayHi(a, b, c) {
    alert('Hi ' + a);
    alert('Hi ' + b);
    alert('Hi ' + c);
}
sayHi.apply(undefined, names);

//Помогает передавать в функцию параметры из массивов напрямую