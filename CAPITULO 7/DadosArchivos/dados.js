jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE");
    }else{
        console.log("ES MENOR A 3");
        console.log("PERDISTE  ");
    }
}

//crear una funcion lanzar dados, 
//no recibe parametros
//retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //numero entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //esto esta entre 0 y 5
    numeroMultiplicado=aleatorio*6;
    valorDado=numeroEntero+1; // esto esta entre 0 y 6
    
    return valorDado;
}