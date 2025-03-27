

import './App.css'
import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {


  return (
    <>

      <NavBar></NavBar>
      {/*<DaisyNav></DaisyNav>*/}
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

      


      
      
    </>
  )
}

export default App
