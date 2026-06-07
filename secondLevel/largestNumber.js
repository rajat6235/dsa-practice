// smallest number to compare with is -Infinity and larget is Infinity

function largestNumber(arr){
    let largest = -Infinity
    for (let i = 0 ; i< arr.length ; i++){
        if(arr[i]> largest){
            largest = arr[i]
        }
    }
    return largest

}
console.log(largestNumber([-9,-19,-10]))