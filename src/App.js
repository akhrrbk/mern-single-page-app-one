import './App.css';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Tour from './pages/Tour'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
