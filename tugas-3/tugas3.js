//soal 1

var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascripts ";
var upper1 = kataKedua[0].toUpperCase().concat(kataKedua.substring(1));
var upper = kataKeempat.toUpperCase();
var gabung = kataPertama + upper1 + kataKetiga + upper;
console.log(gabung)

console.log("==============================")

// soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(Number(kataPertama));
console.log(Number(kataKedua));
console.log(Number(kataKetiga));
console.log(Number(kataKeempat));
console.log("Hasil penjumlahan adalah")
console.log(Number(kataPertama)+Number(kataKedua)+Number(kataKetiga)+Number(kataKeempat))


console.log("============================")
//soal 3


var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


console.log("============================")

//soal 4

var nilai = 65;

if (nilai >= 80){
    console.log("indeknya A")
  }else if (nilai >= 70 && nilai < 80){
    console.log("indeksnya B")
  }else if (nilai >= 60 && nilai < 70){
    console.log("indeksnya C")
  }else if (nilai >= 50 && nilai < 60){
    console.log("indeksnya D")
  }else if (nilai < 50){
    console.log("indeksnya E")
}
else {
    console.log("tidak ada samsek")
}

console.log("============================");

//soal 5
