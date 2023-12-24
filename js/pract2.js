function isNumber(input) {
  if (typeof input == "number" && !isNaN(input)) {
    return input;
  } else {
      input = Number(prompt("Это не число. Попробуйте ещё раз"));
      isNumberArray = isNumber(input);
      return isNumberArray
  }
}

let money = Number(prompt("Ваш месячный доход?"));
money = isNumber(money);

const expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);

let amount = Number(prompt("Во сколько обойдутся обязательные статьи расходов?"));
amount = isNumber(amount);


const deposit = confirm("Есть ли у вас вклад в банке?");
const purpose = 500000;

const budgetMonth = money - amount;
console.log(`Свободный бюджет на месяц: ${budgetMonth}`);

const period = Math.ceil(purpose / budgetMonth);
console.log(`${period} - количество месяцев, необходимых для достижения цели`);

const budgetDay = Math.floor(budgetMonth / 30);
console.log(`Свободный бюджет на 1 день: ${budgetDay}`);

if (budgetMonth >= 60000 && typeof(budgetMonth) == 'number') {
  console.log("У вас высокий уровень дохода");
}
if (budgetMonth >= 30000 && budgetMonth < 60000 && typeof(budgetMonth) == 'number') {
  console.log("У вас средний уровень дохода");
}
if (budgetMonth > 0 && budgetMonth < 30000 && typeof(budgetMonth) == 'number') {
  console.log("К сожалению у вас уровень дохода ниже среднего");
}
if (budgetMonth < 0 || typeof(budgetMonth) != 'number') {
  console.log("Что-то пошло не так");
}
