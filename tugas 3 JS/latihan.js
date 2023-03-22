
const output = (nilai) => {
if (nilai > 3.9 && nilai <= 4) {
    return 'cumlaude pin emas';
} else if (nilai > 3.5 && nilai <= 3.9) {
    return 'cumlaude';
} else if (nilai >= 3 && nilai <= 3.5) {
    return 'baik';
} else if (nilai > 2.5 && nilai < 3) {
    return 'kurang baik';
} else if (nilai >= 0 && nilai <= 2.5) {
    return 'perbaikan ipk';
} else {
    return 'nilai tidak terdefinisi';
}}

IPK = 4
let predikat = output(IPK)
const is3T = true

// console.log(IPK);
// console.log(predikat);
const hadiah = () => {
    if ( predikat === 'cumlaude' && is3T === true ) {
        return IPK * 1000000;
    } else if ( predikat === 'cumlaude' && is3T !== true ) {
        return IPK * 500000;
    } if (predikat === 'cumlaude pin emas' && is3T === true) {
        return IPK * 2000000;
    } else if (predikat === 'cumlaude pin emas' && is3T !== true) {
        return IPK * 1000000;
    } if (predikat === 'cumlaude' && IPK === 4) {
        return 10000000;
    } else if (predikat !== 'cumlaude' && IPK < 3.5) {
        return 'tidak dapat apa apa';
    }
}

 let hadiahKotor = hadiah(predikat)
 console.log(test);

const potongan = (hadiah) => {
    if (hadiah > 5000000) {
        return hadiah * 3 / 100
    } else {
        return hadiah
    }
}
console.log(potongan(hadiahKotor));

let hadiahBersih = hadiahKotor - potongan(hadiahKotor)
console.log(hadiahBersih);