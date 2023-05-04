import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import RQProfilePage from './components/RQProfilePage';
import RQUserProfile from './components/RQUserProfile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/rq-profile' element={<RQProfilePage />} />
          <Route path='/rq-user-profile/:userId' element={<RQUserProfile />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
