'use strict';

/* Какое будет выведено значение: let x = 5; alert( x++ ); ? 5
 Чему равно такое выражение: [ ] + false - null + true ? Nan
 Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2
 Чему равна сумма [ ] + 1 + 2? "12"
 Что выведет этот код: alert( &quot;1&quot;[0] )?
 Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
 Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
 Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
 Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
 Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
 Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ? */

//console.log([] + 1 + 2);

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    answer = !prop ? 'Закрыто' : 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    
    if ( (parseInt(fDish.price) + parseInt(sDish.price))/2 < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
   
    const copy = Object.assign({}, data);

    copy.menu = [];

    copy.waitors = [];
    copy.waitors[0] = {name: 'Mike', age: 32};

    return copy;
}

transferWaitors(restorantData);


function sayHi() {
  
    console.log("Hi");

    if (sayHi.counter == null) {
        sayHi.counter = 0; // начальное значение
    }
    
    sayHi.counter++;
  }
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  console.log( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза

  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();


  group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {
        console.log(this.title + ': ' + student);
      },this);
    }
  };
  
  group.showList();