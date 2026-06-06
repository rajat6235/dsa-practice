// *****
// *****
// *****
// *****
// *****
// function squareStars(n){
//     for(let i = 0 ; i < n ; i++){
//     let row =""
//     for(let j = 0 ; j < n ; j++){
//         row = row +'*'
//     }
//     console.log(row)
//     }
// }

// console.log(squareStars(5))
// ----------------------------------------s
// *
// **
// ***
// ****

// function leftPyramidStars(n){
// for(let i = 0 ; i <n ; i++){
//     let row =""
//     for(let j = 0 ; j < i ; j++){
//         row = row +'*'
//     }
//     console.log(row)
// }
// }
// console.log(leftPyramidStars(5))
// ----------------------------------------s
// 1
// 12
// 123
// 1234

// function numberRowCount(n){
// for(let i = 0 ; i <n ; i++){
//     let row =""
//     for(let j = 0 ; j <= i ; j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }
// }
// console.log(numberRowCount(5))
// ----------------------------------------s
// 1
// 22
// 333
// 4444
// 55555

// function numberRowCount(n){
    
// for(let i = 0 ; i <n ; i++){
//     let row =""
//     for(let j = 0 ; j <= i ; j++){
//         row = row + (i+1)
//     }
//     console.log(row)
// }
// }
// console.log(numberRowCount(5))

// ----------------------------------------s
// 12345
// 1234
// 123
// 12
// 1
// function numberRowReverseCount(n){
    
// for(let i = 0 ; i <n ; i++){
//     let row =""
//     for(let j = 0 ; j < n-i ; j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }
// }
// console.log(numberRowReverseCount(5))



// ----------------------------------------s
//     *
//    **
//   ***
//  ****
// *****
// function leftPyramidStars(n){
    
// for(let i = 0 ; i <n ; i++){
//     let row =""
//     for(let j = 0 ; j < n-(i+1) ; j++){
//         row = row + " "  // one loop for adding empty spaces n-(i+1)
//     }
//         for(let k = 0 ; k < i+1 ; k++){
//         row = row + "*" // second loop for adding * as i +1
//     }
//     console.log(row)
// }
// }
// console.log(leftPyramidStars(5))

// ----------------------------------------s
// 1
// 10
// 101
// 1010
// 10101
//  function oneZeroNewLine(n){
//     for (let i = 0 ; i <n ; i++){
//         let row = '';
//         let toggle = 1
//         for(let j = 0; j <= i ; j++){
//             row = row + toggle
//             if(toggle ===1){
//                 toggle =0
//             }
//             else{
//                 toggle =1
//             }
//         }
//         console.log(row)
//     }
//  }
// console.log(oneZeroNewLine(5))


// ----------------------------------------s
// 1
// 10
// 101
// 1010
// 10101
//  function oneZeroSameLine(n){
//         let toggle = 1

//     for (let i = 0 ; i <n ; i++){
//         let row = '';
//         for(let j = 0; j <= i ; j++){
//             row = row + toggle
//             if(toggle ===1){
//                 toggle =0
//             }
//             else{
//                 toggle =1
//             }
//         }
//         console.log(row)
//     }
//  }
// console.log(oneZeroSameLine(5))
