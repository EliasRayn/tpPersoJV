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
    <div className="flex justify-center items-center bg-black" style={{width: '100vw', height: '100vh', margin: '0px', padding: '0px'}}>
      <Card>
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
      <div className="gridCell row-span-1 col-span-1">01</div>
      <div className="gridCell row-span-1 col-span-1">02</div>
      <div className="gridCell row-span-2 col-span-2">03</div>
      <div className="gridCell row-span-1 col-span-2">04</div>
      <div className="gridCell row-span-1 col-span-1">06</div>
      <div className="gridCell row-span-1 col-span-1">07</div>
      <div className="gridCell row-span-1 col-span-1">08</div>
      <div className="gridCell row-span-1 col-span-1">09</div>
    </div>
        <div className="flex p-0 m-0 justify-center items-center">
          <div onClick={toggleLogin} className="w-fit">
            <Button> Se déconnecter </Button>
          </div>
        </div>
      </Card>
    </div>
  )

  return isLoggedIn ? homePage : loginPage
}

export default App
