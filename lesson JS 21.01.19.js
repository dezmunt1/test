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
