'use strict';

init();

function init() {
    fetch('arsenal.json').then(function(response) {
        return response.json();
    }).then(createLists);
}

//creating
function createLists(json) {
    var list = document.createElement('ul');
    list.addEventListener('click', handleClick);
    list.classList.add('list');

    for (var keys in json) {
        var item = document.createElement('li');
        item.innerHTML = keys;
        //creating sublist
        var sublist = document.createElement('ul');
        sublist.classList.add('sublist');

        //generating sublist items
        for(var i = 0; i < json[keys].length; i++) {
            var sublistItem = document.createElement('li');
            sublistItem.innerHTML = json[keys][i];

            sublist.appendChild(sublistItem);
        }
        item.appendChild(sublist);
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

function handleClick(ev) {
    var sublist = ev.target.querySelector('.sublist');
    if (!sublist) return;

    sublist.classList.toggle('visible');
}

