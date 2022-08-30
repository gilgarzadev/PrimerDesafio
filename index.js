let chico = "chico"
let grande = "grande"
let sedan = "sedan"
let pickup = "pickup"
let precioChico = "100"
let precioAutoGrande = "150"
let precioSedan = "125"
let precioPickup = "135"
let precioBasicoChico = "35"
let precioBasicoCompleto = "65"
let precioBasicoGrande = "150"
let precioCompletoGrande = "100" 
let subtotal = parseInt(precioChico) + parseInt(precioBasicoChico);  
let subtotal2 = parseInt(precioChico) + parseInt(precioBasicoCompleto);
let subtotal3 = parseInt(precioAutoGrande) + parseInt(precioBasicoGrande);
let subtotal4 = parseInt(precioAutoGrande) + parseInt(precioCompletoGrande);

alert("Bienvenido al Autolavado el Parcero");

let cliente = prompt("Cual es su nombre");
    alert("Bienvenido " + cliente);
let visita = prompt("Deseas lavar tu auto?" );
if (visita === "si"){
    alert("ok!")
}else{
    alert("Muchas Gracias por su visita.")
}

let tipoAuto = prompt("¿Que tipo de auto es... chico, grande, sedan o familiar?")


function lavadoAuto(){
    if (chico === tipoAuto){
        let pedido = parseInt(prompt("¿Que tipo de lavado quieres? : \n 1 : Basico \n 2 : Completo"))
        switch (pedido){
            case 1:
                alert("Se ha seleccionado Basico")
            break;

            case 2:
                alert("Se ha seleccionado Completo")
        }

        if(pedido === 1){
            alert("El subtotal es $" + subtotal)
        }else{
            alert("El subtotal es $" + subtotal2)
        }
        
    }else if(grande === tipoAuto){
        let pedido = parseInt(prompt("¿Que tipo de lavado quieres? : \n 1 : Basico \n 2 : Completo"))
        switch (pedido){
            case 1:
                alert("Se ha seleccionado Basico")
            break;

            case 2:
                alert("Se ha seleccionado Completo")
        }
        if(pedido === 1){
            alert("El subtotal es $" + subtotal3)
        }else{
            alert("El subtotal es $" + subtotal4)
        }
    }
}

lavadoAuto();

alert("Gracias por su visita!");





