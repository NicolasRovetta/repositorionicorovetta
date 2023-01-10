/**
 document.getElementById('boton').onclick = function () {
       console.log("Capturamos el momento click");
       document.getElementById("demo").innerHTML = "Estamos probando evento en JS"; 
}

document.addEventListener('click', function(){
       console.log("Hola mundo desde EventListener");
       document.getElementById("demo").innerHTML = "Estamos probando evento en JS";
        
});
*/

document.getElementById('boton').addEventListener( 'click' , function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando evento en JS";
     
});

document.getElementById('boton_color').addEventListener('click' , function () {
     document.body.style.backgroundColor = 'red';
});

document.getElementById('boton_default').addEventListener('click' , function () {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click' , function () {
    document.getElementById("demo").style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
  for (let i = 0; 1 < collection.length; i++) {
    collection[i].style.backgroundColor = "green";    
  }
