// //....... Bai 1.......
// let str = prompt("input your sentence");
// let newStr = ("");
// for (let i = str.length - 1; i >= 0; i--) {
// newStr += str[i];
// }
// console.log(newStr);
//..................................
//   Bai 2:
// let str = prompt("input your sentence");
// let sent = str.toLowerCase().split(" ");
// for(var i = 0; i< sent.length; i++){
//     sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
// }
// console.log (sent.join(" "));
//// .  .............................
//  Bai3:

// let arr = ["one", "two", "two", "one", "four", "three", "six", "five", "six"];
// let result = [];
// result = arr.filter(function(element){
//   return result.includes(element) ? '' : result.push(element)
// });

// console.log(result);
//// .................................
// //  Bai 4
// let Arr=[54, 22, 11, 6, 19, 55, 2];
// for(let i =0; i<Arr.length;i++){
//     for(let j =i+1; j<Arr.length;j++){
//         if(Arr[i] > Arr[j]){
//             let a;
//             a=Arr[i];
//             Arr[i]=Arr[j];
//             Arr[j]=a;

//         }
//     }
// }
// console.log(Arr);

