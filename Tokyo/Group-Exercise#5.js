// Rest parameter adalah parameter yang berfungsi sebagai perwakilan nilai yang ditandai dengan "..."
// jadi jika kita menulis kode seperti ini

function text(word1, word2, word3){
console.log(word1, word2, word3); // ini untuk memasukkan fungsi
};
    
text ("alpha", "beta", "gamma");
    
// kita bisa mempersingkatnya menjadi seperti ini
function text(...words){
console.log(words); // ini untuk memasukkan fungsi
};
    
text ("alpha", "beta", "gamma");
    
// Rest parameter ini juga bisa dibuat dibagian akhir dalam sebuah parameter seperti dibawah ini
function text(words1, words2, ...words){
console.log("kata pertama: ",words1);
console.log("kata kedua: ",words2);
console.log("kata-kata lain: ",...words);// ini untuk memasukkan fungsi
};
    
text ("alpha", "beta", "charlie", "delta", "gamma");
    
//Rest parameter ini hanya bisa ditaruh diakhir karena dia hanya mengambil bagian sisa saja, kalau misalnya dia ditaruh ditengah maka akan menghasilkan error seperti ini
function text(words1, ...words, words2){
console.log(words1);
console.log(...words);
console.log(words2);// ini untuk memasukkan fungsi
};
text ("alpha", "beta", "charlie");


//Spread operator ialah pelebur array jadi beberapa elemen yang berbeda fitur baru ES6 ini dipakai untuk membentangkan nilai array atau lebih tepatnya iterable object jadi beberapa elements.Sp
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

//Spread operator memungkinkan kita menyebarkan atau mengeluarkan elemen yang ada di dalam array atau properti objek ke tempat dimana nilai tersebut diharapkan. Selain array dan objek, operator ini juga bisa digunakan untuk "mengeluarkan" karaketer tunggal di dalam string, tapi ini jarang dilakukan.
let arr1 = [ 1, 2, 3];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

//Spread terlihat persis seperti sintaks sisanya.  Di satu sisi, sintaks spread adalah kebalikan dari sintaks sisanya.  Menyebarkan sintaks "memperluas" sebuah array ke dalam elemen-elemennya, sementara sintaks lainnya mengumpulkan beberapa elemen
let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]


// Spread Operator berlaku pada array dan object

let numbers = [1, 2, 3, 4, 5]

console.log(numbers);//output [1, 2, 3, 4, 5]
console.log(...numbers); //output 1, 2, 3, 4, 5

let numbers = [1, 2, 3, 4, 5]
let numbers2 = numbers;
numbers2.push(6);
console.log(numbers2); //output akan tertambah angka 6 menjadi 1, 2, 3, 4, 5, 6, begitu juga dengan numbers

// Spread operator
let numbers = [1, 2, 3, 4, 5]
let numbers2 = [...numbers];
console.log(numbers2);

//menggabungkan array
//cara lama 
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combineNumbers = numbers1.concat(numbers2);
console.log(combineNumbers);

console.log(person);
console.log({...person}); //menggunakan {} untuk nama person

let person = {
  name: "John",
  age: 34,
};
let person2 = { ...person};
console.log(person);
console.log(person2);

//mengabungkan object
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};

let combineObj = { ...obj1, ...obj2};
console.log(combineObj); //output a: 1, b: 2, c: 3, d: 4

// Destructuring adalah memecah komponen yang kompleks menjadi komponen yang lebih kecil. Hal ini untuk mempermudah dalam pengolahan komponen tersebut sesuai dengan kebutuhan kita.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// Destructuring merupakan fitur pada ES6 yang mempermudahkan untuk mengolah nilai dari array maupun properti dari object pada javascript. Destructure ini sering sekali kita gunakan baik ketika development di client side maupun server.
var arr = ['Hermione', 'Ron', 'Harry', 'Dumbledore'];

// Get the first item
var best = arr[0];

// Get the second item
var worst = arr[1];

//Cut the first two items out of the array
var others = arr.slice(2);

// Destructuring merupakan fitur pada ES6 yang mempermudahkan untuk mengolah nilai dari array maupun properti dari object pada javascript. Destructure ini sering sekali kita gunakan baik ketika development di client side maupun server.
var obj = {
	name: 'Hermione',
	house: 'Gryffindor',
	points: 9640
};

// Destructuring destructing (atau pencocokan pola) adalah cara yang digunakan untuk mengekstrak data dari struktur data (tupel, daftar, catatan) yang mencerminkan konstruksi
let introduction = ["Hello", "I" , "am", "jason"];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting);//"Hello"
console.log(name);//"jason"