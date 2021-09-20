var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var DATA;

function getFile (fileName) {

    var request = new XMLHttpRequest();

    request.open('GET', fileName);

    request.onloadend = function() {

        parse(request.responseText);
    }

    request.send();
}

getFile('./data.json'); //путь к файлу

function parse(obj) {

    DATA = JSON.parse(obj);

    console.log(DATA);
}