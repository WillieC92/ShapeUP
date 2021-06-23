document.getElementById("rectangle-btn").onclick = function () {
var div = document.createElement("div");
div.style.backgroundColor = "black";
div.style.position = "absolute";
div.style.left = "600px";
div.style.top = "600px";
div.style.height = "600px";
div.style.width = "600px";

document.getElementsByTagName("body")[0].appendChild(div);
};

document.getElementById("square-btn").onclick = function () {
    var div = document.createElement("div");
    div.style.backgroundColor = "pink";
    div.style.position = "random";
    div.style.left = "600px";
    div.style.top = "600px";
    div.style.height = "600px";
    div.style.width = "600px";
    
    document.getElementsByTagName("body")[0].appendChild(div);
    };

    document.getElementById("circle-btn").onclick = function () {
        var div = document.createElement("div");
        div.style.backgroundColor = "blue";
        div.style.position = "random";
        div.style.left = "600px";
        div.style.top = "600px";
        div.style.height = "600px";
        div.style.width = "600px";
        
        document.getElementsByTagName("body")[0].appendChild(div);
        };

        document.getElementById("triangle-btn").onclick = function () {
            var div = document.createElement("div");
            div.style.backgroundColor = "red";
            div.style.position = "random";
            div.style.left = "600px";
            div.style.top = "600px";
            div.style.height = "600px";
            div.style.width = "600px";
            
            document.getElementsByTagName("body")[0].appendChild(div);
            };
            