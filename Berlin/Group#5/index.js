
/*Rest Parameter
Rest Parameter adalah untuk menggabungkan semua paramater pada function ke dalam array. 
Dengan menggunakan Rest Parameter ini dapat membantu kita mendefinisikan function dengan rapi serta 
memberikan parameter yang tidak terbatas pada sebuah function. Berikut cara penggunaannya.

*/
// mendeklarasi variabel absent itu variabel tersebut menanmpung semua parameter kemudian ditampilkan
const absent = (... ai)=>{

    console.log("banyak alpa",ai)
}
absent("Vito","Mhoty","Vicky","Ezra","Gloria","Angel");

//variabel a1 a2 a3 itu variabel yang berdiri sendiri dimana variabel tersebut tidak 
//akan digabunggkan dengan variabel aa 
const absent2 = (a1, a2, a3, ... aa)=>{
    //menampilkan siapa yanng hadir
    console.log("Yang Hadir",a1);
    console.log("Yang Hadir",a2);
    console.log("Yang Hadir",a3);
    console.log("Yang Tidak Hadir",aa);
}
absent2("Vito","Mhoty","Vicky","Ezra","Gloria","Angel");

/*Spread Operator
-Spread Operator adalah untuk membagi elemen array atau properti pada objek, 
sehingga elemen array dapat ditambahkan/dimasukan ke dalam array baru. 
-membagi properti pada object sehingga element array ditambahkanke array baru
-dalam spread operator ini output tidak lagi array, tapi menjadi individu
-spread ini bisa dibilang memperluas element
-spread operator ini membagikan element berbentuk array menjadi element tunggal
*/
//mendeklarasi function sum
function sum (a,b,c){
    return a * b + c;
}
const angka = [25,50,100];
// menampilkan output yang sudah dimasukan dalam variabel yang ditentukan 
console.log(sum(...angka))
/*
Destructuring adalah memecah komponen yang kompleks menjadi komponen yang lebih kecil. 
Hal ini untuk mempermudah dalam pengolahan komponen tersebut sesuai dengan kebutuhan kita. 
Destructuring dapat melakukan hal yang sama seperti kode diatas, 
namun dengan pendekatan yang lebih mudah dipahami dan lebih ringkas.
*/
//Destrukturisasi Array
//melakukan destrukturisasi array
let group = ["Vito","Mhoty","Vicky","Ezra","Gloria","Angel"];

let [group1, group2, group3, group4, group5, group6] = group;

console.log(group1);
console.log(group2);
console.log(group3);
console.log(group4);
console.log(group5);
console.log(group6);

// menggukan koma kosong untuk melewati element kedua dan keempat
let [NamaGroup, , Matkul, , Namadosen] = ["Berlin", "A","Front-End web development","B", "Stanly Adam"];
console.log("Nama Group : ",NamaGroup); 
console.log("Makul : ",Matkul); 
console.log("Nama Dosen : ",Namadosen); 

//Destrukturisasi objek
let Group = {
    namaGroup : "berlin",
    anggota : 6,
    AnggotaTidakHadirSemua: false
  };
  
  let namaGroup = Group.namaGroup;
  let anggota = Group.anggota;
  let AnggotaTidakHadirSemua = Group.AnggotaTidakHadirSemua;
  
  console.log("Nama Group :",namaGroup); 
  console.log("Anggota :",anggota); 
  console.log("Anggota tidak hadir semua :",AnggotaTidakHadirSemua,"Anggota Hadir Semua"); 
  console.log("Anggota dalam group berlin hadir semua");