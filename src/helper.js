export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Cañcula totyal a pagar en base a la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}

export function calcularPlan(plan) {
  let incremento;

  switch (plan) {
    case "basico":
      incremento = 1.2;
      break;
    case "completo":
      incremento = 1.5;
      break;

    default:
      break;
  }
  return incremento;
}
export function obtenrPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
