function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var saldo of unPeriodo) {
    sumatoria += saldo;
  }
  return sumatoria;
}