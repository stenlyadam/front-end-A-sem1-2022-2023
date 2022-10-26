//Exercise Group By Tokyo 
/*Pontoh, Laurence Julyan
Sakul, Darryl Elisafan
Mangerongkonda, Jason Timothy
Christovel Kaeng, Kevin Ombeng
Manibuy, Vincentius
Limbu, Josua*/
//No.1 using for-loop
let people = ["Greg","Mary","Devon","James"];
    for(let i=0;i<people.length;i++){
        console.log(people[i]);
    };
//No.2 forEach
    people.forEach(function(item){
        console.log(item);
    });
//No.3 remove Greg
    people.shift(); 
    console.log(people);
//No.4 remove James
    people.pop();
    console.log(people);
//No.5 add Matt
    people.unshift("Matt");
    console.log(people);
//No.6 add My Name
    people.push("Tokyo");
    console.log(people);
//No.7  use break keyword to exit loop
    for(let i=0;i<people.length;i++){
            console.log(people[i]);
            if(people[i]==="Mary"){
                break;
            }
}
//No.8 using slice
    console.log(people.slice(2));
//No.9 using the splice command
    let newArray = ["Matt","Mary","Devon","Tokyo"];
    newArray.splice(2,1,"Elizabeth","Artie");
    console.log(newArray);
//No.10  add bob
    let withbob = people.concat("Bob");
    console.log(withbob);


//Object Exercise
let programming = {
languages: ["JavaScript","Python","Ruby"],
isChallenging: true,
isRewarding: true,
difficulty: 8,
jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
     //No.1 Write the command to add the language "Go"
        programming.languages.push("Go");
        console.log(programming);
    //No.2 change the difficulty to the value of 7
        programming ["Difficulty"]=7;
        console.log(programming);
    //No.3 Using the delete keyword
        delete programming.jokes;
        console.log(programming);
    //No.4 write the command to add a new key called isFun and a value of true to the programming object
        programming.isFun = true;
        console.log(programming);
    //No.5 Using a map()
        let newProgramming = programming.languages.map(function(item,index){
                return index+" "+item;
            });
            console.log(newProgramming);
