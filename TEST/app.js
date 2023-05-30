let box = document.querySelector(".box");
//////////////////////////////////////////////// juft yoki toq son////////////////////////////////////////////////////////////
//
let num = prompt("Iltimos, raqam kiriting:");
if (num % 2 === 0) {
  box.innerHTML="<h1>Juft son</h1>"
} else {
  box.innerHTML="<h1>Toq son</h1>"
}

///////////////////////////////////////////////////fasillarni topadiga dastur////////////////////////////////////////////////////////////////////////
// let month = prompt("fasillarni bilish uchun oylarni rqam bilan kiriting");
// if (month >= 3 && month <= 5) {
//   box.innerHTML = "<h1>Bahor</h1>";
// } else if (month >= 6 && month <= 8) {
//   box.innerHTML = "<h1>Yoz</h1>";
// } else if (month >= 9 && month <= 11) {
//   box.innerHTML = "<h1>Kuz</h1>";
// } else if (month >= 12 && month <= 2) {
//   box.innerHTML = "<h1>Qish</h1>";
//   console.log(month);
// } else {
//   box.innerHTML = "is not defined";
// }

/////////////////////////////////////////////////////hafta kunlarini topadigan dastur/////////////////////////////////////////////////////////////////////

// let dayNumber = prompt("hafta kunini raqam bilan belgilang");
// switch (dayNumber) {
//   case "1":
//     box.innerHTML = "<h1>Dushanba</h1>";
//     break;
//   case "2":
//     box.innerHTML = "<h1>Seshanba</h1>";
//     break;
//   case "3":
//     box.innerHTML = "<h1>Chorshanba</h1>";
//     break;
//   case "4":
//     box.innerHTML = "<h1>Payshanba</h1>";
//     break;
//   case "5":
//     box.innerHTML = "<h1>Juma</h1> <img class='juma' src='./img/juma.jpeg'>";
//     break;
//   case "6":
//     box.innerHTML = "<h1>Shanba</h1>";
//     break;
//   case "7":
//     box.innerHTML = "<h1>Yakshanba</h1>";
//     break;

//   default:
//     box.innerHTML = "<h1>is not defined</h1>";
// }

// let hours=prompt("vaqtni tanlang");

// if(hours>=6 && hours<=12 ){
//     box.innerHTML = "<h1>good morning</h1>"
// }
// else if(hours>=12 && hours<=18){
//     box.innerHTML = "<h1>good afternoon</h1>"
// }
// else if(hours>=18 && hours<=23){
//     box.innerHTML = "<h1>good evening</h1>"
// }

// else if(hours>=0 && hours<=5){
//     box.innerHTML = "<h1>good night</h1>"
// }

// else {
//     box.innerHTML="is not defined"
// }
