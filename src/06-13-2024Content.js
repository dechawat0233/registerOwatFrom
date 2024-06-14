import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './App.css';

function Content() {
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
    checkbox11: false
  });

  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    phone: '',
    idNumber: '',
    // Add other fields as necessary
  });

  const [image, setImage] = useState(null);
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
    navigate('/contentss');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('image', image);
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }
    try {
      const response = await axios.post('http://localhost:5000/submit', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle success (e.g., navigate to another page or show a success message)
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

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
                      checked={checkboxes.checkbox1}
                      onChange={() => handleCheck("checkbox1")}
                      className="custom-checkbox-1"
                    />
                    <label>ใบปลิว</label>

                    <input
                      type="checkbox"
                      checked={checkboxes.checkbox2}
                      onChange={() => handleCheck("checkbox2")}
                      className="custom-checkbox-1"
                    />
                    <label>เพื่อนแนะนำ</label>

                    <input
                      type="checkbox"
                      checked={checkboxes.checkbox3}
                      onChange={() => handleCheck("checkbox3")}
                      className="custom-checkbox-1"
                    />
                    <label>ป้ายหน้าออฟฟิต</label>

                    <input
                      type="checkbox"
                      checked={checkboxes.checkbox4}
                      onChange={() => handleCheck("checkbox4")}
                      className="custom-checkbox-1"
                    />
                    <label>เจ้าหน้าที่แนะนำ</label>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                    </div>
                  </div>
                  <div className="input-group1">
                    <h4>ชื่อ - นามสกุล (ผู้ที่แนะนำมาสมัคร)</h4>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} class="form-control" />
                  </div>
                  <Row>
                    <Col md={6}>
                      <div className="input-group">
                        <h4>หน่วยงาน</h4>
                        <input type="text" id="agency" name="agency" value={formData.agency} onChange={handleChange} class="form-control" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-group">
                        <h4>เบอร์โทรศัพท์</h4>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} class="form-control" />
                      </div>
                    </Col>
                  </Row>
                  <div className="input-group1">
                    <h4>เลขที่หลังบัตรประชาชนผู้สมัคร (เพื่อใช้ยื่นแสดงรายได้ประจำปี)</h4>
                    <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} class="form-control" />

                  </div>
                </section>
              </div>

              <div class="col-md-3">
                <h2></h2>

                <input type="file" onChange={handleImageUpload} />
                {image && <p>Selected file: {image.name}</p>}

                <Form>
                  {/* <div class="row">
                <div class="col-md-3"> */}
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
                  {/* </div>
              </div> */}
                </Form>
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
          <div className="container-22">
            <div className="input-group1">
              <h4>ชื่อ - นามสกุล</h4>
              <input type="text" id="names" name="names" />
            </div>
            <div className="input-group1">
              <h4>อายุ</h4>
              <input type="text" id="age" name="age" />
            </div>
            <div className="input-group1">
              <h4>วัน เดือน ปี เกิด</h4>
              <input type="date" id="birthdate" name="birthdate" />
            </div>
            <div className="input-group1">
              <h4>สัญชาติ</h4>
              <input type="text" id="nationality" name="nationality" />
            </div>
            <div className="input-group1">
              <h4>เชื้อชาติ</h4>
              <input type="text" id="ethnicity" name="ethnicity" />
            </div>
            <div className="input-group1">
              <h4>ศาสนา</h4>
              <input type="text" id="religion" name="religion" />
            </div>
            <div className="input-group1">
              <h4>เลขบัตรประชาชน</h4>
              <input type="text" id="cardnumber" name="cardnumber" />
            </div>
            <div className="input-group1">
              <h4>ออกให้ ณ ที่ว่าการเขต</h4>
              <input type="text" id="country" name="country" />
            </div>
          </div>
          <div className="input-group3">
            <h4>ที่อยู่ (ตามบัตรประชาชน)</h4>
            <textarea type="text" id="addresscard" name="addresscard" />
          </div>
          <div className="input-group3">
            <h4>ที่อยู่ปัจจุบัน (ที่สามารถติดต่อได้)</h4>
            <div className="checkbox-group">
              <input
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
              <label>หอพัก</label>
              <div className="input-group4">
                <input type="text" id="etc" name="etc" class="form-control" />
              </div>
            </div>
          </div>
          <div className="input-group1">
            <h4>โทรศัพท์มือถือ</h4>
            <input type="text" id="phone" name="phone" />
          </div>
          <br />
          <div className="input-group1">
            <h4>โทรศัพท์มือถือที่ติดต่อได้</h4>
            <input type="text" id="contactPhone" name="contactPhone" />
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="add-button" onClick={handleNextPage}>
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
}

export default Content;
