function reverseString(str) {
  return str
    .split("")    //Melakukan split tiap string ke array karakter
    .reverse()    //membalikkan array
    .join("");    //menggabungkan karakter
}
