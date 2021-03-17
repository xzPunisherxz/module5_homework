let arr=[23, null, "five", 2, 53, 10, 12, 17];
let even_number = 0;
let odd_number = 0;
let zero = 0;
let other = 0;

for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        if (arr [i] === 0) {
            zero++;
        } else if (arr [i] % 2 === 0) {
            even_number++;
        } else {
            odd_number++;
        }
    }     else {
        other++;
    }
}
console.log (`Массив содержит ${even_number} четных чисел, ${odd_number} нечетных чисел, ${zero} нулей и ${other} других элементов`)

