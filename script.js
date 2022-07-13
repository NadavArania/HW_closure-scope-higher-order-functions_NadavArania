// Targil 1

// let product = function(n1,n2){
//     return function (n3,n4){
//       return function (n5,n6){
//         return (n1 * n3 * n5) + (n2 * n4 * n6);
//     }
//   }
// }

// console.log(product(1,2)(3,4)(5,6));

// Targil 3

// let test =
// function assertEquals(func,result){
//   return result = func;
// }
// function assertSimilar(func,result){
//   return result = func;
// };

// function createTest(a,b){
//   if(Array.isArray(a) && Array.isArray(b) ){
//     return a.concat(b);
//   }
//   else{
//     return a + b;
//   }
// }
// console.log(test(createTest(1,2)));
// console.log(test(createTest("1","2")));
// console.log(test(createTest([1,2],[3,4])));

// Targil 4

// function erase(str) {
//   let text = "";
//   for (const iterator of str) {
//     if(iterator.includes("#")){
//       text = text.replace(/#/g,"")
//       text = text.slice(0, -1);
//    }
//    else{
//     text += iterator;
//    }
//   }
//   return text;
// }

// console.log(erase("he##l#hel#llo"));
// console.log(erase("major# spar##ks"));
// console.log(erase("si###t boy"));
// console.log(erase(""));

//Targil 5

// function movingPartition(n) {
//     let newArray1 = [];
//     let newArray2 = [];
//     let newArray3 = [];
//     let newArray4 = [];

//     for (let i = 0; i < n.length - 1; i++) {
//         for (let j = 0; j < 1; j++) {
//             newArray1 = n.slice(0,i+1);
//             newArray2 = n.slice(i+1,n.length)
//     }
//     newArray3[i] = newArray1;
//     newArray4[i] = newArray2
// }
//     return [newArray3,newArray4];
// }

// console.log(movingPartition([-1,-1,-1,-1]));
// console.log(movingPartition([1,2,3,4,5]));

// Targil 6

// const plusFive = function makePlusFunction(number) {
//   return 5 + number;
// }

// const plusTen = function makePlusFunction(number) {
//   return 10 + number;
// }

// console.log(plusFive(2));
// console.log(plusFive(-8));

// console.log(plusTen(0));
// console.log(plusTen(188));
// console.log(plusFive(plusTen(0)));

