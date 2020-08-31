//soal satu



console.log('===========')
//soal dua

let kalimat = 'saya'
let kalimat1 = 'adalah'
let kalimat2 = 'seorang'
let kalimat3 = 'frontend'
let kalimat4 = 'developer'

let theString1 = `${kalimat}`
let theString2 = `${kalimat1}`
let theString3 = `${kalimat2}`
let theString4 = `${kalimat3}`
let theString5 = `${kalimat4}`


console.log(theString1)
console.log(theString2)
console.log(theString3)
console.log(theString4)
console.log(theString5)

console.log('===========')

//soal tiga

const newFunction = function literal(firstName, lastName) {
    return {
        fullName: function() {
            console.log(`${firstName}, ${lastName}`)
            return
        }
    }
}

newFunction("William", "Imoh").fullName()


console.log('===========')

//soal empat

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {
    firstName,
    lastName,
    destination,
    occupation,
    spell
} = newObject

console.log(firstName, lastName, destination, occupation)

console.log('===========')

//soal lima

user = (...combined) => {
    console.log(combined)
}
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

user(west, east)
