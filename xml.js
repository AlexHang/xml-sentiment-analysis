var fs = require('fs');
var parser = require('xml2json');

function readXML() {
    fs.readFile('./ex1.xml', function (err, data) {
        var xml = JSON.parse(parser.toJson(data, { reversible: true }));
        console.log(xml);
    });
}


