// Password generator api

console.log(`URL: ${'http://localhost/?lower=true&upper=true&numbers=true&specialchars=true&length=12'}`) // Default URL

const express = require('express')
const app = express()

// Get a random int
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Characters
var Lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Uppercase = []; Lowercase.forEach(element => Uppercase.push(element.toUpperCase()))
var SpecialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";",`"`,"'","<",">",",",".","?"]

// Password generation
app.get('/', function(req, res) {
    var charPool =[]
    var Password = []

    if (req.query.lower == 'true') {
        Lowercase.forEach(element => charPool.push(element))
    }
    if (req.query.upper == 'true') {
        charPool.push(Lowercase.forEach(element => Uppercase.push(element.toUpperCase())))
    }
    if (req.query.numbers == 'true') {
        for (var number; number > 9; number++) {
            charPool.push(number)
        }
    }
    if (req.query.specialchars == 'true') {
        SpecialChars.forEach(element => charPool.push(element))
    }

    for (let i = 0; i < parseInt(req.query.length); i++) {
        Password += charPool[Random(0, charPool.length)]
    }
    res.end(`Password: ${Password.replace(" ", "")}`)

});app.listen(80)
