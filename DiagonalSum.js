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
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matriks2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log("Hasil matriks 3x3:", hitungJumlahDiagonal(matriks1)); // Hasil 25
console.log("Hasil matriks 4x4:", hitungJumlahDiagonal(matriks2));// Hasil 68
