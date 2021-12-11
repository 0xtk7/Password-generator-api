// Password generator api
// URL: http://localhost/?lower={bool}&upper={bool}&length={int}&numbers={bool}&specialchars={bool}

const express = require('express')
const app = express()

// Get a random int
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Characters
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var Lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Uppercase = []; Lowercase.forEach(element => Uppercase.push(element.toUpperCase()))
var SpecialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";",`"`,"'","<",">",",",".","?"]

function lower() { 
    return Lowercase[Random(0, 26)]
}
function upper() {
    return Uppercase[Random(0, 26)]
}
function numbers() {
    return Numbers[Random(0, 9)]
}
function spec() {
    return SpecialChars[Random(0, SpecialChars.length)]
}

// Password generation
app.get('/', function(req, res) {
    var Length = parseInt(req.query.length)
    while (Length != 0) {
        switch(Random(0,6)) {
            case 0:
                if (req.query.lower = 'true') {
                    res.write(lower(req.query.lower).replace(" ", ""))
                    Length -= 1}
                break
            case 1:
                if (req.query.upper == 'true') {
                    res.write(upper().replace(" ", ""))
                    Length -= 1}
                break
            case 2:
                if (req.query.numbers == 'true') {
                    res.write(numbers().toString().replace(" ", ""))
                    Length -= 1}
                break
            case 3:
                if (req.query.specialchars == 'true') {
                    res.write(spec().toString().replace(" ", ""))
                    Length -= 1}
                break
        }
    }
    res.end()
});

app.listen(80)
