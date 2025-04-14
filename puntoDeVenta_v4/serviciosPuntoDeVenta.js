calcularValorDescuento=function(monto,porcentajeDescuento){
let valorAntesDelDescuento=(monto*porcentajeDescuento)/100;
let valorDescuento=monto-valorAntesDelDescuento;
return valorDescuento;
}

calcularIVA=function(monto){
let valorIva=(monto*15)/100;
return valorIva;
}

calcularSubtotal=function(precio,cantidad){
let totalComprado=precio*cantidad;
return totalComprado;
}

calcularTotal=function(subTotal,descuento,iva){
let valorTotal=subTotal-descuento+iva;
return valorTotal;
}
