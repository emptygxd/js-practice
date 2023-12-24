const money = Number(prompt("Ваш месячный доход?")) 
const expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
const amount = Number(prompt("Во сколько обойдутся обязательные статьи расходов?"));
const deposit = confirm("Есть ли у вас вклад в банке?");
const purpose = 500000;
const profit = "рента";

const extraMoney = Number(prompt(
  `Перечислите возможный доход за ваши дополнительные работы: ${profit}`
));

function getAccumulatedIncome(income, expenses, extraIncome) {
  return income + extraIncome - expenses;
}

function getTargetMonth(accumulatedIncomeResult, goal) {
  return Math.ceil(goal / accumulatedIncomeResult);
}

let accumulatedIncome = getAccumulatedIncome(money, amount, extraMoney);
let period = getTargetMonth(accumulatedIncome, purpose)
const budgetDay = Math.round(accumulatedIncome / 30)

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}`)
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${period} месяца`)
console.log(`Дневной бюджет: ${budgetDay}`)
