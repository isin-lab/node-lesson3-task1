const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const choices = ['Орел', 'Решка']

console.log('Добро пожаловать в игру "Орел и Решка"')
console.log('Выберите число: ')
console.log('1 - Орел')
console.log('2 - Решка')

rl.on('line', input => {
	const choiceIndex = parseInt(input)

	if (choiceIndex === 1 || choiceIndex === 2) {
		const computerChoiceIndex = Math.floor(Math.random() * choices.length)
		const computerChoice = choices[computerChoiceIndex]
		const playerChoice = choices[choiceIndex - 1]

		console.log(`Вы выбрали: ${playerChoice}`)
		console.log(`Компьютер выбрал: ${computerChoice}`)

		if (playerChoice === computerChoice) {
			console.log('Поздравляю! Вы выиграли!')
		} else {
			console.log('Увы! Попробуйте еще раз!')
		}

		rl.close()
	} else {
		console.log('Недопустимый выбор. Попробуйте снова.')
	}
})


