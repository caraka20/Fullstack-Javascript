
const formRegistrasi = document.getElementById("form_registrasi");
 const dataPendaftar = [];

 formRegistrasi.addEventListener("submit", function(event) {
   event.preventDefault();

   const nama = document.getElementById("nama").value;
   const umur = parseInt(document.getElementById("umur").value);
   const uang_sangu = parseInt(document.getElementById("uang_sangu").value);

   if (nama.length < 10) {
     alert("Nama minimal 10 karakter");
     return;
   }

   if (umur < 25) {
     alert("Umur minimal 25 tahun");
     return;
   }

   if (uang_sangu < 100000 || uang_sangu > 1000000) {
     alert("Uang sangu harus antara 100 ribu hingga 1 juta");
    return;
 }

 const pendaftarBaru = { nama, umur, uang_sangu };
 dataPendaftar.push(pendaftarBaru);

 const new_table = document.getElementById("new_table");

 let data = "";
 for (let i = 0; i < dataPendaftar.length; i++) {
 data += `<tr>
   <td>${i + 1}</td>
   <td>${dataPendaftar[i].nama}</td>
   <td>${dataPendaftar[i].umur}</td>
   <td>${dataPendaftar[i].uang_sangu}</td>
 </tr>`;
 }

 new_table.innerHTML = data;


         let totalUmur = 0;
         let totalUangSangu = 0;
         for (let i = 0; i < dataPendaftar.length; i++) {
           totalUmur += dataPendaftar[i].umur;
           totalUangSangu += dataPendaftar[i].uang_sangu;
         }

         let rataRataUmur = totalUmur / dataPendaftar.length;
         let rataRataUangSangu = totalUangSangu / dataPendaftar.length;


         const dataRataRata = document.getElementById("data_rata_rata");

         dataRataRata.innerHTML = `Rata rata pendaftar memiliki uang sangu sebesar <strong>${rataRataUangSangu}</strong> dengan rata rata umur <strong>${rataRataUmur}</strong>`
       });



//        class Register {

//         constructor (nama, umur, uang_sangu) {
//             this.nama = nama
//             this.umur = umur
//             this.uang_sangu = uang_sangu
//         }

//         table = document.write(`<tr>
//         <td scope="col">${this.nama}</td>
//         <td scope="col">${this.umur}</td>
//         <td scope="col">${this.uang_sangu}</td>
//          </tr>`)
//         new_table = document.getElementById('new_table')

//         submit_data() {
            
//                     return document.write(this.new_table += this.table)  
//         }
//     }

//     let registrasi = new Register (nama, umur, uang_sangu)
//     registrasi.submit_data()
// 