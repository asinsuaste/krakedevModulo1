saludo=function(){
    //recuperar el valor de la caja de texto nombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto apellido
    let apellido;
    apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto edad
    let edad;
    edad=recuperarInt("txtEdad");
    //recuperar el valor de la caja de texto estatura
    let estatura;
     estatura=recuperarFloat("txtEstatura");
}

//Funcion general para recuperar texto 
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

//Funcion general para transformar un string en valor entero
recuperarInt=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}

//Funcion general para transformar un string en valor Float o decimal
recuperarFloat=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}




