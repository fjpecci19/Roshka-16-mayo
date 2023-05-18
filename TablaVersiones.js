function mostrar1(){
    var textoculto = document.getElementById("archivoculto")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar2(){
    var textoculto = document.getElementById("archivoculto2")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar3(){
    var textoculto = document.getElementById("archivoculto3")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar4(){
    var textoculto = document.getElementById("detalleoculto")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar5(){
    var textoculto = document.getElementById("detalleoculto2")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar6(){
    var textoculto = document.getElementById("detalleoculto3")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar7(){
    var textoculto = document.getElementById("configuracionoculta")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar8(){
    var textoculto = document.getElementById("configuracionoculta2")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar9(){
    var textoculto = document.getElementById("configuracionoculta3")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar10(){
    var textoculto = document.getElementById("configuracionoculta4")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar11(){
    var textoculto = document.getElementById("configuracionoculta5")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar12(){
    var textoculto = document.getElementById("configuracionoculta6")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar13(){
    var textoculto = document.getElementById("búsqueda")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar14(){
    var textoculto = document.getElementById("búsqueda2")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function mostrar15(){
    var textoculto = document.getElementById("búsqueda3")
    if(textoculto.style.display === "none"){
        textoculto.style.display = "block"
    }else{
        textoculto.style.display = "none"
    }
}

function toggleSideboard() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

function toggleDesplegable() {
    var desplegable = document.querySelector(".desplegable");
    var contenido = document.getElementById("contenidoDesplegable1");
    var flecha = desplegable.querySelector(".flecha");
  
    desplegable.classList.toggle("desplegado");
    contenido.style.display = (contenido.style.display === "none") ? "block" : "none";
    flecha.style.transform = (desplegable.classList.contains("desplegado")) ? "rotate(0deg)" : "rotate(270deg)";
}

function toggleDesplegable2() {
    var desplegable = document.querySelector(".desplegable2");
    var contenido = document.getElementById("contenidoDesplegable2");
    var flecha = desplegable.querySelector(".flecha");
  
    desplegable.classList.toggle("desplegado");
    contenido.style.display = (contenido.style.display === "none") ? "block" : "none";
    flecha.style.transform = (desplegable.classList.contains("desplegado")) ? "rotate(0deg)" : "rotate(270deg)";
}

function toggleDesplegable3() {
    var desplegable = document.querySelector(".desplegable3");
    var contenido = document.getElementById("contenidoDesplegable3");
    var flecha = desplegable.querySelector(".flecha");
  
    desplegable.classList.toggle("desplegado");
    contenido.style.display = (contenido.style.display === "none") ? "block" : "none";
    flecha.style.transform = (desplegable.classList.contains("desplegado")) ? "rotate(0deg)" : "rotate(270deg)";
}
    