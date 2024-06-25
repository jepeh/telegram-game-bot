import { useEffect, useState } from 'react'
import './App.css'

const tele = window.Telegram.WebApp
var ready = false
function App() {

  useEffect(()=>{
    if (!ready) {
      ready = true
    tele.ready()

    tele.MainButton.text = "Hi! I'm Jasper"
    tele.MainButton.show()
    }


  })

  const [count, setCount] = useState(0)
  const [scale, setScale] = useState(1)

  const clickMe = ()=>{
    setCount(count + 1)
   setScale(1.2)

   setTimeout(()=>{
    setScale(1)
   }, 200)
  
  }

const colors = ["#FFEB", "#2E7D32", "#64B5F6", "#FFAB91"]

  const generateRandomColor = () => {
    // Generating a random hexadecimal color
    var ran = Math.floor(Math.random() * 6);
    const randomColor = colors[ran]
    
    return randomColor;
  };


  return (
    <>
    
    <img className='relative w-[230px] select-none draggable-none' src="public\jasper.png"/>

    <p onClick={clickMe} className={`bg-white p-3 text-4xl text-[#000] rounded-[10px] select-none`}>Click Me!</p>
    <p className='text-5xl mt-10'>{count}</p> 

    </>
  )
}

export default App
