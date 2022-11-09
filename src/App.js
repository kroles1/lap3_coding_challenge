import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Search, User, Repo } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Search/>}>
          <Route path=':user' element={<User/>}>
            <Route path=':repo' element={<Repo/>}></Route>
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
