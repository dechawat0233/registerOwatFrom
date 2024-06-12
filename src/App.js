import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contents from './Contents';
import Contentss from './Contentss';
import Content from './Content';
import Layout from './Layout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Content /></Layout>} />
      <Route path="/content" element={<Layout><Content /></Layout>} />
      <Route path="/contents" element={<Layout><Contents /></Layout>} />
      <Route path="/contentss" element={<Layout><Contentss /></Layout>} />
    </Routes>
  );
}

export default App;
