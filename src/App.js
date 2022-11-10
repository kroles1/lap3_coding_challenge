import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Repo, User } from './pages'

function App() {
    return (
        <div>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path=":user" element={<User />}>
                  <Route path=":repo" element={<Repo />}></Route>
                </Route>
              </Route>
            </Routes>
          </main>
        </div>

    )
}

export default App;
