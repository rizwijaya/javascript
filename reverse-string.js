function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {     //mengubah string ke array, melakukan nested loop array terbalik
    reversedStr += str[i];        //menambahkan elemen array                                
  }
  return reversedStr;
}

var rev = reverseString('hello');   //inputan hello
console.log(rev);
