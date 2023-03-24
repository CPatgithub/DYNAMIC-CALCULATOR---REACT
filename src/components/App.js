import React,{useState,useEffect} from 'react'
import '../styles/App.css';

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  return (
    <div id="main">
      <input id='input1' onChange={(e)=>{
        setInput1(Number(e.target.value));
      }}/>
       +
      <input id='input2' onChange={
        (e) =>{
          setInput2(Number(e.target.value));
        }
      }/> 
       
      <p id='result'>{input1+input2}</p>
    </div>
  )
}


export default App;
