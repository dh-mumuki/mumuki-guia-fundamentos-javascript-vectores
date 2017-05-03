function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let mes of unPeriodo) {
    sumatoria = sumatoria + mes;
  }
  return sumatoria;
}