// 1. https://learn.javascript.ru/task/closure-sum
function sum(a) {
  return (b) => {
    return console.log(a+b);
  };
}

sum(10)(12);

// 2. https://learn.javascript.ru/task/stringbuffer
function makeBuffer() {
    let privateValue = new String();
  return function(value) {
    if (arguments.length === 0) return console.log(privateValue);
    privateValue += value;    
  };
}

let buffer = makeBuffer();
buffer(1);
buffer(2);
buffer('d');
buffer();

// 3.https://learn.javascript.ru/task/stringbuffer-with-clear
function makeBuffer() {
    let privateValue = '';

    function buffer(value) {
        if (arguments.length === 0) return console.log(privateValue);
        privateValue += value;
    }

    buffer.clear = () => {
        privateValue = '';
    };
    return buffer;
}

//4. https://learn.javascript.ru/task/make-army
function makeArmy() {
    
      var shooters = [];
    
      for (var i = 0; i < 10; i++) {
        function record(i) {
          let shooter = function() { // функция-стрелок
            alert(i); // выводит свой номер
          };
          shooters.push(shooter);
        }
        record(i); 
      }
      return shooters;
    }

