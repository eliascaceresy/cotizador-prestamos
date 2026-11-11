export const formatearDinero = valor => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  })

  return formatter.format(valor)
}