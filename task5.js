let arr = [3, "table", 23, "chair", 65, "fridge"]
console.log(arr.length)
let result = arr.map(function (item, index, array) {
    return item
});

console.log(result);
