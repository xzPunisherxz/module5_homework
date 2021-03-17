let arr = [5, 5, 5, 5, 5];

for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        console.log(false);
        break;
    } else if (i == arr.length - 1) {
        console.log(true);
    }
}