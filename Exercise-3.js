var nama = 'Dadang';
var peran = 'Tabib';

if (nama && peran === 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjata mu`)
} else if (nama && peran === 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if(nama && peran === 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo Penyihir ${nama}, cipatkan keajaiban yang membantu kemenanganmu`)
} else if (nama && peran !== true){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game`)
} else {
    console.log('Nama harus diisi!')
}

