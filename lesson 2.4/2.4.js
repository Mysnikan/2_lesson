let screenPrice = 20000
let percentage = 6



let titleProject = prompt('Название проекта')
console.log(titleProject);

let screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt ('Нужен ли респонсив на сайте?')
console.log(responsive);

let service = prompt ('Какой дополнительный тип услуги нужен?')
console.log(service);

let servicePrice = +prompt('Сколько это будет стоить?')
console.log(servicePrice);

let serviceSecond = prompt('Какой дополнительный тип услуги нужен?')
console.log(serviceSecond);

let servicePriceSecond = +prompt('Сколько это будет стоить?')
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond
console.log(fullPrice);



let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'процент подрядчику: ');

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'итоговая сумма проекта за вычетом %');


//скидка

if(fullPrice > 50000){
    console.log('делаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('делаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    сonsole.log('скидки нет');
} else if (fullPrice < 0) {
    console.log('что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('проверка на строгое равенство');
}


