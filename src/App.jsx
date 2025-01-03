import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [quote, setQuote] = useState('')
	const [author, setAuthor] = useState('')

	useEffect(() => {
		fetchNewQuote()
	}, [])

	const fetchNewQuote = async () => {
		const response = await fetch('https://api.quotable.io/random')
		const data = await response.json()
		setQuote(data.content) // Yangi iqtibosni olish
		setAuthor(data.author) // Yangi muallifni olish
	}

	// Twitter havolasini yaratish
	const tweetQuote = () => {
		const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`
		window.open(tweetUrl, '_blank')
	}

	return (
		<div id='quote-box' className='quote-box'>
			<p id='text'>{quote}</p>
			<p id='author'>- {author}</p>
			<div className='buttons'>
				<button id='new-quote' onClick={fetchNewQuote}>
					New Quote
				</button>
				<a id='tweet-quote' href='#' onClick={tweetQuote} target='_blank' rel='noopener noreferrer'>
					Tweet Quote
				</a>
			</div>
		</div>
	)
}

export default App
