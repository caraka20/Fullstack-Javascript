console.log('belajar oop');

// 1. membuat class
class Siswa {

    // properti atau state
    namaSekolah = "SMA N 1"

    // untuk mendapatkan variable global dengan parameter
    constructor(namaIni) {
        console.log(`halo nama saya ${namaIni}`);
        this.nama = namaIni
    }

    // method1, 
    method() {
        // hal yang dijalankan di method ini
        document.write(`hallo nama saya ${this.nama} dari sekolah ${this.namaSekolah}`)
    }

    // getter dan stter (method pada umumnya)
    get namaBaru() {
        // let namaBaruu;
        let namaBaruu = this.nama.toUpperCase()
        return namaBaruu
    }

    set namaBaru(parm) {
        // beri peringatan jika isi kosong
        if(parm.length === 3) {
            alert('silahkan masukan nama')
            return;
        }
        this.nama = parm
    }
}

// parameter akan masuk di namaIni constructor
let teman1 = new Siswa ('Tono')

// untuk akses method1
// teman1.method()



// 2. getter dan setter
teman1.nama = 'caraka'
// document.write(`nama sisiwa : ${teman1.nama} \n`)


// inheritance / pewarisan
class Hewan  {

    // ( mengakses properti/ method dalam class tanpa membuat objek terlebih dahulu yaitu menggunakan static )
    static habitat = 'darat'

    constructor(namaa) {
        this.namaa = namaa
    }

    static jalan () {
        document.write(`${this.namaa} berjalan pelan dari class hewan`)
    }
}

let kelinci = new Hewan ('kelinci putih')
// kelinci.jalan()


class Burung extends Hewan{

    constructor(namaa,warna) {
        // (super(nama) itu untuk mengambil this.namaa dari parent nya)
        super(namaa)
        this.warna = warna
    }

    terbang () {
        document.write(`${this.namaa} terbang`)
    }
    jalan () {
        // - super.jalan ini untuk mengambil kedua method jalan saat diapnggil
        // super.jalan()
        document.write(`${this.namaa} berwarna ${this.warna} berjalan cepat`)
        // this.terbang()
    }
}

// ( let nuri adalah objek )
// let nuri = new Burung ('nuri', 'merah')
// nuri.terbang()
// nuri.jalan()


// ( melakukan akses kepada properti atau method tanpa perlu membuat let objek terlebih dahulu )
// document.write(`${Hewan.habitat} ok`)
// Hewan.jalan()
document.write(Burung.habitat)



// capsulation
class Counter {
    // ( agar count tidak bisa diubah dari luar maka beri # )
    #count = 0
    #increment () {
        return this.#count++
    }
    getIncrement() {
        this.#increment()
    }
    getCount() {
        return this.#count
    }
}

let counter = new Counter ()
counter.getIncrement()
counter.getIncrement()
counter.count = 1000
console.log(`count berisi ${counter.getCount()}`);