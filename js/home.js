const whatAmI = () => {
	const choices = ["Terran", "a student", "still studying", "studying software engineering", "from Taiwan", "thinking of more options to put here", "@itemic on Twitter"]
	const choice = choices[Math.floor(Math.random() * choices.length)]
	// console.log(choice)
	return choice
}

const wwdc16Color = () => {
	const choices = ["#d28e5d", "#dc3c3c", "#b73999", "#8485ce", "#64878f", "#95c76f", "#52bd58", "#00aba5", "#4670d8"]
	const choice = choices[Math.floor(Math.random() * choices.length)]
	return choice
}

const whatAmIElement = document.querySelector("#whoami")

whatAmIElement.addEventListener('animationend', () => {
	makeWhatAmI()
	whatAmIElement.classList.remove('run')
	void whatAmIElement.offsetWidth
	whatAmIElement.classList.add('run')
})

const makeWhatAmI = () => {
	whatAmIElement.innerText = whatAmI()
	whatAmIElement.style.color = wwdc16Color()
}

makeWhatAmI()

// setInterval(makeWhatAmI, 2000)