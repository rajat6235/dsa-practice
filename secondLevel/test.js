function sum(...args) {
    // Your implementation
    if(!Array.isArray(args) || args.length ===0){return 0}
    return args?.reduce((acc,curr)=>acc+curr)
}

//For the purpose of user debugging.
console.log(sum());