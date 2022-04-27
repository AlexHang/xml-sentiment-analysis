var xmlDoc;
var table;
var nodeList = []

function loadXMLDoc(path, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.getAllResponseHeaders("Content-Type", "text/xml");
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(request);
        }
    };
    request.send();
}

function printFormValues() {
    var emotion = document.getElementsByClassName("form-control")[0].value;
    var description = document.getElementsByClassName("form-control")[1].value;

    var updateTable = document.getElementById("demo");
    var row = updateTable.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = emotion;
    cell2.innerHTML = description;

    // loadXMLDoc("/exercitiul1.xml", function (xml) {
    //     xmlDoc = xml.responseXML;
    //     console.log(xmlDoc);

    emotionNode = document.createElement("emotion");
    nameNode = document.createElement("name");
    descriptionNode = document.createElement("description");
    nameNode.innerText = emotion;
    descriptionNode.innerText = description;
    emotionNode.appendChild(nameNode);
    emotionNode.appendChild(descriptionNode);
    // var x = xmlDoc.getElementsByTagName("emotion");
    // xml.responseXML.documentElement.appendchild(emotionNode);
    // x.appendChild(emotionNode);
    // console.log(x);
    nodeList.push(emotionNode)
    console.log(nodeList);
    // });
}

function queryProjects() {
    var list = document.getElementById("projectSelectorDropdown");
    for (var i = 0; i < nodeList; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        var text = document.createTextNode(nodeList[i]);
        link.appendChild(text);
        link.href = "#";
        li.appendChild(link);
        list.appendChild(li);
    }
}

function loadXML() {
    loadXMLDoc("/ex1.xml", function (xml) {
        var i;
        xmlDoc = xml.responseXML;
        console.log(xmlDoc);
        table = "<thead class=\"thead-dark\"><tr><th>Emotion</th><th>Description</th></tr></thead><tbody>";
        var x = xmlDoc.getElementsByTagName("emotion");
        nodeList = []
            .concat(Array.from(x));

        for (i = 0; i < nodeList.length; i++) {
            table += "<tr><td>" +
                nodeList[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                nodeList[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                "</td></tr>";
        }
        table += "</tbody>";
        document.getElementById("demo").innerHTML = table;
    });
}

