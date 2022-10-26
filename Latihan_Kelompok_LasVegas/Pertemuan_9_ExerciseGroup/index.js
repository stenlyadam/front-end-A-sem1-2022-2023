// //Rest, Destruct, Spread
// //Rest Parameter
// /*rest parameter berfungsi untuk menggabungkan array pada satu parameter yang mewakili nilai yang diberikan kepada suatu fungsi*/
//Contoh 1
const example1 = (...args) => {
  //dengan ...args maka kita mengambil semua nilai pada callback function
  return args;
};
console.log(example1(12, 11, 34, 55, 66, 75, 78));

//Contoh 2
const contoh3 = (...paramss) => {
  let total = 0;
  for (const i of paramss) total += i; //menjumlahkan semua nilai pada parameter
  // for (const i of paramss) total -= i; //mengurangkan semua nilai pada parameter
  return total; // print total
};
console.log(contoh3(10, 5, 4, 7, 2));

//Contoh 3
const contoh2 = (number1, ...myNumbers) => {
  //rest parameter diletakkan pada paling akhir, karena nantinya akan berisi sisa
  // return myNumbers; // print selain nomor pertama
  return `Nomor Pertama = ${number1}, Sisa = ${myNumbers}`; // print nomor pertama dan sisa
};
console.log(contoh2(1, 2, 3, 4, 5, 6, 7));

//Spread Parameter dan Destruct
//Spread parameter memungkinkan kita menyalin array dan objek ke array dan objek lain
//Destruct yaitu kita menstruktur lagi element dalam array atau objek dan menyimpan ke variabel lain
//Contoh 1
const ganjil = [1, 3, 5, 7, 9];
const genap = [2, 4, 6, 8, 10];
const gabunganTanpaSpread = [ganjil, genap]; //digabung tanpa spread
console.log(gabunganTanpaSpread);
const gabungan = [...ganjil, ...genap];
console.log(gabungan); //Menggabungkan dengan spread

//Contoh 2
function cthSpread(param1, param2, param3, ...params) {
  return param1 + " " + param3;
}
const kata = ["Hello", "Hai", "World", "Dunia"];
console.log(cthSpread(...kata));

//Contoh 3  kombinasi dan destruc
const newArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const [satu, tiga, ...rest] = newArray;
console.log(`Index pertama: ${satu}, index kedua : ${tiga}, Sisanya: ${rest}`); //destruc element dalam array

//Contoh 4 destruc
const arr = ["Andre", "Ahmadan", "Putra", "Putri", "Joshua"];
const [leader, coLeader, ...member] = arr; //melakukan element destruc dalam array
console.log(leader); //memanggil element yang sudah didestruc

//Contoh 5  kombinasi objek
const identitas1 = {
  nama: "Yunyun",
  asal: "Manado",
  status: "kariawan",
};
const identitas2 = {
  marga: "Lair",
  tahunLahir: 2001,
  status: "mahasiswa",
};

const identitas = { ...identitas1, ...identitas2 }; //Menggabungkan identitas1 dan identitas2 dan jika terdapat element objek yang sama maka akan diganti dengan nilai parameter paling akhir
console.log(identitas);

//Contoh 6 Destruct objek
const profil = {
  nama: "Timothy",
  alamat: "Bitung",
  umur: "20",
};
let { nama = name, umur = age } = profil; //Destruct objek dengan mengganti nama property dalam objek
console.log(nama);
console.log(umur);

const example11 = (...parametersss) => {
  const parameters1 = parametersss[parametersss.length - 1];
  //dengan ...args maka kita mengambil semua nilai pada callback function
  return parameters1;
};
console.log(example11(1129, 11, 8));

// let example122 = [1, 2, 3, 2, 3, 2, 3, 3, 9012];
// console.log(example122[example122.length - 1]);
