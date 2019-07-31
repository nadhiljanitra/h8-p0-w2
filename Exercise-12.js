function konversiMenit(waktu){
    if (waktu>=60){
        var jam = Math.floor(waktu/60);
        var menit = waktu%60;
        if (menit < 10){
            menit = '0'+menit
        }
    } else {
        var jam = 0
        var menit = waktu 
    }
    return `${jam}:${menit}`
}


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00