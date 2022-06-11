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

