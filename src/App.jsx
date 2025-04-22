
import { Box } from '@chakra-ui/react'
import './App.css'
import Navbar from './layouts/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Foter from './pages/Foter'

function App() {
//   const appStyles={
// with:'100vw',
// h:"100vh"
//   }

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>} />
    </Routes>
    </BrowserRouter>
    {/* <Box sx={appStyles}>
    </Box> */}
    </>
  )
}

export default App
