import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
