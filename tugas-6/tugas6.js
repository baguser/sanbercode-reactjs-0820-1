//soal satu
const luas = (param) => {
    return param * 2 * 3.14;


}

const keliling = (param) => {
    return param * 2 * 3.14
}

console.log(luas(10));
console.log(keliling(10))


console.log('===========')
    //soal dua

let kalimat = 'saya'
let kalimat1 = 'adalah'
let kalimat2 = 'seorang'
let kalimat3 = 'frontend'
let kalimat4 = 'developer'

let string = `${kalimat} ${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4}`

console.log(string)

console.log('===========')

//soal tiga

const newFunction = (firstName, lastName) => {
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

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined)