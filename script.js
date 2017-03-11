
//
//
//
//
//
//// TODO: install https://github.com/tapio/live-server
//// TODO: open lists on click


var request = new XMLHttpRequest();
request.open("GET", 'arsenal.json');
var loadedData;
request.addEventListener('load', function () {
    loadedData = JSON.parse(request.responseText);
});
request.send();

var block = document.querySelector('.wrap');
block.addEventListener('click', function(ev){
    var target = ev.target;
    var list = target.nextElementSibling;

    if(target.tagName == "SPAN" && !list.firstChild){
        var targetAttr = target.getAttribute('data-class');
        var generatedData = '';
        loadedData[targetAttr].forEach(function(item){
            generatedData += '<li>' + item + '</li>'
        });
        list.insertAdjacentHTML('beforeend', generatedData);
    }
    else {
        list.innerHTML = ""
    }
});