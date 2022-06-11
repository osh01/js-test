/*
document.querySelector('#get').onclick = () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'data.json', false);
    request.send();
    if (request.status == 200){
        let data = JSON.parse(request.responseText);
        console.log(data);
        document.getElementById('result').innerHTML = data['name'];
    }
}
*/

function getAjax(method, url, func)//метод, адрес, функция-обработчик результатов
{
    //1. Создать объект запрос XMLHttpRequest
    let request = new XMLHttpRequest();
    //2. Настройка запроса (указать адрес и метод отправки)
    request.open(method, url, true)
    //3. Обработчик события изменения состояния запроса
    request.onreadystatechange = function () {
        //4.Отследить состояние - получен ответ от сервера
        if (request.readyState == 4 && request.status == 200)
            func(request.responseText)//результаты запроса
    }
    //5. Отправить запрос
    request.send()
}

document.querySelector("#privat").addEventListener('click', function () {

    let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    getAjax('GET', url, function (data) {
        console.log(data)
        let arr = JSON.parse(data)
        console.log(arr)
        for (let item of arr) {
            document.body.innerHTML += `<p>Buy:${item.ccy}​-${item.base_ccy}​=${item.buy}</p>`
            document.body.innerHTML += `<p>Sale:${item.ccy}​-${item.base_ccy}​=${item.sale}</p>`
        }
    })
});