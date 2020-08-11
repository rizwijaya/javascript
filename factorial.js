function factorialize(num) {
  for(var n = 1; num > 0; num --) {     //inialisasi nilai n = 1 dan melakukan loop
    n *= num;
  }
  return n;   //mengembalikan ke n
}

var cetak = factorialize(5);    //input 5
console.log(cetak);
