init();

function init() {
    fetch('arsenal.json').then(function(response) {
        return response.json();
    }).then(createList);
}

function createList(json) {
    var list = document.createElement('ul');
    list.classList.add('list');

    Object.keys(json).map(function(key) {
        var item = document.createElement('li');
        item.innerHTML = key;
        list.appendChild(item);
    });

    document.body.appendChild(list);
}

// TODO: install https://github.com/tapio/live-server
// TODO: open lists on click
