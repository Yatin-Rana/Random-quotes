import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random")
      .then(response => response.json())
      .then(data => {
        const desiredData = data[0].content;
        const desiredAuthor = data[0].author;
        setQuote(desiredData);
        setAuthor(desiredAuthor);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        {quote}<br></br>
        by:{author}
      </div>
    </>
  );
}

export default App;
