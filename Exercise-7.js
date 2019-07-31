// 1. Menyusun Barisan Bintang

var rows1 = 5

for (i = 0; i < rows1; i++){
    console.log('*')
} 

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5

for (i = 0; i<rows2; i++) {
    var asterik=''
    for (j = 0; j<rows2;j++){
       asterik += '*'
    }
   console.log(asterik)
}


// Menyusun Barisan Tangga Bintang Dengan Nested Loop
var rows3 = 5

for (i = 0; i<rows3; i++) {
    var asterik='*'
    for (j = 0; j<i;j++){
       asterik += '*'
    }
    console.log(asterik)
}