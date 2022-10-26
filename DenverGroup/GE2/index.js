// Exercise By Denver Group
//
// Adam, Gregorius Vincent
// Kalalo, Sheren Brenda
// Lahengke, Gabriela
// Luntungan, Hendra Ucok
// Tangkeallo, Yazel Stepano
// Lobbu, Stephen Anthony Timothy

//Array Exercises
    let people = ["Greg", "Mary", "Devon", "James"];
    // 1
    for(let i =0; i< people.length; i++){
    console.log(people[i]);
    }
    console.log("--------------");

    // 2
    // people.forEach()
    // console.log(people[i])
    people.forEach((Element) => console.log(Element))
    console.log("--------------");

    // 3
    people.shift()
    // console.log(people)

    // 4 
    people.pop()
    // console.log(people)

    // 5
    people.unshift("Matt")
    // console.log(people)

    // 6
    people.push("Denver")
    // console.log(people)

    // 7
    for(let i =0; i< people.length; i++){
        if(i > 1){
            break;
        }
        console.log(people[i]);
    }
    console.log("--------------");

    // 8 
    // people.slice(1);
    console.log(people.slice(1))
    console.log("--------------");

    // 9
    people = ["Matt", "Mary", "Devon", "Denver"];
    people.splice(2,1,"Elizabeth", "Artie");
    console.log(people)
    console.log("--------------");

    // 10
    let withBob = people.concat("Bob")
    console.log(withBob)



//Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//no.1
programming.languages.push("Go");
console.log(programming.languages.push)
//no.2
programming.difficulty = 7;

//no.3
delete programming.jokes;

//no.4
programming.isFun = true;
console.log(programming)


//no.5
//  const names =["Javascript", "Python"];
//  const newProgramming = names.map((name, index) => {
//      return index.toString() + '. ' +name;
//  });
//  console.log(newProgramming);

let newProgramming = programming.languages.map(function(item,index){
    return index+" "+item;
});
console.log(newProgramming);