var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registrar = document.getElementById("registrar");
var textoUsuario = document.getElementById

//--------------funciones--------------

function registroUsuario(){
  let user = prompt("Registra Tu usuario");
  let pass  = prompt("Regitra tu password");
  localStorage.setItem('user', user);
  localStorage.setItem('clave' pass)
}


function loginUsuario(){
    let user = prompt("escribe tu usuario");
    let pass = prompt("escribe password");

    //buscar los datos en el local storage

    if (user == localStorage.getItem(pepe) && pass == localstorage.getItem "123"){
        alert("login exitoso");
        textoUsuario.innerHTML = user;
}
else{
    alert("error en la pagina")
}
}


login.onclick = function () {
loginUsuario();
}
salir.onclick = function () {

}
registrar.onclick = function () {
    registroUsuario();

}

