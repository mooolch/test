'use strict'

document.querySelector('button').addEventListener('click', e => {
	if (!document.querySelector('textarea').value) e.preventDefault()
})

document.querySelector('form').addEventListener('submit', function (e) {
	const text = this.querySelector('textarea').value
	const res = text.match(/(\p{L})|([A-Za-z0-9])/gu)
	this.querySelector('#res').innerText = `${res.length}`
	e.preventDefault()
})
