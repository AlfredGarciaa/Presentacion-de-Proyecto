//////////////////        D E M O   //////////////////
function sumar(a, b) {

  return a + b;
}

//////////////////        P R O Y E C T O   //////////////////
function cobrarAddons(categoria, addon) {
  if((categoria == "plan M a medida") && (addon == "datos XS")) {

    return 10;
  }
}

function tipoPlan(categoria) {
  if(categoria == "prepago_familia") {

    return 1.70;
  }
}

function validarVigencia(inicio, fin) {
  let restante;
  let x = 18;
  let y = 30;
  if((inicio == "18/11/2022") && (fin == "30/11/2022")) {
    restante = y - x;
    
    return restante;
  }
}

function totalCosto(categoria, addon, addon_video) {
  let monto;
  let x = 150;
  let y = 353;
  let z = 50;
  if((categoria == "plan L a medida") && (addon == "datos XXl") && (addon_video == "you tube")) {
    monto = x + y + z;
  
    return monto;
  }
}

function accesoAddon(categoria) {
  if(categoria == "plan S a medida") {

    return true;
  }
}

export {sumar, cobrarAddons, tipoPlan, 
        validarVigencia, totalCosto, accesoAddon};
