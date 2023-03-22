//1. Buatlah sebuah game tebak nilai menggunakan bilangan random, dan outputnya adalah berapa kali perulangan dapat menemukan nilai yang dimaksud.
const nilai = 5

const tebakNilai = (nilai) => {
    const random = Math.ceil(Math.random() * 10)
    const percobaan = 0
    console.log(random);
    console.log(nilai);
    for (let i = 0; i < 100; i++) {
        if (nilai !== random) {
            false
        } if(nilai === random){
            return `selamat anda berhasil menebak dengan ${percobaan + i} kali percobaan`
        } else {
            false
        }
        
    }
}
console.log(tebakNilai(nilai)); 


// 2. gunakan nilai random untuk mendapatkan 10 bilangan array
// tentukan total, rata rata, min, max
// jangan gunakan function bawaan dari javascript, buatlah algoritma sendiri untuk menentukan total, rata rata, min dan max.


// 2. dari studi case yang ada pada percabangan pisah dalam bentuk potongan fungsi

