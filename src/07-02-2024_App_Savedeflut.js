import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contents from './Contents';
import Contentss from './Contentss';
import Content from './Content';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserForm from './UserForm';
import UserForm2 from './UserForm2';


function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   image: null,
    
  // });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
    choose: [],
  });
  return (
    <Routes>
      <Route path="/" element={<Layout><Content /></Layout>} />
      {/* <Route path="/content" element={<Layout><Content /></Layout>} /> */}
      <Route path="/contents" element={<Layout><Contents /></Layout>} />
      <Route path="/contentss" element={<Layout><Contentss /></Layout>} />
      {/* <Route path="/userForm" element={<Layout><UserForm /></Layout>} /> */}
      <Route path="/userForm" element={<UserForm formData={formData} setFormData={setFormData} />} />
      <Route path="/upload" element={<UserForm2 formData={formData} setFormData={setFormData} />} />
    </Routes>
  );
}

export default App;
