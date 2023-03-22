
// pada kasus suhu membutuhkan 1 variable yaitu $suhu
let suhu = 1000

// untuk implementasi case menggunakan pengkondisian if dan else if
const cekSuhu = () => {
        // jika suhu lebih dari sama dengan -100 dan suhu kurang dari samadengan 0 maka hasilnya beku
    if (suhu >= -100 && suhu <= 0){
        return "Beku"
        // selain itu jika suhu lebih dari samadengan 1 dan suhu kurang dari sama dengan 100 maka haislnya cair
    } else if (suhu >= 1 && suhu <= 100){
        return "Cair"
        // selain itu jika suhu lebih dari sama dengan 101 dan suhu kurang dari sama dengan 500 maka hasilnya uap
    } else if (suhu >= 101 && suhu <= 500 ){
        return "Uap"
        // selain itu tidak terdefinisi
    } else {
        return "Tidak Terdefinisi"
    }
}
// console.log(cekSuhu());



// pada kasus SPBU membutuhkan 3 variable yaitu variable $kendaraan, $cc dan $jenisPlat
const jenisPlat = 'kuning'
const kendaraan = 'mobil'
const cc = 1500

// untuk implementasi case menggunakan pengkondisian if dan else if
let cekBbm = () => {
        // jika kendaraan nya motor atau jenis plat nya kuning maka hasilnya BBM Subsidi
    if(kendaraan === 'motor' || jenisPlat === 'kuning') {
        return "Bbm Subsidi"
        // selain itu jika kendaraan nya mobil dan cc kurang dari 1500 maka hasilnya pertamax
    } else if (kendaraan === 'mobil' && cc <1500) {
        return "Pertamax"
        // selain itu jika kendaraan nya mobil dan cc lebih dari sama dengan 1500 maka hasilnya Pertamax Turbo
    } else if (kendaraan === 'mobil' && cc >= 1500) {
        return "Pertamax Turbo"
    }
}

console.log(cekBbm());

