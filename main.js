// Получаем случайное число от 1 до 100
const randomNum = Math.floor(Math.random() * 100) + 1;

// Создаем элемент для отображения числа
const numberElement = document.createElement("p");
numberElement.textContent = `Случайное число: ${randomNum}`;

// Добавляем элемент в DOM (например, в body)
document.body.appendChild(numberElement);
