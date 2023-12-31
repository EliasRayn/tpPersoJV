import { Card } from './design/Card'
import './App.css'
import { Button } from './design/Button'
import { useState } from 'react'
import { LogoCircularFrame } from './design/LogoCircularFrame';

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
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/mario.webp" alt="Mario" topOffset="20%"/>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/v.webp" alt="V" topOffset="0%"/>
                </Card>
              </div>
              <div className="gridCell row-span-2 col-span-2">
                <Card width="100%" height="100%">
                <div className="flex items-center">
                  <div className="ml-auto w-1/2" style={{ marginRight: '30%' }}>
                    <img src="public/pikachu.png" alt="Pikachu"></img>
                  </div>
                </div>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-2">
                <Card width="100%" height="100%">
                  <div className="flex h-full">
                    <div className="w-4/6 h-full">
                      
                    </div>
                    <div className="flex justify-center items-center w-2/6 h-full">
                      <LogoCircularFrame width="10vw" src="../public/halo.jpeg" alt="halo" topOffset="20%" transform="scale(1.8)"/>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/ethan.jpeg" alt="Ethan" topOffset="0%"/>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/solidSnake.webp" alt="Solid Snake" topOffset="20%"/>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/kratos.png" alt="Kratos" topOffset="20%"/>
                </Card>
              </div>
              <div className="gridCell row-span-1 col-span-1">
                <Card width="100%" height="100%">
                  <LogoCircularFrame width="4vw" src="../public/aloy.webp" alt="Aloy" topOffset="10%" transform="scale(1.4)"/>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return isLoggedIn ? homePage : loginPage
}

export default App
