// Rocky (movies) random fighter generator

const rocky = ["Rocky Balboa", "Paulie", "Adrian", "Apollo Creed", "Mickey", "Mr. T", "Thunderlips", "Ivan Drago", "Tommy Gunn", "Mason Dixon"]

let randomNumber1 = Math.floor(Math.random() * rocky.length)
let randomNumber2 = Math.floor(Math.random() * rocky.length)

while(randomNumber1 === randomNumber2){
    randomNumber1 = Math.floor(Math.random() * rocky.length)
}

console.log(`Your fighter from the famous Rocky movies is ${rocky[randomNumber1]}!`)
console.log(`Your opponent is... ${rocky[randomNumber2]}!`)
console.log(`Do you think ${rocky[randomNumber1]} will win against ${rocky[randomNumber2]}?`)