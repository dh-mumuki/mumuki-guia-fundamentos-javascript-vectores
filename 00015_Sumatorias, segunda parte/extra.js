function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let saldo of unPeriodo) {
    sumatoria += saldo;
  }
  return sumatoria;
}