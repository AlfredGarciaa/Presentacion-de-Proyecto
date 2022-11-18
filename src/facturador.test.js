//////////////////        D E M O   //////////////////
import {sumar, cobrarAddons, tipoPlan, 
        validarVigencia, totalCosto, accesoAddon} from "./facturador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

//////////////////        P R O Y E C T O   //////////////////
describe("PRIMERA PRUEBA UNITARIA", () => {
  it("deberia devolver la tarifa del Plan correcto al usuario", () => {
    let categoria = "plan M a medida";
    let addon = "datos XS";
    expect(cobrarAddons(categoria, addon)).toEqual(10);
  });
});

describe("SEGUNDA PRUEBA UNITARIA", () => {
  it("deberia devolver la tarifa por minuto de horario normal del Plan Prepago al usuario", () => {
    let categoria = "prepago_familia";
    expect(tipoPlan(categoria)).toEqual(1.70);
  });
});

describe("TERCERA PRUEBA UNITARIA", () => {
  it("deberia devolver el tiempo de vigencia disponible al usuario", () => {
    let inicio = "18/11/2022";
    let fin = "30/11/2022";
    expect(validarVigencia(inicio, fin)).toEqual(12);
  });
});

describe("CUARTA PRUEBA UNITARIA", () => {
  it("deberia devolver el monto total de sus servicios al usuario", () => {
    let categoria = "plan L a medida";
    let addon = "datos XXl";
    let addon_video = "you tube";
    expect(totalCosto(categoria, addon, addon_video)).toEqual(553);
  });
});

describe("QUINTA PRUEBA UNITARIA", () => {
  it("deberia devolver confirmacion de acceso al usuario", () => {
    let categoria = "plan S a medida";
    expect(accesoAddon(categoria)).toEqual(true);
  });
});
//////////////////        D E M O   //////////////////
import facturas from "./facturador.js";

let factura = new facturas();

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(factura.sumar(3, 2)).toEqual(5);
  });
});

//////////////////        P R O Y E C T O   //////////////////
describe("PRIMERA PRUEBA UNITARIA", () => {
  it("deberia devolver la tarifa del Plan correcto al usuario", () => {
    let categoria = "plan M a medida";
    let addon = "datos XS";
    expect(factura.cobrarAddons(categoria, addon)).toEqual(10);
  });
});

describe("SEGUNDA PRUEBA UNITARIA", () => {
  it("deberia devolver la tarifa por minuto de horario normal del Plan Prepago al usuario", () => {
    let categoria = "prepago_familia";
    expect(factura.tipoPlan(categoria)).toEqual(1.70);
  });
});

describe("TERCERA PRUEBA UNITARIA", () => {
  it("deberia devolver el tiempo de vigencia disponible al usuario", () => {
    let inicio = "18/11/2022";
    let fin = "30/11/2022";
    expect(factura.validarVigencia(inicio, fin)).toEqual(12);
  });
});

describe("CUARTA PRUEBA UNITARIA", () => {
  it("deberia devolver el monto total de sus servicios al usuario", () => {
    let categoria = "plan L a medida";
    let addon = "datos XXl";
    let addon_video = "you tube";
    expect(factura.totalCosto(categoria, addon, addon_video)).toEqual(553);
  });
});

describe("QUINTA PRUEBA UNITARIA", () => {
  it("deberia devolver confirmacion de acceso al usuario", () => {
    let categoria = "plan S a medida";
    expect(factura.accesoAddon(categoria)).toEqual(true);
  });
});
