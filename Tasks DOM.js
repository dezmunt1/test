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



