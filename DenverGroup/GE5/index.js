
// Exercise By Denver Group
//
// Adam, Gregorius Vincent
// Luntungan, Hendra Ucok
// Lahengke, Gabriela
// Kalalo, Sherren Brenda
// Tangkeallo, Yazel Stepano
// Lobbu, Stephen Anthony Timothy


// Rest Parameter, Spread Operator, dan Destructering

/*Pada JavaScript ES6 terdapat Rest Parameter dan Spread Operator. Keduanya sama-sama menggunakan 
elipsis atau tiga buah titik dalam sintaxnya, tetapi memiliki fungsi dan kegunaan yang berbeda.*/

// REST PARAMETERS
    /*  Rest parameter adalah parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan 
        kepada suatu fungsi. Dengan kata lain Rest Parameter menggabungkan semua parameter pada function dalam 
        sebuah Array yang ditandai dengan "...".*/

    /*  Jika kita menjalankan sebuah function dengan output yang banyak, dan paramternya hanya 1 dan tanpa
        rest parameter, maka hanya nilai pertama saja yang akan ditampilkan sebagai output.*/

    //Contoh 1--------------------------------------------------------------------------------
    console.log("\n\n Rest Parameter :\n \nContoh 1");
    const day = (nama) => {
       console.log(nama);
     };
    day("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    // output: Sunday
    
    //Contoh 2--------------------------------------------------------------------------------
    /*  Jika pada kasus diatas kita menggunakan rest parameter, maka semua nilai yang dideklarasikan 
        akan dijadikan output menggunakan array.*/
    console.log("\nContoh 2");
    const days = (...name) => {
        console.log(name);
    };
    days("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    // output: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    //Contoh 3--------------------------------------------------------------------------------
    console.log("\nContoh 3");
    const denver = (...integer) => {
        console.log("\n",integer)
    }
    denver(2*1, 2*2, 2*3, 2*4)

    //Contoh 4--------------------------------------------------------------------------------
    console.log("\nContoh 4");
    /*  rest parameter ditaruh di parameter terakhir (rest parameter tidak bisa di taruh di 
        tengah-tengah parameter)*/
    const dennver = (odd1, odd2, ...odds) => {
        console.log("\npertama :   ",odd1)
        console.log("kedua :     ",odd2)
        console.log("other :     ",odds, "\n")
    }
    let counts=[5]
    for (let i = 0; i <= counts.length; i++) {
     if (counts[i]%2 == 1 ){
         counts = counts[i]; }
    }
    console.log(dennver(counts=[1],[3],[5],[9],[7],[11]))
    
    //Contoh 5--------------------------------------------------------------------------------
    console.log("\nContoh 5");
    function text(word1, word2, word3){
        console.log(word1, word2, word3); // ini untuk memasukkan fungsi
    };
    text ("brenda", "gebby", "den");
    // kita bisa mempersingkatnya menjadi seperti ini
    function text(...words){
        console.log(words); // ini untuk memasukkan fungsi
    };
    text ("brenda", "gebby", "den");

    //Contoh 6--------------------------------------------------------------------------------
    console.log("\nContoh 6");
    // Rest parameter ini juga bisa dibuat dibagian akhir dalam sebuah parameter seperti dibawah ini
    function text(words1, words2, ...words){
        console.log("kata pertama : ",words1);
        console.log("kata kedua : ",words2);
        console.log("kata-kata lain : ",...words);// ini untuk memasukkan fungsi
    };
    text ("brenda", "gebby", "hendra", "aca", "talita");
    //Rest parameter ini hanya bisa ditaruh diakhir karena dia hanya mengambil bagian sisa saja, kalau misalnya dia ditaruh ditengah maka akan menghasilkan error seperti ini
    /*function text(words1, ...words, words2){
        console.log(words1);
        console.log(...words);
        console.log(words2);    // ini untuk memasukkan fungsi
    };
    text ("brenda", "gebby", "hendra");*/

    //Contoh 7--------------------------------------------------------------------------------
    console.log("\nContoh 7");
    const myName = (...params) => {
        console.log(params);
    };
    myName("nama", "saya", "joni");

    //Contoh 8--------------------------------------------------------------------------------
    console.log("\nContoh 8");
    let myname = (a, b, ...params) => {
       console.log(a,b,...params);      
    };
    myname("nama", "saya", "adalah", "joni");

    

//SPREAD OPERATION
    /*operator spread memungkinkan kita untuk memecah sebuah array menjadi elemen-elemen pembentuk 
    array tersebut. Spread operator juga dapat digunakan untuk menambahkan item ke array serta 
    menggabungkan array atau objek. operator spread sangat berguna untuk melakukan berbagai task 
    dalam javaScript, seperti menyalin array, menggabungkan atau mengkombinasikan array, menggunakan 
    fungsi math, menggunakan array sebagai argumen, menambahkan item dalam list, menambahkan state 
    dalam React, menggabungkan objek, dan konvert NodeList menjadi array*/ 
    
    console.log("\n\n\n Spread Operation :\n");

    //Copying an array
    console.log("\nContoh 1");
    console.log("Copy  :");
    let satu = ['ha','lo', ' gu','ys' ]
    let dua = [...satu]
    console.log(dua)

    //Copying an array dan tambahkan nilai/element
    console.log("\nContoh 2");
    console.log("Copy and add Array :");
    const nomor1 = [1,2,3]
    const nomor2 = [nomor1, 4,5,6]
    console.log(nomor2);

    //Passing elements of the array as arguments to the Math Object
    console.log("\nContoh 3");
    console.log("Passing elements :");
    let bilangan = [2,4,500,-1,0,-500];
    console.log(Math.min(...bilangan));

    /*Note: Operator spread hanya efektif bila digunakan dalam array 
    literals, function call, atau objek properti yang diinisialisasi.*/


//Destructuring
    /*Destructuring merupakan fitur pada ES6 yang mempermudahkan untuk mengolah 
    nilai dari array maupun properti dari object pada javascript. dengan kata lain
    Destructuring memecah komponen yang kompleks menjadi komponen yang lebih kecil.*/
    
    // Destructuring objek: Destructuring adalah memecah komponen yang kompleks menjadi 
    // komponen yang lebih kecil. Hal ini untuk mempermudah dalam pengolahan komponen 
    // tersebut sesuai dengan kebutuhan. Dengan adanya destructuring object, kita dapat 
    // lebih mudah dalam mengolah properti objek dan mendapatkan value dari objek tersebut. 
    // Selain syntaxnya yang ringkas dan mudah dipahami, kita dapat menghindari typo dalam 
    // pemecahan struktur objek.

    console.log("\n\n\n Destructuring :\n \nDestructuring Object\n \nContoh 1");
    const book = {
        "title": "Manusia Setengah Salmon",
        "author": "Raditya Dika",
        "publisher": {
            "name": "Gagas Media",
            "address": "Jakarta Selatan"
        }
    }
    const {title, author, publisher:{name, address}} = book;
    console.log(title, author, name, address);

    //-----------------------------

    //without Destructuring: 
    console.log("\nContoh 2");
    let kelas = {
        mahasiswa: 30,
        matakuliah: "Front-End"
    }    
    let mahasiswa = kelas.mahasiswa
    let matakuliah = kelas.matakuliah

    console.log(mahasiswa)
    console.log(matakuliah)

    //with Destructuring:
    let kelas2 = {
        mahasiswa2: 50,
        matakuliah2: "Front-End Develop"
    }    
    let {mahasiswa2, matakuliah2} = kelas2
    console.log(mahasiswa2)
    console.log(matakuliah2)



    // Default value saat melakukan objec destructuring
    // default value pada setiap propertynya. berikut contohnya :
    /* cara ini bisa digunakan, ketika property yang kita panggil tidak ada didalam object tersebut, 
    tetapi kita sudah menggunakan default value untuk mencegah agar nilai undefined tidak muncul. */

    console.log("\nContoh 3");
    const data = {
        nama: 'Ronaldo',
        umur: 35
      }
      const { status = 'sudah menikah' } = data;
      console.log(status); // sudah menikah



    // ----------------------------------------------------------------------------
        
    /*Destructuring Array: Destructuring adalah cara yang efisien untuk ekstrak beberapa nilai data
      yang disimpan dalam array. Saat mendestruktur array, kita menggunakan posisi indeks dalam sebuah array.*/
    
    /*  Destructuring Array serupa dengan destructuring object. Jika objek menggunakan 
        tanda kurung kurawal {} sedangkan array menggunakan tanda kurung siku []  */
    console.log("\n\nDestructuring Array\n \nContoh 1");
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
    const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
    console.log(firstFood);
    console.log(secondFood);
    console.log(thirdFood);
    console.log(fourthFood);

    //---------------------------------------------------------------------

    //Dengan array destructuring assignment kita bisa menukar nilai variabel dengan mudah dan tentu tanpa membuat variabel extra.  
    console.log("\nContoh 2");
    let a = 1;
    let b= 2;
    console.log("Sebelum swap");
    console.log("Nilai a : " + a);
    console.log("Nilai b : " + b);
    [a, b] = [b, a]
    console.log("Setelah swap");
    console.log("Nilai a : " + a);
    console.log("Nilai b : " + b);





    