
document.getElementById("boton").onclick = function () {
console.log("Capturamos el evento click");
document.getElementById("demo").innerHTML = "Probando elemento en JS";
}

document.addEventListener ,"click" ,function() {
    console.log("Hola mundo desde EventListener");
}