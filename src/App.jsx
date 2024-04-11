
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoinPage from './components/coinpage/CoinPage';
import UserContext from './components/UserContext';

function App() {

  return (
    <UserContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          {/* <Route path='/' element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext>

  )
}

export default App
