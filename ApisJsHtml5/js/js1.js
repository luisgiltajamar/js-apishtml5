var datos = [];

function drag(evt) {
    evt.dataTransfer.setData("text/html", evt.target.id);

}

function dropable(evt) {

    evt.preventDefault();
}

function drop(evt) {

    evt.preventDefault();
    var datos = evt.dataTransfer.getData("text/html");
    evt.target.appendChild(document.getElementById(datos));

}

function error(err) {
    document.querySelector("#latitud").innerHTML = "";
    document.querySelector("#longitud").innerHTML = "";
    document.querySelector("#error").innerHTML = "Sin acceso";
}

function posicion() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            function(pos) {
                document.querySelector("#latitud").innerHTML = pos.coords.latitude;
                document.querySelector("#longitud").innerHTML = pos.coords.longitude;

            },error
           
        );

    } else {
       
    }


}

function leerInfo() {
    if (localStorage && localStorage["datos"]) {
        datos = eval(localStorage["datos"]);
        var lista = document.querySelector("#emails");
        for (var i = 0; i < datos.length; i++) {
            var item = document.createElement("li");
            var texto = document.createTextNode(datos[i]);

            item.appendChild(texto);
            lista.appendChild(item);
        }


    } else {

        alert("No soportado, actuliza");
    }
    
}

function escribir() {
    var texto = document.querySelector("#txtEmail").value;

    datos.push(texto);
    var lista = document.querySelector("#emails");
    var item = document.createElement("li");
    var texItem = document.createTextNode(texto);
    item.appendChild(texItem);
    lista.appendChild(item);
    localStorage["datos"] = JSON.stringify(datos);


}

function dibujar() {
    var micanvas = document.querySelector("#dibujame");
    var c = micanvas.getContext("2d");

    c.fillStyle="#c5fa66";
    c.fillRect(5, 5, 60, 30);

   
    c.arc(70, 50, 70, 0, 2 * Math.PI);
    c.strokeStyle = "#006699";
    c.stroke();


}


(function () {


    var ele = document.querySelectorAll(".dibujo");
  
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.background = "red";
        

        ele[i].addEventListener("click", function () { alert('click'); });
    }
    document.querySelector("#btnGuardar").addEventListener("click", escribir);
    document.querySelector("#dragame").addEventListener("dragstart", drag);
    document.querySelector("#dropeame").addEventListener("dragover", dropable);
    document.querySelector("#dropeame").addEventListener("drop", drop);
    document.querySelector("#donde").addEventListener("dragover", dropable);
    document.querySelector("#donde").addEventListener("drop", drop);
    posicion();
    leerInfo();
    dibujar();
})();