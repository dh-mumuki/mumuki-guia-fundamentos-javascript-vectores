¿Lo pensaste?

La función `sumatoriaGananciasSemestre` anterior tiene dos problemas:

1. Es muy repetitiva y tediosa de escribir. ¡Tenemos que hacer muchas sumas a mano!
1. Y no es genérica, sólo sirve para arrays de 6 elementos:

  1. si tiene más de seis elementos, sólo suma los primeros
  2. si tiene menos, devuelve cosas bizarras (¿te acordás cuando te dijimos que si te ibas de índice cosas malas podían ocurrir :stuck_out_tongue: ?)

Lo que nos gustaría es poder sumar de forma genérica a todos los elementos del array, sin importar cuántos haya realmente: queremos una función `gananciaTotal`, que pueda sumar periodos de cualquier tamaño: semetres, cuatrimestres, trimestres, etc. ¡Qué difícil!

> ¿Qué? ¿No nos creés que eso se pueda hacer? ¡Qué poca confianza, che! 
> 
> Nosotros ya hicimos nuestra versión; probala con las siguientes consultas:
> 
>```javascript
>ム gananciaTotal([2, 3])
>ム gananciaTotal([2, 3, 1, 8, 8, -1])
>ム gananciaTotal([])
>```
> Después seguinos para contarte cómo la hicimos :wink:

