const MIN_LENGTH = 1;
const MAX_LENGTH = 1000;

function isArrayNumbersValid(userInput) {
    if (userInput === null) {
        alert('Окей, дякуємо за відвідування сайту!');
        return false;
    }

    const userArray = userInput.split(/[,\s]+/).map(element => parseFloat(element.trim()));

    if (!userArray.every(isFinite) || userArray.length < MIN_LENGTH || userArray.length > MAX_LENGTH) {
        alert('Помилка. Будь ласка, введіть коректні дані для всіх елементів.');
        return false;
    }

    return true;
}

function arrayNumber() {
    const userInput = prompt('Введіть всі елементи через кому та/або пробіл (наприклад, "2,3 ,5")', '2,3 ,5');

    if (isArrayNumbersValid(userInput)) {
        const userArray = userInput.split(/[,\s]+/).map(element => parseFloat(element.trim()));

        userArray.sort((a, b) => a - b);
        alert('Введені елементи користувача: ' + userArray.join(', '));
        const sum = userArray.reduce((a, b) => a + b, 0);
        alert(`Сума введених чисел: ${sum}`);
    }
}

arrayNumber();

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

