
// 1.verilmish ededin 3-un quvveti olub, olmadigini tapan alqoritm yazin.

// let eded = parseInt(prompt("ededixail edin"))
// let quvvet = 1;

// while (quvvet < eded) {
//     quvvet *= 3;
// }

// if (quvvet === eded) {
//     console.log(eded + " 3-ün quvvətidir.");
// } else {
//     console.log(eded + " 3-ün quvvəti deyil.");
// }


// 3. Verilmis ededin en yaxin asagi kokalti deyerini tapan alqoritm (imisalcun eded 20-dirse 4 qaytarmalidi, 25-dise 5 qaytarmalidi, 16-drisa 4 ve s.)


// let eded = parseInt(prompt("ededi daxil edin")); 
// let kok = 0;

// for (let i = 1; i * i <= eded; i++) {
//     kok = i;
// }

// console.log(kok); 

// 4.Verilmis array-deki reqemlerinin cemi 10-dan kicik olan ededlerin sayini tapan alqoritm

// let arr = [ 987, 79, 19, 45, 57,913,35,23,80,9];
// let counter = 0;

// for (let i = 0; i < arr.length; i++) {
//     let eded = arr[i];
//     let cem = 0;
//     while (eded) {
//         cem += eded - ((eded / 10) | 0) * 10;
//         eded = (eded / 10) | 0;
//     }
//     if (cem < 10) {
//         counter++;
//     }
// }

// console.log(counter);
