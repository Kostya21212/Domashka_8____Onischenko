const MIN_LENGTH = 1;
const MAX_LENGTH = 1000;

function isArrayNumbersValid(userAddNum) {
    const numbers = parseInt(userAddNum, 10);

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
    const userAddNum = prompt('Введіть будь ласка кількість чисел та всі елементи через пробіл');

    if (isArrayNumbersValid(userAddNum)) {
        const numbers = parseInt(userAddNum, 10);
        const userInput = prompt('Введіть всі елементи через пробіл');
        const userArray = userInput.split(' ').map(element => Number(element));

        if (userArray.length !== numbers || userArray.some(isNaN)) {
            alert('Помилка. Будь ласка, введіть коректні дані для всіх елементів.');
            return;
        }

        userArray.sort((a, b) => a - b);
        alert('Введені елементи користувача: ' + userArray.join(', '));
        const sum = userArray.reduce((a, b) => a + b, 0);
        alert(`Сума введених чисел: ${sum}`);
    }
}

arrayNumber();


for(let i = 10; i > 0 ;i--){
    if(i==2)break
    
    console.log(i)
}
