console.log("Вы зашли на сайт")

let
currentDate = new Date ();
console.log(currentDate);

let checkSpot = prompt('Добро Пожаловать на мой сайт. Войдите в свой аккаунт(если он у вас есть) А если не то зарегистрируйтесь');
let message = (checkSpot === 'Хорошо')? 'Спасибо что выбрали нас' : '' 
console.log(message);
