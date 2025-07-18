import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UC } from './data/PassChar'
import { LC } from './data/PassChar'
import { NC } from './data/PassChar'
import { SC } from './data/PassChar'
function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordlen]=useState(10)
  let [fpass,setFpass]= useState('')
  let createpassword=()=>{
    let charSet=''
    let finalpass=''
   if(uppercase || lowercase || number || symbol){
     if(uppercase) charSet+=UC;
     if(lowercase) charSet+=LC;
     if(number)    charSet+=NC;
     if(symbol)    charSet+=SC;

     for(let i=0;i<passwordlen;i++){
      finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setFpass(finalpass)
     }

   else{
    alert("please select  one checkbox")
   }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className='passwordBox '>
        <h2 className='text-black bold text-center my-3 text-3xl '>Password Generator</h2>
        <div className="  flex shadow rounded-lg overflow-hidden mb-4 bg-white mt-3 p-3 ">
          <input  type="text" value={fpass}
         
         className="outline-none w-full py-1 px-3 text-black  text-xl "
         readOnly/>
         <button
         
         className='bg-blue-600 px-3 py-0.5 shrink-0 cursor-pointer' onClick={copyPass}>copy</button>
        </div>
        <div className='passlength flex'>
          <label className='text-xl' >Password length</label>
          <input className='bg-white text-black text-xl ' type="number"  value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)} max={20} min={8} />
        </div>

        <div className='passlength flex'>
          <label className='text-xl' >Include uppercase Letters</label>
          <input className='bg-white text-black text-xl' type="checkbox" max={20} checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passlength flex'>
          <label className='text-xl' >Include lowercase Letters</label>
          <input className='bg-white text-black text-xl' type="checkbox" max={20} checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>

        <div className='passlength flex'>
          <label className='text-xl' >Include numbers</label>
          <input className='bg-white text-black text-xl' type="checkbox" max={20} checked={number} onChange={()=>setNumber(!number)} />
        </div>
        <div className='passlength flex'>
          <label className='text-xl' >Include symbols</label>
          <input className='bg-white text-black text-xl' type="checkbox" max={20} checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>
        <button className='btn' onClick={createpassword}>
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
