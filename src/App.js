import React from "react";
import './App.css'
import {emojiDict} from './dict'

function App() {
  const [meaning, setMeaning] = React.useState("")

  const handleClick=(name)=>{ 
    setMeaning(name)
  }
 
  const handleChange=(e)=>{
    let inputEmoji = e.target.value
    let resultMeaning = emojiDict.filter((item)=>{
      return item.emoji === inputEmoji
    })
    
    if(resultMeaning.length !== 0){
      setMeaning(resultMeaning[0].name)
    }
    else{
      setMeaning("Sorry we don't know what this emoji means :(")
    }


    
  }
  return (
    <>
    <div className="container">
    <header>Know your emoji</header>
    <label htmlFor="emojiInput">Your emoji can go here:</label><br />
    <input className="emojiInput" onChange={(e)=>handleChange(e)}></input>
    <h2>Meaning: {meaning}</h2>
    <div className="emojiDict">

    <h3> or choose one of these emojis..</h3>
    <ul 
    style={{display:"flex",
    flexDirection:"row",
    cursor:"pointer"}}
    className='emojiList'>
      {emojiDict.map((item)=>{
        return(
          
          <li 
          onClick={()=>handleClick(item.name)}
          style={{
            listStyleType: "none",
          fontSize:"24px"}} 
          key={item.id} 
          
          >
              {item.emoji}

          </li>
          )
        })
      }
      </ul>

      </div>
    </div>
    </>
  )

}
    

export default App;

