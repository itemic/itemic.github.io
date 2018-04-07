const whatAmI = () => {
	const choices = ["Studying software engineering at the University of Auckland.",
					 "Follow me on Twitter at @itemic.",
					 "I'm Terran!",
					 "歡迎來到我的網站！",
					 "Here's some randomly generated text.",
					 "The mitochondrion is the powerhouse of the cell.",
					 "I have an otamatone (actually I have two.)",
					 "Taking submissions for more interesting content for my site.",
					 "Welcome to the ∞th redesign of my personal website.",
					 "This even supports emoji! 🍵🐍",
					 "You can use those buttons up there to go to different pages!",
					 "This site is still under construction.",
					 "嗨！",
					 "Not sure."]
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