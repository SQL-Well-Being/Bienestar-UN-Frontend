import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import './App.css'
import useToken from './hooks/useToken';

function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <>
    <BrowserRouter>
    
      <Routes>

        <Route path='/login' element={<Login setToken={setToken}/>}/>
        <Route path= '/dashboard' element={<Dashboard/>}/>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App
