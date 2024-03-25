// Task  1

function calculate() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const operator = document.getElementById('operator').value;
  const resultDiv = document.getElementById('result');
  let result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
        result = 'Неможливо поділити на нуль';
      } else {
        result = number1 / number2;
      }
      break;
    default:
      result = 'Невідома операція';
  }

  resultDiv.innerHTML = 'Результат: ' + result;
}


// Task 2
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  const result = document.getElementById("password");
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  result.textContent = "Випадковий пароль: " + password;
}


// Task 3
function countWords() {
  const text = document.getElementById('textInput').value.trim();
  const wordArray = text.split(/\s+/);
  const wordCount = wordArray.length;
  const result = document.getElementById('wordCount');

  result.textContent = 'Кількість слів: ' + wordCount;
}

