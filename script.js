//? 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
// const arr=[1,2,3,4]
// let sum=0
// arr.forEach((x)=> {
//     sum+=x
// })
// let edediorta=sum/arr.length
// console.log(edediorta);

//?call back
// const arr = [1, 2, 3, 4, 5]
// let sum = 0
// function ortalama(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     let edediorta = sum / arr.length
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr, edediorta)
//     }
// }
// ortalama(arr, function (x, i, arr, edediorta) { console.log(edediorta) })

//? 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// const arr=[1,2,3,4]
// let cutsum=0
// arr.forEach((x) => x%2===0 ? cutsum+=x: null)
// console.log(cutsum);

//?call back
// const arr = [1, 2, 3, 4, 5]
// let cut = arr[0]
// let sumcut = 0
// function cutsumtap(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             cut = arr[i]
//             sumcut += cut
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr, sumcut)
//     }
// }
// cutsumtap(arr, function (x, i, arr, sumcut) { console.log(sumcut) })

//? 3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// const arr=[1,2,3,4]
// let teksum=0
// arr.forEach((x) => x%2!==0 ? teksum+=x: null)
// console.log(teksum);

//?call back
// const arr = [1, 2, 3, 4, 5]
// let tek = arr[0]
// let sumtek = 0
// function teksumtap(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2!==0) {
//             tek=arr[i]
//             sumtek+=tek
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr,sumtek )
//     }
// }
// teksumtap(arr, function (x, i, arr, sumtek) { console.log(sumtek) })

//? 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.
// const arr = [1, 2, 3, 4]
// let teksum = 0
// let cutsum = 0
// let hasil = 1
// arr.forEach((x) => {
//     if (x % 2 === 0) {
//         cutsum += x
//     }
//     if (x % 2 !== 0) {
//         teksum += x
//     }
//     hasil = cutsum * teksum
// console.log(hasil);

//?call back
// const arr = [1, 2, 3, 4, 5]
// let tek = arr[0]
// let cut = arr[0]
// let teksum = 0
// let cutsum = 0
// function hasiltap(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             cut = arr[i]
//             cutsum += cut
//         }
//         if (arr[i] % 2 !== 0) {
//             tek = arr[i]
//             teksum += tek
//         }
//     }
//     let hasil = cutsum * teksum
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr, hasil)
//     }
// }
// hasiltap(arr, function (x, i, arr, hasil) { console.log(hasil) })
