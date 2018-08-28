Entonces tenemos que repetir la operación de acumular varias veces, una por cada elemento del array. ¡Digamos hola (nuevamente) al `for`!

```javascript
function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var i=0; i<unPeriodo.length; i++) {
    var mes = unPeriodo[i];
    sumatoria = sumatoria + mes;
  }
  return sumatoria;
}
```


> ¿Aún no te convenciste? Nuevamente, probá las siguientes expresiones en la consola:
>
> * `gananciaTotal([])`
> * `gananciaTotal([100])`
> * `gananciaTotal([100, 2])`
> * `gananciaTotal([2, 10, -20])`
> * `gananciaTotal([2, 10, -20, 0, 0, 10, 10])`



