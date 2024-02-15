const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'game.log');

const choices = ['Орел', 'Решка'];

console.log('Добро пожаловать в игру "Орел и Решка"');
console.log('Выберите число: ');
console.log('1 - Орел');
console.log('2 - Решка');

const logChoice = (choice) => {
  fs.appendFile(filePath, choice + '\n', (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    }
  });
};

const playGame = choiceIndex => {
	if (choiceIndex === 1 || choiceIndex === 2) {
		const computerChoiceIndex = Math.floor(Math.random() * choices.length)
		const computerChoice = choices[computerChoiceIndex]
		const playerChoice = choices[choiceIndex - 1]

		console.log(`Вы выбрали: ${playerChoice}`)
		console.log(`Компьютер выбрал: ${computerChoice}`)

		if (playerChoice === computerChoice) {
			console.log('Поздравляю! Вы выиграли!')
			logChoice('win')
		} else {
			console.log('Увы! Попробуйте еще раз!')
			logChoice('loss')
		}
	} else {
		console.log('Недопустимый выбор. Попробуйте снова.')
	}
}

fs.writeFile(filePath, '', err => {
	if (err) {
		console.error('Ошибка при создании файла:', err)
	} else {
		const rl = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		})

		rl.on('line', input => {
			const choiceIndex = parseInt(input)
			playGame(choiceIndex)
			rl.close()
		})
	}
})
