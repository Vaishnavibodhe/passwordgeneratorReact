import React ,{useState} from 'react'
import './App.css';
import {Uc ,Lc ,Nc ,Sc} from './Data/UseChar';
const App = () => {
//logic part
let [upperCase, setUppercase] = useState(false)
let [lowerCase, setLowercase] = useState(false)
let [numbers,setNumbers] = useState(false)
let [symbols, setSymbols] = useState(false)
const [passwordLength, setpasswordLength] = useState(9)//for length of passwrd
const [fPass, setFpass] = useState('')//this is for our text box which show text input


let createPassword=()=>{
  let finalPass='';
  let charSet="";//empty charset to fill value
  if(upperCase || lowerCase || numbers || symbols){
  if(upperCase) charSet+=Uc;//from data file we hv add that data to it as there
  //checkbox
  if(lowerCase) charSet+=Lc;
  if(numbers) charSet+=Nc;
  if(symbols) charSet+=Sc;
 // console.log(charSet)
  for(let i=0;i<=passwordLength;i++){ //all char will be store in final pass 
    finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    //why we use math.floor ..with random we will get .5,.6 like this so prevent this we use floor
  }
  setFpass(finalPass);//in setFpass we r setting final value which display on input
  }
  else{//if vaccant chckbox then alert
    alert("please one checkbox")
  }
}
//condistion for selecting box or not 

  return (
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>

      <div className="boxIn">
       <input type="text" value={fPass} readOnly/> <button >Copy</button>
      </div>
    <div className="passLength">
      <label>PaaswordLength</label>
      <input type="number" max={20} min={10} value={passwordLength}
       onChange={(event)=>setpasswordLength(event.target.value)}/>
    </div>

    <div className="passLength">
      <label>Including Uppercase Letters</label>
      <input type='checkBox' checked={upperCase} onChange={()=>
        setUppercase(!upperCase)
      }/>
    </div>

    <div className="passLength">
      <label>Including LowerCase Letters</label>
      <input type='checkBox' checked={lowerCase} onChange={()=>
        setLowercase(!lowerCase)
      }/>
    </div>
    <div className="passLength">
      <label>Including Numbers</label>
      <input type='checkBox' checked={numbers} onChange={()=>
        setNumbers(!numbers)
      }/>
    </div>

    <div className="passLength">
      <label>Including Symbols</label>
      <input type='checkBox' checked={symbols} onChange={()=>
        setSymbols(!symbols)
      }/>
    </div>
    <button className="btn" onClick={createPassword}>Generate Password</button>
    </div>
    </>
  )
}

export default App