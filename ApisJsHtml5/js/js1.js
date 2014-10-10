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


(function () {


    var ele = document.querySelectorAll(".dibujo");
  
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.background = "red";
        

        ele[i].addEventListener("click", function () { alert('click'); });
    }

    posicion();

})();