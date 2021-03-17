// Задание 8.
//
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//
// Используйте шаблонные строки.

let fruit = new Map([

    ["pineapple", "yellow"],

    ["tangerine", "orange"],

    ["kiwi",    "green"],


]);

for (let pair of fruit.entries()) {
    let fruit_key = pair[0];
    let fruit_val = pair[1];
    console.log(`Ключ = ${fruit_key}, значение = ${fruit_val}`);
}