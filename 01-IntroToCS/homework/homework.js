'use strict';

function BinarioADecimal(num) {
   var dec=0;
   for(var i=0;num.length;i++){
      dec+=num[i]*2**(num.length-1-i)
   }
   return dec;
}

function DecimalABinario(num) {
   var bin='';
   while(num>=1){
      bin+=(num%2);
      num=Math.floor(num/2);
   }
   return bin;
}

console.log(BinarioADecimal('1100011'))
console.log(DecimalABinario(99))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
