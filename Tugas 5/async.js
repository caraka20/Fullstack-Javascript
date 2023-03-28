// membuat function promise
const my_function_promise = (param) => {
    return new Promise ((resolve, reject) => {
        if (param === 2) {
            resolve('halo, saya kondisi benar')
        } else {
            reject('halo, saya kondisi salah')
        }
    })
}

// my_function_promise(2)
// .then((result) => {
//     console.log(result);
// }) .catch ((error) => {
//     console.log(error);
// })

let uang = 50
const belanja = new Promise ((resolve, reject) => {
    if (uang > 50) {
        resolve('bisa beli tamia')
    } else {
        reject('harus nabung lagi')
    }
})

belanja
.then((res) => {
    console.log(res);
}) .catch ((error) => {
    console.log(error);
})



// async await
function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= "Maaf buku di bawah 40 halaman tidak tersedia"         
          reject(reason);
        }
    });
  };

  
  const execute = async (berwarna, jmlHalaman) => {
    try {
      let res = await filterBooksPromise(berwarna, jmlHalaman)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
//   execute(true, 40)
//   execute(false, 250)
//   execute(true, 30)