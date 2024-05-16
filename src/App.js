import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contents from './Contents';
import Contentss from './Contentss';
import Content from './Content';
function App() {
  return (
    <Routes>
      <Route path='/content' element={<Content />} />
      <Route path='/contents' element={<Contents />} />
      <Route path='/contentss' element={<Contentss />} />
    </Routes>
  );
}

export default App;
