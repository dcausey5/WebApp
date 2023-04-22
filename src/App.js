import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Database from './components/Database'
import Layout from './components/Layout'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/database" element={<Database/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App