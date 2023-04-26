import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import RQProfilePage from './components/RQProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/rq-profile' element={<RQProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
