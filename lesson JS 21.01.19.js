// 1. https://learn.javascript.ru/task/debounce

function debounce(f, ms) {
      let timeId;
      return function(arg) {
        clearTimeout( timeId );
        timeId = setTimeout(function(){
          f.call(this, arg);
          console.log(arg);
        }, ms)
      }
    }

// 2. https://learn.javascript.ru/task/throttle

function throttle(f, ms) {
  let timeId;
  return function(arg) {
    if (!timeId) {     // Если не разу не вызывалось
      f.call(this, arg);
    }
    clearTimeout( timeId );
    timeId = setTimeout(function(){
      f.call(this, arg);
    }, ms)
  }
}
