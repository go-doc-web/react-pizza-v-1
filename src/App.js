import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import Header from './componets/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// import pizzas from './db.json';

// http://localhost:4444/pizzas

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
