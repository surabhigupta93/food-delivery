import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.less';
import './assets/stylesheets/main.less'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="dashboard" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
