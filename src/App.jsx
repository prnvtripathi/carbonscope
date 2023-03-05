import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
