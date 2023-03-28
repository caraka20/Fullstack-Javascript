//1. Buatlah 100 nilai random (1 sampai 50) pada 1 array
let nilaiRandom = []

const getNilai = () => {
    for (let i = 0; i <100; i++) {
        nilaiRandom.push(Math.ceil(Math.random()*50))
    }
}
getNilai()
console.log(nilaiRandom);


// 2. Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
let arrIndexGanjil = []
let arrIndexGenap = []

const indexArr = (angka) => {
    for (let i = 0; i < 100; i++) {
        let arr = angka[i]
        // console.log(arr);
        if (i % 2 === 0) {
            arrIndexGenap.push(arr)
        } else {
            arrIndexGanjil.push(arr)
        }
    }
}
indexArr(nilaiRandom)
console.log(arrIndexGenap);
console.log(arrIndexGanjil);


//3. gunakan 2 array yang telah dibuat untuk mendapatkan MIN, MAX, TOTAL, RATA-RATA

// fungsi untuk mendapatkan nilai terkecil pada sebuah array
const nilaiMin = (angka) => {
    let min = angka[0]
    for (let i = 0; i < angka.length; i++) {
        if (angka[i] < min) {
            min = angka[i]
        } 
    }
    // console.log(min);
    return min
}


// fungsi untuk mendapatkan nilai terbesar pada sebuah array
const nilaiMax = (angka) => {
    let max = angka[0]
    for (let i = 0; i < angka.length; i++) {
        if (angka[i] > max) {
            max = angka[i]
        } 
    }
    // console.log(max);
    return max
}


// fungsi untuk menghitung total pada sebuah isi array yang dijumlahkan
const totalisasi = (angka) => {
    let total = 0
    for (let i = 0; i < angka.length; i++) {
        total += angka[i]
    }
    // console.log(total);
    return total
}


// fungsi untuk mendapatkan nilai rata rata pada array
const rataRata = (angka) => {
    let total = totalisasi(angka)
    let avr = total / angka.length
    // console.log(Math.floor(avr));
    // console.log(avr);
    return avr
}

// console.log(`nilai terkecil untuk array genap : ${nilaiMin (arrIndexGenap)} `);
// console.log(`nilai terbesar untuk array genap : ${nilaiMax (arrIndexGenap)} `);
// console.log(`total nilai untuk array genap jika dijumlahkan nilainya : ${totalisasi (arrIndexGenap)} `);
// console.log(`nilai rata-rata untuk array genap : ${rataRata (arrIndexGenap)} `);

// console.log(`nilai terkecil untuk array ganjil : ${nilaiMin (arrIndexGanjil)} `);
// console.log(`nilai terbesar untuk array ganjil : ${nilaiMax (arrIndexGanjil)} `);
// console.log(`total nilai untuk array ganjil jika dijumlahkan nilainya : ${totalisasi (arrIndexGanjil)} `);
// console.log(`nilai rata-rata untuk array ganjil : ${rataRata (arrIndexGanjil)} `);

const minArrGenap = nilaiMin(arrIndexGenap) //nilai terkecil untuk array genap
const maxArrGenap = nilaiMax(arrIndexGenap) //nilai terbesar untuk array genap
const totalArrGenap = totalisasi(arrIndexGenap) //total nilai untuk array genap jika dijumlahkan nilainya
const avrArrGenap = rataRata(arrIndexGenap) //nilai rata-rata untuk array genap

const minArrGanjil = nilaiMin(arrIndexGanjil) //nilai terkecil untuk array ganjil
const maxArrGanjil = nilaiMax(arrIndexGanjil) //nilai terbesar untuk array ganjil
const totalArrGanjil = totalisasi(arrIndexGanjil) //total nilai untuk array ganjil jika dijumlahkan nilainya
const avrArrGanjil = rataRata(arrIndexGanjil) //nilai rata-rata untuk array ganjil


// fungsi untuk membandingkan nilai MIN dari array ganjil dan array genap
function bandingMin(arrGenap, arrGanjil) {
    if (arrGenap > arrGanjil) {
        return console.log(`nilai MIN pada array genap ( ${arrGenap} )  lebih besar dari nilai MIN pada array ganjil ( ${arrGanjil} )`);
    } else if (arrGanjil === arrGenap) {
        return console.log(`nilai MIN pada array genap ( ${arrGenap} )  sama dengan nilai MIN pada array ganjil ( ${arrGanjil} )`);
    } else {
        return console.log(`nilai MIN pada array genap ( ${arrGenap} )  lebih kecil dari nilai MIN pada array ganjil ( ${arrGanjil} )`);
    }
}
bandingMin(minArrGenap, minArrGanjil);


// fungsi untuk membandingkan nilai MAX dari array ganjil dan array genap
const bandingMax = (arrGenap, arrGanjil) => {
    if (arrGenap > arrGanjil) {
        return console.log(`nilai MAX pada array genap ( ${arrGenap} ) lebih besar dari nilai MAX pada array ganjil ( ${arrGanjil} )`); 
    } else if (arrGanjil === arrGenap) {
        return console.log( `nilai MAX pada array genap ( ${arrGenap} )  sama dengan nilai MAX pada array ganjil ( ${arrGanjil} )`);
    } else {
        return console.log(`nilai MAX pada array genap ( ${arrGenap} )  lebih kecil dari nilai MAX pada array ganjil ( ${arrGanjil} )`);
    }
}
bandingMax(maxArrGenap, maxArrGanjil);
 

// fungsi untuk membandingkan nilai total dari array ganjil dan array genap
const bandingTotal = (arrGenap, arrGanjil) => {
    if (arrGenap > arrGanjil) {
        return console.log(`nilai total pada array genap ( ${arrGenap} ) lebih besar dari nilai total pada array ganjil ( ${arrGanjil} )`);
    } else if (arrGanjil === arrGenap) {
        return console.log(`nilai total pada array genap ( ${arrGenap} ) sama dengan nilai total pada array ganjil ( ${arrGanjil} )`);
    } else {
        return console.log(`nilai total pada array genap ( ${arrGenap} ) lebih kecil dari nilai total pada array ganjil ( ${arrGanjil} )`); 
    }
}
bandingTotal(totalArrGenap, totalArrGanjil);


// fungsi untuk membandingkan nilai MAX dari array ganjil dan array genap
const bandingAvr = (arrGenap, arrGanjil) => {
    if (arrGenap > arrGanjil) {
        return console.log(`nilai rata-rata pada array genap ( ${arrGenap} ) lebih besar dari nilai rata-rata pada array ganjil ( ${arrGanjil} )`); 
    } else if (arrGanjil === arrGenap) {
        return console.log(`nilai rata-rata pada array genap ( ${arrGenap} ) sama dengan nilai rata-rata pada array ganjil ( ${arrGanjil} )`); 
    } else {
        return console.log(`nilai rata-rata pada array genap ( ${arrGenap} ) lebih kecil dari nilai rata-rata pada array ganjil ( ${arrGanjil} )`); 
    }
}
bandingAvr(avrArrGenap, avrArrGanjil);