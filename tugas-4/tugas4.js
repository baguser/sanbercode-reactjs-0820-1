//soal satu
console.log("LOOPING PERTAMA")
for(var deret = 2; deret < 22; deret += 2) {
  console.log(deret + ' - I love coding ' );
}

console.log("LOOPING KEDUA");

for(var deret = 20; deret > 0; deret -= 2) {
  console.log( deret + " - I will become a frontend developer");
}

console.log("==============================")

// soal KEDUA


for (var angka = 1; angka <= 20; angka++) {
  if (angka % 3 == 0 && angka % 2 != 0) {
    console.log(angka + ". I Love Coding");
  } else {
    if (angka % 2 == 0) {
      console.log(angka + ". Berkualitas");
    } else {
      console.log(angka + ". Santai");
    }
  }
}



console.log("==============================")

//soal tiga

var ini = '';
for (var i = 1; i <= 7 ; i++){

  for (var k = 1; k <= i; k++) {
    ini += '#';
  }
  for (var l = 7; l <= i-1; l++) {
    ini += '#';
  }
  ini += '\n';
}
console.log(ini);


console.log("==============================")

//soal empat

var kalimat= "saya sangat senang belajar javascript";
var name = kalimat.split(" ")
console.log(name)

console.log("==============================")

// soal lima

var Buah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for ()
console.log(Buah );
