function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAnswer(string) {
  return prompt(string);
}

function getResult() {
  if (answer == null) {
    alert("Игра окончена");
    if (history.length == 0) {
      console.log("История пуста");
    } else {
      console.log(history);
    }
  } else if (answer > randomNumber && attempts <= 5) {
    answer = getAnswer(
      `Загаданное чиcло меньше. Осталось попыток: ${5 - attempts}`
    );
    attempts++;
    getResult();
  } else if (answer < randomNumber && attempts <= 5) {
    answer = getAnswer(
      `Загаданное чиcло больше. Осталось попыток: ${5 - attempts}`
    );
    attempts++;
    getResult();
  } else if (answer == randomNumber) {
    history.push(`Игра номер ${gameCounter}. Попыток: ${attempts}`);
    if (confirm("Поздравляю, Вы угадали!!! Хотите сыграть ещё?")) {
      console.log(history);

      gameCounter++;
      attempts = 1;

      randomNumber = getRandomIntInclusive(1, 10);
      answer = getAnswer("Угадайте число от 1 до 10");
      getResult();
    } else {
      console.log(history);
    }
  } else if (attempts > 5) {
    history.push(`Игра №${gameCounter} проиграна :(`);

    if (confirm("Попытки закончились, хотите сыграть ещё?")) {
      console.log(history);

      gameCounter++;
      attempts = 1;

      randomNumber = getRandomIntInclusive(1, 10);
      answer = getAnswer("Угадайте число от 1 до 10");
      getResult();
    } else {
      console.log(history);
    }
  } else if (typeof answer != "number") {
    answer = getAnswer("Введи число!");
    getResult();
  }
}

let attempts = 1;
let gameCounter = 1;
let history = [];

let randomNumber = getRandomIntInclusive(1, 10);
let answer = prompt("Угадайте число от 1 до 10");

getResult();
