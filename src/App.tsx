import Home from './pages/Home';
import Navigation from './components/Navigation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer2 from './components/Footer2';
import { Menu } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
