//Nama Anggota kelompok Denver:
// Adam, Gregorius Vincent
// Lahengke, Gabriela
// Kalalo, Sherren Brenda
// Luntungan, Hendra Ucok
// Tangkeallo, Yazel Stepano
// Lobbu, Stephen Anthony Timothy


//No 1
function helloWorld() {
     return new Promise((resolve) => {
         setTimeout(() =>{
             resolve ("Hello World!");
         }, 2000);
     })
};
async function messages() {
   let msg = await helloWorld();
    console.log(msg);
}
  
messages();

//No 2
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
        .then((output) => output.json())       
        .then((users) => console.log(users.data)) 
        .catch((err) => console.log(`Gagal menampilkan Data: ${err.message}`)) 
}
ambilDataUser();

//No 3
let ambilDataUserAsync = async() => {
  try {
    let output = await fetch("https://reqres.in/api/users");
    let users = await output.json();
    console.log(users.data);
  } 
  catch (err) {
    console.log(`Gagal menampilkan Data:  ${err.message}`);
  }
};
ambilDataUserAsync();

//No 4
let axios = require("axios");
let ambilDataUserAxios = async() => {
  try {
    let output = await axios.get("https://reqres.in/api/users");
    console.log(output.data);
  } catch (error) {
    console.log(`Gagal menampilkan Data: ${error}`);
  }
};
ambilDataUserAxios();


//Test 1 2 