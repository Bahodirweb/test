const card = document.querySelector(".card");

// function myPop(arr) {
//     let lastItem = arr[arr.length - 1];
//     arr.length = arr.length - 1;
//     return lastItem;
//   }

//   let arr=["Oybek","Bahodir","Bexruz"];
//   card.innerHTML=myPop(arr);
//   card.innerHTML=arr;

// function myPush(arr, newElement) {
//     arr[arr.length] = newElement;
//     return arr.length;
//   }
//   let arr=["Oybek","Bahodir","Bexruz"];
//   card.innerHTML=myPush(arr,"Marat");
//   card.innerHTML=arr;

// function myShift(arr) {
//     let firstItem = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr.length = arr.length - 11;
//     return firstItem;
//   }
//   let arr=["Oybek","Bahodir","Bexruz"];
//   card.innerHTML=myShift(arr,);
//   card.innerHTML=arr;

// function myUnshift(arr, newElement) {
//   for (let i = arr.length; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = newElement;
//   return arr.length;
// }

// let arr=["Oybek","Bahodir","Bexruz"];
//   card.innerHTML= myUnshift(arr,"Asqar");
//   card.innerHTML=arr;

// function myMap(arr) {
//     let result = [];
//     for (let i in arr) {
//       result.push(arr[i]*2);
//     }
//     return result;
//   }

//   let numbers = [12, 25, 39, 48, 57];
//   let square = myMap(numbers);
//   card.innerHTML=square;

// function mySplit(str, Bahodir) {
//     let result = [];
//     let word = "";
    
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === Bahodir) {
//         result.push(word);
//         word = "";
//       } 
//       else {
//         word += str[i];
//       }
//     }
    
//     result.push(word);
//     return result;
//   }
  
//   let myString = "Asqar Marat ";
//   card.innerHTML=mySplit(myString, " ");



function myJoin(arr, Bahodir) {
    let result = "";
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      
      if (i !== arr.length - 1) {
        result += Bahodir;
      }
    }
    
    return result;
  }
  
  let myArray = ["Asqar", "Marat","oybek","Jamshit"];
  card.innerHTML= myJoin(myArray, " , ");
  
  