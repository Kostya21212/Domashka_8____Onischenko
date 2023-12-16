const MIN_LENGTH = 1;
const MAX_LENGTH = 10;

function isArrayNumbersValid(userAddNum) {
    const numbers = +userAddNum;
    if (userAddNum === null) {
        alert('Окей, дякуємо за відвідування сайту!');
        return false;
    }
    if (!userAddNum.trim() || numbers <= 0 || !Number.isInteger(numbers)) {
        alert('Помилка, будь ласка введіть ще раз число');
        return false;
    }
    if (numbers < MIN_LENGTH) {
        alert('Короткий масив');
        return false;
    }
    if (numbers > MAX_LENGTH) {
        alert('Занадто велика кількість чисел');
        return false;
    }
    return true;
}

function arrayNumber() {
    const userAddNum = prompt('Введіть будь ласка кількість чисел, які ви будете використовувати');
    if (isArrayNumbersValid(userAddNum)) {
        const numbers = +userAddNum;
        const userArray = [];

        for (let i = 0; i < numbers; i++) {
            const userElement = prompt(`Введи ${i + 1} елемент`);
            if (userElement === null) {
                alert('Добре, допобачення!');
                break;
            }
            userArray.push(Number(userElement));
        }

        if (userArray.length === numbers) {
            userArray.sort((a, b) => a - b);
            alert('Введені елементи користувача: ' + userArray.join(', '));
            const sum = userArray.reduce((a, b) => a + b, 0);
            alert(`Сума введених чисел: ${sum}`);
        }
    }
}

arrayNumber();

            
        

