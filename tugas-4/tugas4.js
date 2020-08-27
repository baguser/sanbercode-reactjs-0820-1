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

var angka
for( angka =1; angka < 20; angka++) {
  if(angka % 3 === 0){
    console.log(angka + " - santai")
  }else if(angka % 2 === 0){
    console.log(angka + " - Berkualitas")
  }
  else if(angka % 6  === 3){
    console.log(angka + " - I Love Coding")
  }
}


console.log("==============================")

//soal tiga

var ini = '';
for (var i = 1; i <= 7 ; i++){

  for (var k = 1; k <= i; k++) {
    ini += '#';
  }
  for (var l = 1; l <= i-1; l++) {
    ini += '#';
  }
  ini += '\n';
}
console.log(ini);
