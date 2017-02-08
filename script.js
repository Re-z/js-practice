init();

function init() {
    fetch('arsenal.json').then(function(response) {
        return response.json();
    }).then(createLists).then(createSublist);
}






//creating
function createLists(json) {
    var list = document.createElement('ul');
    list.classList.add('list');

    for (keys in json) {
        var item = document.createElement('li');
        item.innerHTML = keys;
        //creating sublist
        var sublist = document.createElement('ul');
        sublist.classList.add('sublist');

        //generating sublist items
        //for(var i = 0; i < json[keys].length; i++) {
        //    var sublistItem = document.createElement('li');
        //    sublistItem.innerHTML = json[keys][i];
        //
        //    sublist.appendChild(sublistItem);
        //}
        //item.appendChild(sublist);
        list.appendChild(item);
    }
    document.body.appendChild(list);
}


//adding eventListener
function createSublist(){
    var listItem = document.querySelectorAll('.list>li');

    for(var i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', function(){

        })
    }
}







// TODO: install https://github.com/tapio/live-server
// TODO: open lists on click
