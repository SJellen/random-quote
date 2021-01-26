import React, {useEffect, useState} from 'react';
import './App.css';






function App() {
  const [items, setItems] = useState([])
  const [currentColor, setColor] = useState("#436f8a")

  const colorList = ["#221f3b","#394989","#0f4c75","#204051","#2f2519","#184d47","#562349","#1f4068","#30475e","#222831","#4d3e3e","#442727","#363636","#084177","#7d5e2a","#2d132c","#706c61","#272343"]


  
  useEffect(() => {
   fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
   .then(res => res.json())
   .then(
       (result) => {
           setItems(result.data[0])
       }
   )
   .catch(error => console.log(error))
  }, [])

  console.log(items.quoteAuthor, items.quoteText)

  function handleClick() {
    let color = colorList[Math.floor(Math.random() * colorList.length)]
    setColor(color)
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
   .then(res => res.json())
   .then(
       (result) => {
          
           setItems(result.data[0])    
       }
   )
   .catch(error => console.log(error))
  }

  

  let quote = items.quoteText
  let author = items.quoteAuthor

  const twitterMax = 280
  const twitterUrl = new URL("https://twitter.com/intent/tweet")
    twitterUrl.searchParams.append(
      "text",
      `${quote} - ${author}`.slice(null, twitterMax)
    );
   

  return (
    <div className="App  trans-color" style={{backgroundColor: currentColor}}>
              <blockquote className="quote-box" id="quote-box">
                <p className="text trans-color" id="text" style={{color: currentColor}}>{quote}</p>
                <span className="author trans-color" id="author" style={{color: currentColor}}>-{author}</span>

                <a href={twitterUrl.href} target="_blank" rel="noopener noreferrer" id="tweet-quote">Tweet</a>
                <button  id="new-quote" onClick={handleClick} style={{backgroundColor: currentColor}}>New Quote</button>
            </blockquote>
    </div>
  );
}

export default App;
