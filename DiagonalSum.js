function hitungJumlahDiagonal(matriks) {
  let total = 0;
  let ukuran = matriks.length;

  for (let i = 0; i < ukuran; i++) {
    // Diagonal utama
    total += matriks[i][i];

    // Diagonal sekunder
    let j = ukuran - 1 - i;
    if (i != j) {
      total += matriks[i][j];
    }
  }

  return total;
}

// Tes fungsi
let matriks1 = [
  [8, 2, 7],
  [4, 9, 1],
  [5, 3, 6],
];

let matriks2 = [
  [12, 3, 4, 8],
  [7, 15, 11, 2],
  [9, 6, 14, 5],
  [1, 10, 13, 16],
];

console.log("Hasil matriks 3x3:", hitungJumlahDiagonal(matriks1)); //Hasil 35
console.log("Hasil matriks 4x4:", hitungJumlahDiagonal(matriks2)); //Hasil 83