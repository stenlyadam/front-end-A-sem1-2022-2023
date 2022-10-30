//KELOMPOK BROOKLYN 

function helloWorld()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        },2000);
    })
};

const message = async()=>{
    const msg = await helloWorld();
    console.log(msg);
}
message();

//2
const ambilDataUser = () =>{
    fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((user)=>console.log(user.data))
    .catch((err)=>console.log('Gagal mengambil data ${err.massage}'));
};
ambilDataUser();

//3
const ambilDataUser2 = async()=>{
    try{
        const user = await fetch ("https://reqres.in/api/users");
        console.log(user.data);
        user.forEach((item)=>console.log(item.data.email));
        arr = user.data;
        arr.forEach((item)=>console.log(item.email));
    }catch (err){
        console.log('Error fetching data : ${err.message')
    }
};
ambilDataUser2();

//4
const axios = require("axios");
const ambilDataUser3 = async ()=>{
    try{
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data);
    response.data.forEach(({name})=>console.log(name));
    }catch(error){
        console.log('Error data ${error}');
    }    
};
ambilDataUser3();
