let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//add languange "Go"
programming.languages.push("Go")

//change difficulty to 7
programming.difficulty = 7

//using delete keyword
delete programming.jokes

//add new key 'isFun'
programming.isFun = true 

//map()
programming.languages 

console.log (programming)