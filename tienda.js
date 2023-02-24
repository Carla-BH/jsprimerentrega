function datosDelComprador(){
    let nombre = prompt("Ingresa tu nombre")
    let apellido = prompt("Ingresa tu apellido")
    let dni = prompt("Ingresa tu DNI")
    let direccionDeEntrega = prompt("Ingresa la direccion de entrega")    
}
window.addEventListener("load",function(){
function eleccionProducto(){
    let sumaTotal = 0;
    let seguirComprando = true
    while(seguirComprando){ 
        let productoSeleccionado = parseInt(prompt("seleccione un producto 1:Combo Semillas,2:Perlita,3:Rociador,4:Sustrato,5:Semillas Cherry Italiano,6:Semillas Espinaca,7:Semillas Rabanitos,8:Semillas Cebolaa,9:Semillas Zapallito,10:Semillas Rucula,11:Semillas Morron,12:Set Palitas"))
        alert("Su compra total es de " + sumaTotal);
        switch (productoSeleccionado){
            case 1:
                sumaTotal = sumaTotal+899
            break;
            case 2: 
                sumaTotal = sumaTotal+599
            break;
            case 3: 
                sumaTotal = sumaTotal+399
            break;
            case 4: 
                sumaTotal = sumaTotal+499
            break;
            case 5: 
                sumaTotal = sumaTotal+499
            break;
            case 6: 
                sumaTotal = sumaTotal+499
            break;
            case 7: 
                sumaTotal = sumaTotal+499
            break;
            case 8: 
                sumaTotal = sumaTotal+399
            break;
            case 9: 
                sumaTotal = sumaTotal+499
            break;
            case 10: 
                sumaTotal = sumaTotal+499
            break;
            case 11: 
                sumaTotal = sumaTotal+499
            break;
            case 12: 
                sumaTotal = sumaTotal+1299
            break;
            default:
                alert("Usted ha ingresado un producto inexistente")
            break;
        }
    }
}
alert("El total hasta el momento es de" + sumaTotal)
let seleccionSeguirComprando = prompt( "Quiere seguir comprando? 1:SI,  2:NO")
if(seleccionSeguirComprando !== 1){
    seguirComprando = false;
}

})  