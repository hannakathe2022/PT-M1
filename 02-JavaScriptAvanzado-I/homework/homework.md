# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

La principal diferencia entre declarar una variable con var y directamente asignarle el valor es que al declararla directamente
se genera una vaiable global la cual puede fallar dentro de un contexto de ejecución, también que las variables sin declarar pueden ser
eliminadas y modificadas en un futuro, y ademas las variables declaradas se crean antes de correr el código, en cambio las no declaradas no
se toman en cuenta hasta que el código se ejecuta. 


---------------------------------------------------------------------------------------------------------------------------------------------------------



```javascript
x = 1; //Asignación global directa de la variable x
var a = 5; //Declaración global de la variable a
var b = 10;//Declaración global de la variable b
var c = function (a, b, c) { //Declaración función c, pasa como argumentos variables globales a=5,b=10 y c=ReferenceError despues => a=8,b=9 y c=10
   var x = 10; //Declaración de variable en contexto de ejecución de una función, variable local de función c
   console.log(x); //10
   console.log(a); //8*
   var f = function (a, b, c) { //Declaración de una función f dentro de la función c, pasa como argumentos a=8,b=9 y c=10
      b = a; // Asignación de variable global b=9 y a=8 => a=b=8*
      console.log(b); //8*
      b = c; //Asignación de la variable global b=8 y c=10 => b=c=10*
      var x = 5;//Declaración de variable en contexto de ejecución de una función, varible local de función f
   };
   f(a, b, c); // Llamada de la función f que esta dentro de la función c donde inicialmente a=8, b=9, c=10*
   console.log(b); //9*
};
c(8, 9, 10);// a=8, b=9, c=10
console.log(b); //10*
console.log(x); //1
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



```javascript
console.log(bar); //Undefined
console.log(baz); //ReferenceError*
foo(); // Llamada de la función foo antes de declararla
function foo() { //Declaración de la función foo
   console.log('Hola!'); //Utilidad de la funcion foo: saludar
}
var bar = 1; //Declaración de la variable bar=1
baz = 2; //Asignación de la variable baz de anera global baz=2
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



```javascript
var instructor = 'Tony'; //Declaración de la variable instructor=Tony de manera global
if (true) { //Condición de cumplimiento si es verdad...
   var instructor = 'Franco'; //Instructor=Franco, variable local
}
console.log(instructor); //Franco* (REVISAR FUNCIONAMIENTO)
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



```javascript
var instructor = 'Tony'; //Declaración de la varible instructor=Tony de manera global
console.log(instructor); // Tony
(function () { //Declaración de función (REVISAR FUNCIONAMIENTO)
   if (true) { //Condición de cumplimiento si es verdad...
      var instructor = 'Franco'; //Instructor=Franco, variable local
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



```javascript
var instructor = 'Tony'; //Declaración de la variable instructor=Tony de manera global
let pm = 'Franco'; //Declaración de la variable pm=Franco de manera global
if (true) { //Condición de cumplimiento si es verdad... (REVISAR FUNCIONAMIENTO DE LET)
   var instructor = 'The Flash'; //Declaración de variable instructor=The Flash, de manera local
   let pm = 'Reverse Flash'; //Declaración de variable pm=Reverse Flash, de manera local
   console.log(instructor); //The Flash
   console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash*
console.log(pm); //Franco
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //'9px'
"$" + 4 + 5 //'$9'
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 // Infinity
{}[0] //[object, Object]0 (REVISAR COMO FUNCIONA)
parseInt("09") //9 (parseInt, analiza una cadena para determinar si contiene un numero entero, devuelve todo lo que conenga un decimal o un numero
// o nulo, si hay u decimal se devuelve el entero mas cercano redondeado por abajo)
5 && 2 //2 (REVISAR FUNCIONAMIENTO)
2 && 5 //5 (REVISAR FUNCIONAMIENTO)
5 || 0 //5 (REVISAR FUNCIONAMIENTO)
0 || 5 //5 (REVISAR FUNCIONAMIENTO)
[3]+[3]-[10] //23 (REVISAR FUNCIONAMIENTO)
3>2>1 //False (REVISAR FUNCIONAMIENTO)
[] == ![] //True (REVISAR FUNCIONAMIENTO)
```



--------------------------------------------------------------------------------------------------------------------------------------------------------



> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() { //Declaración de la funcion test
   console.log(a); //Undefined
   console.log(foo()); //Undefined

   var a = 1; //Declaración de la variable despues de llamarla
   function foo() { //Declaración de la función despues de llamarla
      return 2; // Utilidad de la función: devolver 2
   }
}

test(); // a=Undefined* y foo=2 (REVISAR FUNCIONAMIENTO)
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



Y el de este código? :

```javascript
var snack = 'Meow Mix'; //Declaración de variable de manera global

function getFood(food) { //Declaración de función
   if (food) { //Condición la cual se debe cumplir...
      var snack = 'Friskies'; //Declaración de variable local dependiente de una condición
      return snack; // Retorna Friskies variable local, dependiendo de la condición, se genera un contexto de ejecución diferente
   }
   return snack; // Retorna Meow Mix si no se cumple la condición anterior
}

getFood(false); // Undefined (REVISAR FUNCIONAMIENTO)*
```


--------------------------------------------------------------------------------------------------------------------------------------------------------



### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez'; //Declaración de variable global
var obj = { // Declaración de un objeto
   fullname: 'Natalia Nerea', //Declaración de la primera propiedad, variable local, primer contexto de ejecución
   prop: { //Declaración de la segunda propiedad
      fullname: 'Aurelio De Rosa', //Declaración de la primera propiedad dentro de la segunda propiedad, variable local, segundo contexto de ejecución
      getFullname: function () { //Declaración de una función
         return this.fullname; // Retorna la variable local de segundo contexto de ejecución ya que se refiere this=prop, por lo tanto fullname:Aurelio De Rosa
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // Declaración variable de llamada

console.log(test()); //Juan Perez (REVISAR FUNCIONAMIENTO)*
```


-------------------------------------------------------------------------------------------------------------------------------------------------------



### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() { //Declaración función general
   console.log(1); //1
   setTimeout(function () {
      console.log(2); //2
   }, 1000);
   setTimeout(function () {
      console.log(3); //3
   }, 0);
   console.log(4); //4
}

printing(); //1-4-3-2
```
