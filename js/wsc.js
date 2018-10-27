// formats:
// A(n) - World
// The - World
// A World -
// The World 

const generate = () => {
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] // yea it's not the letter but the sound but close enough
	const articles = ["A", "The"]
	const formats1 = ["Defunct", "Great","Big", "Unbound", "Transformed", "Unlikely", "Divided", "Entangled", "Imperfect", "Perfect", "Radical", "Mysterious", "Bound", "Closed", "Outside", "Open", "Tiny", "Inside", "Really Really Cool"]
	const formats2 = ["Unbound", "Transformed", "Within", "Unbound", "Without", "in Motion", "in Flux", "in Love", "in Me", "in You", "Away", "on Fire", "Below", "Above", "Encircled", "Enlightened", "United", "Abroad", "Undefined"]

	const article = articles[Math.floor(Math.random() * articles.length)]
	
	if ((Math.floor(Math.random() * 2)) == 1) {
		const format = formats1[Math.floor(Math.random() * formats1.length)]
		const articlen = () => {
			var n = ""
			if (vowels.includes(format.charAt(0))) {
				n = "n"
			}
			if (article === "The") {
				n = ""
			}

			return n;
		}

		return article + articlen() + " " + format + " " + "World"
	} else {
		const format = formats2[Math.floor(Math.random() * formats2.length)]
		return article + " " + "World" + " " + format
	}
}

const element = document.querySelector("#wsctheme")

element.innerText = generate()

