//soal 1
function halo(){
  return "\"Hallo Sanbers!\""
}
console.log(halo())

console.log("==========================")

//soal 2

function kalikan(hasilKali) {
  console.log(num1*num2);
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);


console.log("==========================")

//soal 3

function introduce(perkenalan){
  return "Nama saya " + name +"," +" umur saya " + age + "," + " alamat saya " + address + "," + " dan saya punya hobi yaitu " + hobby ;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming!"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)


console.log("==========================")


//soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var dataObj = {nama: arrayDaftarPeserta[0], jenisKelamin: arrayDaftarPeserta[1], hobi: arrayDaftarPeserta[2], tahun_lahir:arrayDaftarPeserta[3] }
console.log(dataObj)

console.log("==========================")

//soal 5
var buah = {nama: "strawberry",warna : "merah",  ada_bijinya: "tidak", harga: 9000}
var buah2 = {nama: "jeruk",warna : "oranye",  ada_bijinya: "ada", harga: 8000}
var buah3 = {nama: "Semangka",warna : "Hijau & Merah",  ada_bijinya: "ada", harga: 1000}
var buah4 = {nama: "Pisang",warna : "Kuning",  ada_bijinya: "tidak", harga: 5000}

var arr = []
arr.push(buah, buah2, buah3, buah4);
console.log(arr[0])


console.log("==========================")
// soal 6


var arrFilm = []

function dataFilm(nama, durasi, genre, tahun) {
    var obj = {
        Nama: nama,
        Durasi: durasi,
        Genre: genre,
        Tahun: tahun
    }
    arrFilm.push(obj);

}
dataFilm("DragonBall", "120 menit", "action-comedy", 1999)
console.log(arrFilm)
