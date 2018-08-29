:clap:  ¡Bien hecho!

¿Y si el array tuviera N elementos?

Si seguimos repitiendo este patrón, veremos que una sumatoria de un array siempre arranca igual (var sumatoria = 0), y termina igual (devolviendo la variable local sumatoria).

```javascript
function gananciaTotalN(unPeriodo) {
  var sumatoria = 0; // esto siempre está
  //... etc
  return sumatoria; //esto siempre está
}
```

Lo que cambia son las acumulaciones (`sumatoria = sumatoria + ...`), necesitamos una por cada elemento del array. Dicho de otra forma, tenemos que _visitar_ cada elemento del mismo, sin importar cuántos tenga. Pero, ¿cómo hacerlo? ¿No te suena conocida esta idea de _repetir algo muchas veces_?  

