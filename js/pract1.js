const money = 40000;
const profit = "рента";
const expenses = "Питание, Проезд, Коммунальные услуги";
const purpose = 500000;
const period = 10;
const budgetDay = money / 30;

console.log(typeof money);
console.log(typeof profit);
console.log(expenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} рублей`);
console.log(Math.round(budgetDay));

const expensesArr = [expenses.toLowerCase().split(", ")];

expensesArr.forEach((element) => {
  console.log(element);
});
