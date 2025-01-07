
import './App.css';
import { useState,useEffect} from 'react';
function App() {
  
  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const [catagorie,setcatagorie] = useState('');
  const [load,setLoad] = useState(false)
  useEffect(()=>{
    newQuote()
  },[])
  const newQuote = ()=>{
    setLoad(false)
      fetch(
        "https://api.api-ninjas.com/v1/quotes",{
          headers:{ 'X-Api-Key': 'weY4XZmup3XL9+/3EebwSg==Bdwq6Lo37kEMvJqy'},
          contentType: 'application/json',
          method:"GET"
        })
        .then(
          (res)=>{return res.json()},
          (rej)=>{console.log("Free")}
        )
        .then((json)=>{
          setQuote(json[0].quote)
          setAuthor(json[0].author)
          setcatagorie(json[0].category)
          setLoad(true)
        })
        .catch((e)=>{console.log("Error Occured : "+ e)})
        
  }
  return (
    <div id="quote-box">
      {!load &&<i className='fa fa-spinner fa-spin fa-lg fa-custome'></i>}
      {load && <div id="quote-text">
          <i className="fa fa-quote-left"> </i>
          <span id="text">{quote}</span>
          <p id="author">- {author}</p>
        </div>}
      <div className="buttons">
          <a target="_top" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=${catagorie}&text="${quote}"`} id="tweet-quote" className="button"><i className="fa fa-twitter"></i></a>
          <button id="new-quote" className="button" onClick={()=>{newQuote()}}>New quote</button>
      </div>
    </div>
  );
}

export default App;
