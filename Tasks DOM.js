//1.https://learn.javascript.ru/traversing-dom#dom-children
console.log(document.head);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);

//2.https://learn.javascript.ru/traversing-dom#proverka-suschestvovaniya-detey
if (document.body.children[1].lastElementChild.childNodes.length === 0) {
  console.log('Элемент пуст');
};

//3.https://learn.javascript.ru/traversing-dom#vydelite-yacheyki-po-diagonali
var table = document.body.children[0];
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }

//4. https://learn.javascript.ru/searching-elements-dom#derevo
let arrLi = [...document.querySelectorAll('li')];
arrLi.forEach(elem => {
  console.log(`${elem.firstChild.textContent.trim()}: ${elem.querySelectorAll('li').length}`);
});

//5.https://learn.javascript.ru/attributes-and-custom-properties#postavte-klass-ssylkam
<a name="list">список</a>
    <ul>
        <li><a href="http://google.com">http://google.com</a></li>
        <li><a href="/tutorial">/tutorial.html</a></li>
        <li><a href="local/path">local/path</a></li>
        <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
        <li><a href="http://nodejs.org">http://nodejs.org</a></li>
        <li><a href="http://internal.com/test">http://internal.com/test</a></li>
    </ul>
    <script>
        let aArr = document.querySelectorAll('a');
        for (let i=0; i < aArr.length; i++) {
            if (aArr[i].matches('[href]') && aArr[i].matches('a[href*="://"') && !aArr[i].matches('a[href^="http://internal.com"')) {
                aArr[i].classList.add('external');
            }
        }
//6.https://learn.javascript.ru/modifying-document#sozdat-kalendar-v-vide-tablitsy

/* Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).
Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.
Синтаксис: createCalendar(id, year, month).
Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.
Например: createCalendar("cal", 2012, 9) сгенерирует в <div id=„cal“></div> следующий календарь:
 */

let days = {
  '1': 'Пн' ,
  '2': 'Вт' ,
  '3': 'Ср' ,
  '4': 'Чт' ,
  '5': 'Пт' ,
  '6': 'Сб' ,
  '7': 'Вс' 
};
function daysMonth(date) {
  let days = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  return Number(days);
}

function createCalendar(id, year, month) {
  let fragment = document.createDocumentFragment();
  let elem = document.body.querySelector('#'+id);
  let date = new Date(year, month - 1);
  let day = date.getDay();

  if (day === 0) { // не забываем что воскресенье это 0
    day = 7;
  }

  for (let i = 1; i <= Object.keys(days).length; i++) {
    if (!fragment.querySelector('tr')) {        //Если tr на первом вызове нет, создадим его
      let tr = document.createElement('tr');
      fragment.append(tr);
    }
    let th = document.createElement('th');      // Добавим дни недели
    th.className = 'tHead';
    th.insertAdjacentText('afterbegin', days[`${i}`]);
    fragment.lastElementChild.appendChild(th);
  }

  for (let i = 1; i < day; i++) {
    if (fragment.lastElementChild.children.length === 7) {        //Если tr на первом вызове нет, создадим его
      let tr = document.createElement('tr');
      fragment.append(tr);
    }

    let td = document.createElement('td');
    td.innerText = ' ';
    td.className = 'tD';
    fragment.lastElementChild.appendChild(td);
  } 

  for (let i = date.getDate(); i <= daysMonth(date);) {  
    
    if (fragment.lastElementChild.children.length === 7) {        //Если tr на первом вызове нет, создадим его
      let tr = document.createElement('tr');
      fragment.append(tr);
    } 
    let td = document.createElement('td');
    td.innerText = i++;
    td.className = 'tD';
    fragment.lastElementChild.appendChild(td);
    
  }

  if (fragment.lastElementChild.children.length != 7) {
    for (let i = fragment.lastElementChild.children.length; i < 7; i++ ) {
    let td = document.createElement('td');
    td.className = 'tD';
    fragment.lastElementChild.appendChild(td);
    }
  }

  elem.appendChild(fragment);
}

createCalendar('calendar', 2019, 2);

//7. https://learn.javascript.ru/metrics#pomestite-myach-v-tsentr-polya
let div = document.querySelector('#field');
let parmsDiv = {width: div.clientWidth, height: div.clientHeight};
let ball = document.querySelector('#ball');
let parmsBall = {width: ball.offsetWidth, height: ball.offsetHeight};
ball.style = `top: ${parmsDiv.height/2 - parmsBall.height/2}px; left: ${parmsDiv.width/2 - parmsBall.width/2}px`;

// 8.https://learn.javascript.ru/coordinates-document#oblast-vidimosti-dlya-dokumenta
function getDocumentScroll() {
    let obj = document.body.getBoundingClientRect();
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight);

    return {
        top: pageYOffset,
        bottom: pageYOffset + document.documentElement.clientHeight,
        height: scrollHeight
    }
}

// 9. https://learn.javascript.ru/obtaining-event-object#peredvigat-myach-po-polyu
let field = document.querySelector('#field');
    let ball = document.querySelector('#ball');

    field.addEventListener('click', function(event) {
      let fieldParams = field.getBoundingClientRect();
      let ballParams = ball.getBoundingClientRect();

      let fieldCoords = {
        top: fieldParams.top + field.clientTop,
        left: fieldParams.left + field.clientLeft
      };

      let ballCoords = {
        top: event.clientY - fieldCoords.top - ball.clientWidth/2 ,
        left: event.clientX - fieldCoords.left - ball.clientWidth/2
      };
  
       
      console.log(ball.style.top, ballCoords.top, field.clientHeight);
      ball.style.top = ballCoords.top + 'px';
      ball.style.left = ballCoords.left + 'px';

      if (ballCoords.top < 0) {
          ball.style.top = 0;
      }

      if (ballCoords.left < field.clientLeft) {
          ball.style.left = 0;
      }
      
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
          ball.style.left =  field.clientWidth - ball.clientWidth + 'px';
      }

      if (ballCoords.top + ball.clientHeight > field.clientHeight)  {
          ball.style.top =  field.clientHeight - ball.clientHeight + 'px';
      }

    });
