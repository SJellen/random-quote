import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([])
  
  
  useEffect(() => {
   fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
   .then(res => res.json())
   .then(
       (result) => {
           setItems(result)
           
          
       }
   )
   .catch(error => console.log(error))
  }, [])


  const reload = () => window.location.reload()
   

  return (
    <div className="App">
              <blockquote className="quote-box" id="quote-box">
                <p className="text" id="text">{items.en}</p>
                <span className="author" id="author">-{items.author}</span>

                <a href="twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote">Tweet</a>
                <button  id="new-quote">Random</button>
            </blockquote>
    </div>
  );
}

export default App;
