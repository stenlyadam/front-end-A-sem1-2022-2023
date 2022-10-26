//------------------------------------------------------------------Array-------------------------------------------------------------------------

let people = ["Greg", "Mary", "Devon", "James"];

//1. For looping
for (let i = 0; i < people.length; i++) {
  console.log(people);
}

//2. forEach
let exampleForEach = "";
people.forEach(myFunction);
console.log(exampleForEach);
function myFunction(item, index) {
  exampleForEach += "\n" + index + ": " + item + "\n";
}

//3. Remove First Element (Greg)
people.shift();
console.log(people);

//4. Remove Last Element (James)
people.pop();
console.log(people);

//5. Add First Element (Matt)
people.unshift("Matt");
console.log(people);

//6. Add Last Element (Name)
people.push("Saylendra");
console.log(people);

//7. Make for loop but if console.log Marry break for loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//8. Make copy not include Matt or Maty
let copyPeople = people.slice(1);
console.log(copyPeople);

//9. Use splice and remove Devon and then add Elizabeth and Artie
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10. Make variable withBob and concat with people
let withBob = ["Bob"];
let finalResult = people.concat(withBob);
console.log(finalResult);

//------------------------------------------------------------------Object-------------------------------------------------------------------------
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//1. Menambahkan "GO" ke Array Language
programming.languages.push("GO");
console.log(programming.languages);

//2. Mangganti nilai difficulty dari 8 menjadi 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3. Menhapus propertie jokes dalam object programming
delete programming.jokes;
console.log(programming);

//4. Menambahkan propertie isFun kedalam object programming
programming.isFun = true;
console.log(programming.isFun);

//5. Mapping item dalam properti language
programming.languages = programming.languages.map(myListLang);
console.log(programming.languages);
function myListLang(item, index) {
  return [index, item].join(": ");
}

console.log(programming);
