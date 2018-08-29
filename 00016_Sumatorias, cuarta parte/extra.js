function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var mes of unPeriodo) {
    sumatoria = sumatoria + mes;
  }
  return sumatoria;
}