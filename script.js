fetch('https://raw.githubusercontent.com/Re-z/js-practice/master/arsenal.json').then( function(response) {
    return response.json()
}).then(function (obj) {


    var list = document.createElement('ul');
    list.classList.add('list');
    for (keys in obj) {
        var item = document.createElement('li');
        item.innerHTML = keys;
        list.appendChild(item);
    }
    document.body.appendChild(list);





})
