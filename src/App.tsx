import { Card } from './design/Card'
import './App.css'
import { Button } from './design/Button'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const loginPage = (
    <div className="flex justify-center items-center bg-black" style={{width: '100vw', height: '100vh', margin: '0px', padding: '0px'}}>
      <Card>
        <div className="flex justify-center items-center p-10">
          <img src="../public/bowser.webp"></img>
        </div>
        <p style={{ color: "white" }}>Hey, pas si vite ! Vous n'êtes pas connecté</p>
        <br/>
        <div className="flex p-0 m-0 justify-center items-center">
          <div onClick={toggleLogin} className="w-fit">
            <Button> Se connecter </Button>
          </div>
        </div>
        <br/>
        <br/>
      </Card>
    </div>
  )

  const homePage = (
    <div className="justify-center items-center bg-black">
      
      <div className="flex justify-center items-center bg-black m-0 p-0" style={{width: '100vw', height: '100vh'}}>
        <div style={{width: '80%', height: '100%'}}>
          <div className="flex justify-end p-0 mt-5 mb-5" style={{height: "5%"}}>
            <div onClick={toggleLogin} className="w-fit">
              <button className="p-0" style={{ background: 'transparent' }}> 
                <span className="text-3xl">Se déconnecter</span>
              </button>
            </div>
          </div>
          <div className="m-0" style={{height: "90%"}}>
            <div className="grid grid-rows-3 grid-cols-4 gap-4" style={{height: "90%"}}>
              <div className="gridCell row-span-1 col-span-1">01</div>
              <div className="gridCell row-span-1 col-span-1">02</div>
              <div className="gridCell row-span-2 col-span-2">03</div>
              <div className="gridCell row-span-1 col-span-2">04</div>
              <div className="gridCell row-span-1 col-span-1">06</div>
              <div className="gridCell row-span-1 col-span-1">07</div>
              <div className="gridCell row-span-1 col-span-1">08</div>
              <div className="gridCell row-span-1 col-span-1">09</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return isLoggedIn ? homePage : loginPage
}

export default App
