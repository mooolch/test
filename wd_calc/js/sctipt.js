'use strict'

document.querySelector('button').addEventListener('click', e => {
	if (!document.querySelector('textarea').value) e.preventDefault()
})

document.querySelector('form').addEventListener('submit', function (e) {
	const textArea = this.querySelector('textarea')
	const text = textArea.value
	const text2 = text.match(/(\p{L})|([A-Za-z0-9])/gu)
	document.querySelector('#res').innerText = `${text2.length}`
	e.preventDefault()
})
