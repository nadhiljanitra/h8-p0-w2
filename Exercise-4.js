var tanggal = 1
var bulan = 11
var tahun = 2003


switch (true){
    case tanggal > 31 :
    case tanggal < 1 :
    case bulan > 12:
    case bulan < 1 :
    case tahun > 2200:
    case tahun < 1901:
        console.log('Cek nilai tanggal, bulan dan tahun')
    break;
    case bulan === 1:
        console.log(`${tanggal} Januari ${tahun}`)
    break;
    case bulan === 2:
        console.log(`${tanggal} Februari ${tahun}`)
    break;
    case bulan === 3:
        console.log(`${tanggal} Maret ${tahun}`)
    break;
    case bulan === 4:
        console.log(`${tanggal} April ${tahun}`)
    break;
    case bulan === 5:
        console.log(`${tanggal} Mei ${tahun}`)
    break;
    case bulan === 6:
        console.log(`${tanggal} Juni ${tahun}`)
    break;
    case bulan === 7:
        console.log(`${tanggal} Juli ${tahun}`)
    break;
    case bulan === 8:
        console.log(`${tanggal} Agustus ${tahun}`)
    break;
    case bulan === 9:
        console.log(`${tanggal} September ${tahun}`)
    break;
    case bulan === 10:
        console.log(`${tanggal} Oktober ${tahun}`)
    break;
    case bulan === 11:
        console.log(`${tanggal} November ${tahun}`)
    break;
    case bulan === 12:
        console.log(`${tanggal} Desember ${tahun}`)
    break;
}