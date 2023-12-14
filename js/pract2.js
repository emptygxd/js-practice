const money = prompt("Ваш месячный доход?");
const expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
const amount = prompt("Во сколько обойдутся обязательные статьи расходов?");
const deposit = confirm("Есть ли у вас вклад в банке?");
const purpose = 500000;

const budgetMonth = money - amount;
console.log(`Свободный бюджет на месяц: ${budgetMonth}`);

const period = Math.ceil(purpose / budgetMonth);
console.log(`${period} - количество месяцев, необходимых для достижения цели`);

const budgetDay = Math.floor(budgetMonth / 30);
console.log(`Свободный бюджет на 1 день: ${budgetDay}`);

if (budgetMonth >= 60000) {
  console.log("У вас высокий уровень дохода");
} else if (budgetMonth >= 30000 && budgetMonth < 60000) {
  console.log("У вас средний уровень дохода");
} else if (budgetMonth > 0 && budgetMonth < 30000) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что-то пошло не так");
}

/** "Питание, Проезд, Коммунальные услуги"
 *
 *
 */
