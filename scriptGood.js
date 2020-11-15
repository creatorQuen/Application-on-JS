
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let quastionFirts = prompt("Введите обязательную статью расходов в этом месяце", '');
let quastionSecond = prompt("Во сколько обойдется?", '');
let	q3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	q4 = prompt("Во сколько обойдется?", '');

appData.expenses.quastionFirts = q2;
appData.expenses.q3 = q4;

alert(appData.budget / 30);