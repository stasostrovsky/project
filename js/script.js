'use strict';

/* let slow = function (x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
};

function cachingDecorator(func) {
  let cache = new Map();

  let cachingFunc = function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };

  return cachingFunc;
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша */ 

function sayHi() {   // (1) создаём
  console.log( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет
