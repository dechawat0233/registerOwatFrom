import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contents from "./Contents";
import Contentss from "./Contentss";
import Content from "./Content";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import UserForm from "./UserForm";
import UserForm2 from "./UserForm2";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    choose: [],
    agency: "",
    phone: "",
    idNumber: "",
    image: null,
    startDate: "",
    position: "",
    agency2: "",
    names: "",
    age: "",
    birthdate: "",
    nationality: "",
    ethnicity: "",
    religion: "",
    cardnumber: "",
    country: "",
    address: "",
    etc: "",
    phones: "",
    contactPhone: "",

    // content ss
    fatherName: "",
    fatherAge: "",
    fatherJob: "",
    motherName: "",
    motherAge: "",
    motherJob: "",
    familyStatus: "",
    spouseName: "",
    spouseNationality: "",
    spouseJob: "",
    spouseWorkplace: "",
    spousePhone: "",
    spouseMobile: "",
    marriageRegistration: "",
    child: "",
    numChildren: "",
    numChildrenStudying: "",
    numChildrenUnder6: "",
    birthdateChildrenUnder6: "",
    employees: [],

    ///// content s
    educationData: [],
    workHistory: [],
    accountBook: "",
    bankname: "",
    bankBranch: "",
    emergencyName: "",
    parentContact: "",
    Contact: "",
    emergencyContact: "",
    Contactt: "",
    rideBicycle: "",
    ridingMotorcycle: "",
    driverLicenseType: "",
    licenseNumber: "",
    expiryDate: "",
    canWorkAnyWhere: "",
    reason: "",
    documents: [],
  });

  const logFormData = () => {
    console.log(formData);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Content formData={formData} setFormData={setFormData} />
          </Layout>
        }
      />
      {/* <Route path="/content" element={<Layout><Content /></Layout>} /> */}
      <Route
        path="/contents"
        element={
          <Layout>
            <Contents formData={formData} setFormData={setFormData} />
          </Layout>
        }
      />
      <Route
        path="/contentss"
        element={
          <Layout>
            <Contentss formData={formData} setFormData={setFormData} />
          </Layout>
        }
      />
      {/* <Route path="/userForm" element={<Layout><UserForm /></Layout>} /> */}
      <Route
        path="/userForm"
        element={<UserForm formData={formData} setFormData={setFormData} />}
      />
      <Route
        path="/upload"
        element={<UserForm2 formData={formData} setFormData={setFormData} />}
      />
    </Routes>
  );
}

export default App;
