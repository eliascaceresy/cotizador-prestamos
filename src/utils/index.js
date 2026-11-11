export const formatearDinero = valor => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  })

  return formatter.format(valor)
}

export const calcularTotal = (cantidad, plazo) => {
  let total;

  if(cantidad < 10000) {
    total = cantidad * 1.5;
  } else if(cantidad >= 10000 && cantidad < 30000 ) {
    total = cantidad * 1.4;
  } else if(cantidad >= 30000 && cantidad < 60000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  if (plazo == 6) {
    total *= 1.1
  } else if(plazo == 12) {
    total *= 1.2
  } else if(plazo == 24) {
    total *= 1.3
  } else {
    total *= 1.4
  }

  return total;
}