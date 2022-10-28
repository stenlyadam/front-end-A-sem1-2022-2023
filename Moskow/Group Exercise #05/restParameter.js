//rest parameter
var obj = {
    namaAwal: "Moskow", //deklarasi variable dan isi nilai dengan string
    namaAkhir: "Widodo",
    nilai : 30
};
var obj2 = { ...obj }; // buat variable baru dan gunakan rest parameter (...) diikuti dengan variable pertama
console.log(obj2);
