let names = ['max', 'bill', 'toxa'];

function sayHi(a,b,c){
    alert('Hi ' + a);
    alert('Hi ' + b);
    alert('Hi ' + c);
}
sayHi(...names);

//Помогает передавать в функцию параметры из массивов напрямую