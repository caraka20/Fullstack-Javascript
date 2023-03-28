//1. Buatlah sebuah game tebak nilai menggunakan bilangan random, dan outputnya adalah berapa kali perulangan dapat menemukan nilai yang dimaksud.
const nilai = 5

const tebakNilai = (nilai) => {
    const random = Math.ceil(Math.random() * 10)
    const percobaan = 0
    // console.log(random);
    // console.log(nilai);
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
// console.log(tebakNilai(nilai)); 



// case 2
const wilayah1 = 'beras'
const wilayah2 = 'sayur'
const wilayah3 = 'buah'

const hargaBeras = 10000
const hargaSayur = 5000
const hargaBuah = 20000


const harga = (param, harga) => {
    if(param === param ) {
        return harga
    } if (param !== param ) {
        let hasil = (harga * 50 / 100) + harga
        return hasil 
    }
}

console.log('----------------------------');
let berasWil1 = harga(wilayah1, hargaBeras)
console.log(`harga beras wilayah 1 : ${berasWil1}`);
let buahWil1 = harga (wilayah1, hargaBuah)
console.log(`harga beras wilayah 1 : ${buahWil1}`);
let sayurWil1 = harga (wilayah1, hargaSayur)
console.log(`harga beras wilayah 1 : ${sayurWil1}`);


console.log('----------------------------');
let berasWil2 = harga(wilayah2, hargaBeras)
console.log(`harga beras wilayah 2 : ${berasWil2}`);
let buahWil2 = harga(wilayah2, hargaBuah)
console.log(`harga beras wilayah 2 : ${buahWil2}`);
let sayurWil2 = harga(wilayah2, hargaSayur)
console.log(`harga beras wilayah 2 : ${sayurWil2}`);

console.log('----------------------------');
let berasWil3 = harga(wilayah3, hargaBeras)
console.log(`harga beras wilayah 3 : ${berasWil3}`);
let buahWil3 = harga(wilayah3, hargaBuah)
console.log(`harga beras wilayah 3 : ${buahWil3}`);
let sayurWil3 = harga(wilayah3, hargaSayur)
console.log(`harga beras wilayah 3 : ${buahWil3}`);



const kebutuhan = (beras, wilayah) => {
    let hasil = beras * wilayah
    return hasil
}


const beras1 = 100
const sayur1 = 30
const buah1 = 50

const beras2 = 200
const sayur2 = 50
const buah2 = 200

const beras3 = 10
const sayur3 = 5
const buah3 = 20

console.log('----------------------------');
console.log('total kebutuhan beras buah dan sayur wilayah 1');
let keb_beras_wil1 = console.log(kebutuhan(beras1, berasWil1)); 
let keb_buah_wil1 = console.log(kebutuhan(buah1, buahWil1)); 
let keb_sayur_wil1 = console.log(kebutuhan(sayur1, sayurWil1)); 

console.log('total kebutuhan beras buah dan sayur wilayah 2');
let keb_beras_wil2 = console.log(kebutuhan(beras2, berasWil2)); 
let keb_buah_wil2 = console.log(kebutuhan(buah2, buahWil2)); 
let keb_sayur_wil2 = console.log(kebutuhan(sayur2, sayurWil2)); 

console.log('total kebutuhan beras buah dan sayur wilayah 3');
let keb_beras_wil3 = console.log(kebutuhan(beras3, berasWil3)); 
let keb_buah_wil3 = console.log(kebutuhan(buah3, buahWil3)); 
let keb_sayur_wil3 = console.log(kebutuhan(sayur3, sayurWil3)); 
