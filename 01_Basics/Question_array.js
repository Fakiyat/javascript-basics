/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1,2,3,4,5]
             // nums = [1,4,9,16,25]
//code here

const squared = nums.map(function(num){
    return num * num
})
console.log(squared)

let time = [2,3,4,5,6]

let multiply = time.map(ply => ply * ply)

console.log(multiply)


console.log ("0 === [0]");






/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

 const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
} )
console.log(capitalized)

// while using Arrow function => we dont type ({return}),,,, we type (name => name[0].toUpperCase() )
let things = ["bat","ball","kite","tape","mouse"]

let capitalfirstletter = things.map(firstletter => firstletter[0].toUpperCase() + firstletter.slice(1) )

console.log(capitalfirstletter)















/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

 const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const paragraph = pokemon.map(parag => `<p> ${parag} </p>`)

console.log(paragraph)


let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

let daysinweek = week.map(daysinweek => `<p>${daysinweek}</p>`)
console.log(daysinweek); 