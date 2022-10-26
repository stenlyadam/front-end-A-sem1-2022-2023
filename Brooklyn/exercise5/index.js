//rest parameters and spread syntax
//Rest parameter
//bagian dasar rest parameter 
function myFunc(a, ...jovan) {
    return jovan;
}
console.log(myFunc(1,2,3,4,5));


//array destructuring (menggunakan rest paramater)
const kelompok1 = ['jovan', 'joni', 'joko', 'joseph', 'jojo'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);


// Spread Operator
//...arrdigunakan dalam pemanggilan fungsi, itu "memperluas" objek yang dapat diubah arrke dalam daftar argumen.Untuk Math.max:
let arr1 = [3, 5, 1];

alert( Math.max(...arr1) );

//sintaks spread dapat digunakan untuk menggabungkan array:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged);

// ringkasan
//Ketika kita melihat "..." dalam kode, itu adalah rest parameter atau sintaks spread.
//Ada cara mudah untuk membedakannya:

//Ketika ... berada di akhir parameter fungsi, itu adalah "rest parameter" dan mengumpulkan sisa daftar argumen ke dalam array.
//Ketika ... terjadi dalam pemanggilan fungsi atau serupa, itu disebut "sintaksis spread" dan memperluas array ke dalam daftar.

//Gunakan pola:

// rest parameter digunakan untuk membuat fungsi yang menerima sejumlah argumen
//Sintaks spread digunakan untuk meneruskan array ke fungsi yang biasanya memerlukan daftar banyak argumen.

//Destructuring
console.log("Destructuring")
let [namaLengkap,,noRegis,jurusan,tingkat]=["wilmore italilpessy","105011910026",,"Sistem Informasi",4]
console.log(namaLengkap)
console.log(noRegis)
console.log(jurusan)
console.log(tingkat)