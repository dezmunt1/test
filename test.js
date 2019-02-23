// поспрашиваем яндекс
// <тип_метода> https://api.partner.market.yandex.ru/v<версия_API>/<ресурс>.<формат_ответа>?<параметры>

let inf = {
  token: prompt('Введите токен'),
  id: prompt('Введите ID приложения'),
};

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.partner.market.yandex.ru/v2/regions/213.json');
xhr.setRequestHeader('Authorization: OAuth oauth_token="${inf.token}", oauth_client_id="${inf.id}"`);
xhr.setRequestHeader('Content-Type', 'application/json');


xhr.send();

xhr.addEventListener('load', (e)=>{
  console.log(e.target);
});
