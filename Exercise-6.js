// Melakukan Looping Menggunakan While
var i = 0
var j = 22
var tambah = 2
var kurang = 2
console.log('LOOPING PERTAMA')
while (i < 20) {
    i = i + tambah
    console.log(`${i} - i love coding`)
}
console.log('LOOPING KEDUA')
while (j > 2) {
    j = j-kurang
    console.log(`${j} - I will become fullstack developer`)
}


// Melakukan looping menggunakan for
console.log('LOOPING PERTAMA')
for (var a = 1; a <= 20; a++) {
    console.log(`${a} - I love coding`)
}
console.log('LOOPING KEDUA')
for (var a = 20; a >= 1; a--) {
    console.log(`${a} - I will become full stack developer`)
}


// Angka Ganjil dan Genap
for (var a = 1; a <= 100; a++) {
    if ((a%2) == 0){
        console.log(`Counter sekarang : ${a}`)
        console.log('GENAP\n')

    } else {
        console.log(`Counter sekarang : ${a}`)
        console.log('GANJIL\n')
    }
}

// Pertambahan counter 2
for (var a = 1; a <= 100; a += 2) {
    if ((a%3)== 0){
        console.log(`${a} kelipatan 3`)
    } else {
        console.log(a)
    }
} 

// Pertambahan counter 5
for (var a = 1; a <= 100; a += 5) {
    if ((a%6)== 0){
        console.log(`${a} kelipatan 6`)
    } else {
        console.log(a)
    }
} 

// Pertambahan counter 5
for (var a = 1; a <= 100; a += 9) {
    if ((a%10)== 0){
        console.log(`${a} kelipatan 10`)
    } else {
        console.log(a)
    }
}