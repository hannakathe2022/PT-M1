'use strict';

function BinarioADecimal(num) {
   var dec=0; //Lleva la suma de los numeros decimales
   for(var i=0;num.length;i++){ //Bucle que recorre la longitud del str
      dec+=num[i]*2**(num.length-1-i) //Formula para obtener los decimales (1x2**n)
   }
   return dec;
}

function DecimalABinario(num) {
   var bin=''; //Srt vacio que almacena los numeros
   while(num>=1){ //Bucle que lleva la condicion del numero minimo de cociente
      bin+=(num%2); // Obtiene el residuo de la division 1 o 0
      num=Math.floor(num/2); // Actualiza el valor de num
   }
   return bin.split().reverse().join();
}

console.log(BinarioADecimal('1100011'))
console.log(DecimalABinario(99))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
