//array

let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

//1
console.log("1");
for(i=0; i<people.length; i++)
{
    console.log(people[i]);
}

//2
console.log("2");
people.forEach(function(data)
{
    console.log(data);
});

//3
console.log("3");
people.shift();
console.log(people)

//4
console.log("4");
people.pop();
console.log(people);

//5
console.log("5");
people.unshift("Matt");
console.log(people);

//6
console.log("6");
people.push("Perkins");
console.log(people);

//7
console.log("7");
for(i=0; i<people.length; i++)
{
    if(people[i]=='mary')
    {
        break;
    }console.log(people[i]);
}

//8
console.log("8");
let peopleSlice = people.slice(2);
console.log(peopleSlice);

//9
console.log("9");
people.splice(2, 1 , "Elizabeth", "Artie" );
console.log(people);

//10
console.log("10");
let withBob = people;
withBob = "bob";
console.log(withBob);

// let withBOb2 = people.concat('Bob')
// console.log(withBob2);



//object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
// console.log(programming);

//1
console.log("1");
programming.languages.push("go");
console.log(programming);

//2
console.log("2");
programming['difficulty'] = 7;
console.log(programming);

//3
console.log("3");
delete programming.jokes;
console.log(programming);

//4
console.log("4");
programming.isFun = true;
console.log(programming);

//5
programming.languages.map(function(item, index){

    console.log(`${index} - ${item}`);
})