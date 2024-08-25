function hitungDiagonal(m) {
  let t = 0;
  let p = m.length;
  
  for (let i = 0; i < p; i = i + 1) {
    t = t + m[i][i];
    
    let k = p - 1 - i;
    if (i != k) {
      t = t + m[i][k];
    }
  }
  
  return t;
}

// Contoh penggunaan
let m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Tampilkan hasil
console.log("Hasil Matrik 1 :  ", hitungDiagonal(m1)); //Hasil 25
console.log("Hasil Matrik 2 :  ",hitungDiagonal(m2)); //Hasil 68