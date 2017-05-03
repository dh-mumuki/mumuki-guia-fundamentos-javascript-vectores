Entonces, tenemos que repetir la operación de acumular varias veces, una por cada elemento del array. ¡Digamos hola (nuevamente) al `for...of`!

```javascript
function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let mes of unPeriodo) {
    sumatoria = sumatoria + mes;
  }
  return sumatoria;
}
```

Como ves, el `for...of` nos permite visitar y hacer algo con cada elemento de un array; en este caso, estaremos visitando cada `mes` de `unPeriodo`. 

> ¿Aún no te convenciste? Probá las siguientes expresiones en la consola:
>
> * `gananciaTotal([])`
> * `gananciaTotal([100])`
> * `gananciaTotal([100, 2])`
> * `gananciaTotal([2, 10, -20])`
> * `gananciaTotal([2, 10, -20, 0, 0, 10, 10])`



