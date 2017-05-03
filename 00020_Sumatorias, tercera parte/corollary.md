:clap:  ¡Bien hecho!

Si seguimos repitiendo este patrón, veremos que una sumatoria de **N** elementos siempre arranca igual (let sumatoria = 0), y termina igual (devolviendo la variable local sumatoria).

Y lo que _se repite_, **N** veces, son las acumulaciones

```javascript
function gananciaTotalN(unPeriodo) {
  let sumatoria = 0; // esto siempre está
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2]; //se repite N veces, de 0 a la última posición
  //... etc
  return sumatoria; //esto siempre está
}
```

Entonces, tenemos que repetir la operación de sumar varias veces, una por cada elemento del array... ¿te suena a algo conocido?