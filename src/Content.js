import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./App.css";

function Content({ formData, setFormData }) {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const newChoices = checked
        ? [...prevData.choose, name]
        : prevData.choose.filter((choice) => choice !== name);
      return { ...prevData, choose: newChoices };
    });
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({ ...prevData, address: [e.target.value] }));
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   agency: "",
  //   phone: "",
  //   idNumber: "",
  //   // Add other fields as necessary
  // });

  // const [image, setImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const navigate = useNavigate();

  const handleCheck = (checkboxName) => {
    const newCheckboxes = { ...checkboxes };
    newCheckboxes[checkboxName] = !newCheckboxes[checkboxName];
    setCheckboxes(newCheckboxes);
  };

  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);

  const handleNextPage = () => {
    navigate("/contentss");
  };

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };
  const handleImageUpload = (event) => {
    // const file = event.target.files[0];
    // setImage(file);
    // setImageURL(URL.createObjectURL(file));

    const file = event.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formDataObj = new FormData();
  //   formDataObj.append("image", image);
  //   for (const key in formData) {
  //     formDataObj.append(key, formData[key]);
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/submit",
  //       formDataObj,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     // Handle success (e.g., navigate to another page or show a success message)
  //   } catch (error) {
  //     console.error("There was an error submitting the form!", error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contentss");
  };

  const handleDeleteAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/delete", {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("All users deleted successfully");
        // Optionally, refresh your users list or redirect
      } else {
        console.error("Failed to delete users");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("formData", formData);
  return (
    <div className="container-wrapper">
      <div className="h1">
        <h1>ใบรับสมัครพนังงาน</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container-2">
          <div className="textcontainer-2">
            <div class="row">
              <div class="col-md-9">
                <section class="Frame">
                  <h2>การสมัครงานทราบข่าวจาก</h2>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      // checked={checkboxes.checkbox1}
                      // onChange={() => handleCheck("checkbox1")}
                      name="leaflet"
                      checked={formData.choose.includes("leaflet")}
                      onChange={handleCheckboxChange}
                      className="custom-checkbox-1"
                    />
                    <label>ใบปลิว</label>

                    <input
                      type="checkbox"
                      // checked={checkboxes.checkbox2}
                      // onChange={() => handleCheck("checkbox2")}
                      name="by a friend"
                      checked={formData.choose.includes("by a friend")}
                      onChange={handleCheckboxChange}
                      className="custom-checkbox-1"
                    />
                    <label>เพื่อนแนะนำ</label>

                    <input
                      type="checkbox"
                      // checked={checkboxes.checkbox3}
                      // onChange={() => handleCheck("checkbox3")}
                      name="Office sign"
                      checked={formData.choose.includes("Office sign")}
                      onChange={handleCheckboxChange}
                      className="custom-checkbox-1"
                    />
                    <label>ป้ายหน้าออฟฟิต</label>

                    <input
                      type="checkbox"
                      // checked={checkboxes.checkbox4}
                      // onChange={() => handleCheck("checkbox4")}
                      name="by staff"
                      checked={formData.choose.includes("by staff")}
                      onChange={handleCheckboxChange}
                      className="custom-checkbox-1"
                    />
                    <label>เจ้าหน้าที่แนะนำ</label>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <h4>ชื่อ - นามสกุล (ผู้ที่แนะนำมาสมัคร)</h4>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        class="form-control"
                      />

                      {/* <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        class="form-control"
                      /> */}
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <h4>หน่วยงาน</h4>
                      <input
                        type="text"
                        id="agency"
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}
                        class="form-control"
                      />
                    </div>
                    <div class="col-md-6">
                      <h4>เบอร์โทรศัพท์</h4>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-12">
                      <h4>
                        เลขที่หลังบัตรประชาชนผู้สมัคร
                        (เพื่อใช้ยื่นแสดงรายได้ประจำปี)
                      </h4>
                      <input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        class="form-control"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div class="col-md-3">
                <h2></h2>

                {/* <input type="file" onChange={handleImageUpload} />
                {image && <p>Selected file: {image.name}</p>} */}

                {/* {image && <p>Selected file: {image.name}</p>} */}
                {imageURL && (
                  <img
                    src={imageURL}
                    alt="Selected"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <input type="file" onChange={handleImageUpload} />
                {/* <Form>
    
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>วันที่เริ่มทำงาน</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>ตำแหน่ง</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>หน่วยงาน</Form.Label>
                    <Form.Control />
                  </Form.Group>
                 
                </Form> */}
                <h4>วันที่เริ่มทำงาน(วว/ดด/ปปปป(พ.ศ.))</h4>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  class="form-control"
                />
                <h4>ตำแหน่ง</h4>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  class="form-control"
                />
                <h4>หน่วยงาน</h4>
                <input
                  type="text"
                  id="agency2"
                  name="agency2"
                  value={formData.agency2}
                  onChange={handleChange}
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="textcontainer-2">
            <h2>บัตรประกันสังคม</h2>
          </div>
          <br />
          <h3>รายละเอียดส่วนตัว</h3>
          <div class="row">
            <div class="col-md-6">
              <h4>ชื่อ - นามสกุล</h4>
              <input
                type="text"
                class="form-control"
                id="names"
                name="names"
                value={formData.names}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>อายุ</h4>
              <input
                type="text"
                class="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>วัน เดือน ปี เกิด</h4>
              <input
                type="date"
                class="form-control"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>สัญชาติ</h4>
              <input
                type="text"
                class="form-control"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>เชื้อชาติ</h4>
              <input
                type="text"
                class="form-control"
                id="ethnicity"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>ศาสนา</h4>
              <input
                type="text"
                class="form-control"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>เลขบัตรประชาชน</h4>
              <input
                type="text"
                class="form-control"
                id="cardnumber"
                name="cardnumber"
                value={formData.cardnumber}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>ออกให้ ณ ที่ว่าการเขต</h4>
              <input
                type="text"
                class="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <h4>ที่อยู่ปัจจุบัน (ที่สามารถติดต่อได้)</h4>
          <div className="checkbox-group">
            {/* <input
              type="checkbox"
              checked={checkboxes.checkbox7}
              onChange={() => handleCheck("checkbox7")}
              className="custom-checkbox"
            />
            <label>เป็นเจ้าของ</label>
            <input
              type="checkbox"
              checked={checkboxes.checkbox8}
              onChange={() => handleCheck("checkbox8")}
              className="custom-checkbox"
            />
            <label>อยู่กับพ่อแม่</label>
            <input
              type="checkbox"
              checked={checkboxes.checkbox9}
              onChange={() => handleCheck("checkbox9")}
              className="custom-checkbox"
            />
            <label>อยู่กับญาติ</label>
            <input
              type="checkbox"
              checked={checkboxes.checkbox10}
              onChange={() => handleCheck("checkbox10")}
              className="custom-checkbox"
            />
            <label>บ้านเช่า</label>
            <input
              type="checkbox"
              checked={checkboxes.checkbox11}
              onChange={() => handleCheck("checkbox11")}
              className="custom-checkbox"
            />
            <label>หอพัก</label> */}
            {/* <label>Choose Option:</label> */}
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="myself"
                  checked={formData.address.includes("myself")}
                  onChange={handleRadioChange}
                  className="custom-radio"
                />
                เป็นเจ้าของ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="living with parents"
                  checked={formData.address.includes("living with parents")}
                  onChange={handleRadioChange}
                  className="custom-radio"
                />
                อยู่กับพ่อแม่
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="living with relatives"
                  checked={formData.address.includes("living with relatives")}
                  onChange={handleRadioChange}
                  className="custom-radio"
                />
                อยู่กับญาติ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="house for rent"
                  checked={formData.address.includes("house for rent")}
                  onChange={handleRadioChange}
                  className="custom-radio"
                />
                บ้านเช่า
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="dormitory"
                  checked={formData.address.includes("dormitory")}
                  onChange={handleRadioChange}
                  className="custom-radio"
                />
                หอพัก
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div className="input-group4">
                <textarea
                  type="text"
                  id="etc"
                  name="etc"
                  class="form-control"
                  value={formData.etc}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>โทรศัพท์มือถือ</h4>
              <input
                type="text"
                class="form-control"
                id="phones"
                name="phones"
                value={formData.phones}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>โทรศัพท์มือถือที่ติดต่อได้</h4>
              <input
                type="text"
                class="form-control"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleDeleteAllUsers}>Delete All Users</button>

          {/* <button type="submit" className="add-button" onClick={handleNextPage}> */}
          <button type="submit" className="add-button">
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
}

export default Content;
