let meaning = prompt ("Введите значение");
let result = +meaning
if (typeof result !== "number" || isNaN(meaning)) {
    console.log ("Упс, кажется вы ошиблись")
}
else if (result % 2 === 0) {
    console.log("Чётное число")
}
else {
    console.log("Нечётное число")