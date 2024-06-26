import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import axios from 'axios'; // นำเข้า axios สำหรับการส่งคำขอ HTTP

function Contents() {
  const navigate = useNavigate();

  const [checkboxes, setCheckboxes] = useState({
    familyStatus: false,
    marriageRegistration: false,
    childrenStatus: false,
    canRideBicycle: false,
    canRideMotorcycle: false,
    temporaryLicense: false,
    permanentLicense: false,
    canTravel: false,
    cannotTravel: false,
    otherReason: false,
    hasBankAccount: false,
    noBankAccount: false,
  });

  const [educationData, setEducationData] = useState([
    { degree: "ประถมศึกษาปีที่ 1-6", institution: "", location: "", duration: "" },
    { degree: "มัธยมศึกษาปีที่ 1-3/ ปสช.", institution: "", location: "", duration: "" },
    { degree: "มัธยมศึกษาปีที่ 1-3/ ปสช.", institution: "", location: "", duration: "" },
    { degree: "มัธยมศึกษาปีที่ 4-6/ ปวส.", institution: "", location: "", duration: "" },
    { degree: "ปริญญาตรี", institution: "", location: "", duration: "" },
    { degree: "อื่นๆ", institution: "", location: "", duration: "" }
  ]);

  const [workHistory, setWorkHistory] = useState([
    { duration: "", workplace: "", position: "", lastSalary: "", reasonForLeaving: "" },
    { duration: "", workplace: "", position: "", lastSalary: "", reasonForLeaving: "" },
    { duration: "", workplace: "", position: "", lastSalary: "", reasonForLeaving: "" }
  ]);

  const [documents, setDocuments] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" }
  ]);
  const [isReadyToSave, setIsReadyToSave] = useState(false);

  const handleCheck = (checkboxName) => {
    setCheckboxes((prevState) => {
      return {
        ...prevState,
        [checkboxName]: !prevState[checkboxName],
      };
    });
    setIsReadyToSave(false);
  };

  const deleteDocument = (id) => {
    const isConfirmed = window.confirm("คุณต้องการลบข้อมูลใช่หรือไม่?");
    if (isConfirmed) {
      setDocuments(documents.filter(doc => doc.id !== id));
      setIsReadyToSave(false);
    }
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][field] = value;
    setEducationData(updatedEducationData);
  };

  const handleWorkHistoryChange = (index, field, value) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    setWorkHistory(updatedWorkHistory);
  };

  const handleDocumentChange = (index, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].name = value;
    setDocuments(updatedDocuments);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        alert('ไฟล์ถูกอัปโหลดสำเร็จ');
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการอัปโหลดไฟล์', error);
      });
  };

  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);
  useEffect(() => {
    const allChecked = Object.values(checkboxes).every(value => value === true);
    setIsReadyToSave(allChecked);
  }, [checkboxes]);

  const handleNextPage = () => {
    navigate('/contentss');
  };
  const handleSave = () => {
    if (isReadyToSave) {
      console.log("บันทึกข้อมูล...");
    }
  };

  return (
    <div>
      <div className="h1">
        <h1>ใบรับสมัครพนังงาน</h1>
      </div>
      <div className="container-wrapper">
        <div className="container-a">
          <div className="textcontainer-a">
            <div className="h2">
              <h2>ประวัติการศึกษา</h2>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="degrees-column">วุฒิการศึกษา</th>
                <th className="institution-column">ชื่อสถานการศึกษา</th>
                <th className="location-column">ที่ตั้ง</th>
                <th className="duration-column">ระยะเวลาที่ศึกษา ตั้งแต่ต้นจนจบ</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((education, index) => (
                <tr key={index}>
                  <td className="degree-column">{education.degree}</td>
                  <td className="institution-column">
                    <input
                      type="text"
                      value={education.institution}
                      onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                    />
                  </td>
                  <td className="location-column">
                    <input
                      type="text"
                      value={education.location}
                      onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                    />
                  </td>
                  <td className="duration-column">
                    <input
                      type="text"
                      value={education.duration}
                      onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container-b">
          <div className="textcontainer-b">
            <div className="h2">
              <h2>ประวัติการทำงาน</h2>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="duration-column">ระยะเวลาทำงาน</th>
                <th className="workplace-column">ชื่อสถานที่ทำงานและที่อยู่</th>
                <th className="position-column">ตำแหน่งหน้าที่ที่รับผิดชอบโดยสังเขป</th>
                <th className="salary-column">เงินเดือนครั้งสุดท้าย</th>
                <th className="reason-column">สาเหตุที่ออกมาจาก</th>
              </tr>
            </thead>
            <tbody>
              {workHistory.map((item, index) => (
                <tr key={index}>
                  <td className="duration-column">
                    <input
                      type="text"
                      value={item.duration}
                      onChange={(e) => handleWorkHistoryChange(index, 'duration', e.target.value)}
                    />
                  </td>
                  <td className="workplace-column">
                    <input
                      type="text"
                      value={item.workplace}
                      onChange={(e) => handleWorkHistoryChange(index, 'workplace', e.target.value)}
                    />
                  </td>
                  <td className="position-column">
                    <input
                      type="text"
                      value={item.position}
                      onChange={(e) => handleWorkHistoryChange(index, 'position', e.target.value)}
                    />
                  </td>
                  <td className="salary-column">
                    <input
                      type="text"
                      value={item.lastSalary}
                      onChange={(e) => handleWorkHistoryChange(index, 'lastSalary', e.target.value)}
                    />
                  </td>
                  <td className="reason-column">
                    <input
                      type="text"
                      value={item.reasonForLeaving}
                      onChange={(e) => handleWorkHistoryChange(index, 'reasonForLeaving', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-c">
        <div className="textcontainer-c">
          <div className="h2">
            <h2>สมุดบัญชีธนาคาร</h2>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={checkboxes.hasBankAccount}
              onChange={() => handleCheck('hasBankAccount')}
              className="custom-checkbox"
            />
            <label>มีสมุดบัญชีธนาคาร</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={checkboxes.noBankAccount}
              onChange={() => handleCheck('noBankAccount')}
              className="custom-checkbox"
            />
            <label>ไม่มีสมุดบัญชีธนาคาร</label>
          </div>
          <div class="row">
            <div class="col-md-5">
              <h4>ชื่อธนาคาร</h4>
              <input type="text" id="bankname" name="bankname" class="form-control" />
            </div>
            <div class="col-md-5">
              <h4>ชื่อธนาคาร</h4>
              <input type="text" id="bankBranch" name="bankBranch" class="form-control" />
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="container-d">
        <div className="textcontainer-d">
          <h2>กรณีเกิดอุบัติเหตุหรือเรื่องฉุกเฉิน บุคคลที่สามารถติดต่อได้</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4>ชื่อ - นามสกุล</h4>
            <input type="text" class="form-control" id="emergencyName" name="emergencyName" />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <h4>เบอร์โทรศัพท์ที่ติดต่อได้</h4>
            <input type="text" id="parentContact" class="form-control" name="parentContact" />
          </div>
          <div class="col-md-6">
            <h4>เบอร์โทรศัพท์พี่/น้อง</h4>
            <input type="text" id="Contact" class="form-control" name="Contact" />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <h4>เบอร์โทรศัพท์พ่อ/แม่</h4>
            <input type="text" id="emergencyContact" class="form-control" name="emergencyContact" />
          </div>
          <div class="col-md-6">
            <h4>เบอร์โทรศัพท์ญาติ</h4>
            <input type="text" id="Contactt" class="form-control" name="Contactt" />
          </div>
        </div>

      </div>
      <div className="container-e">
        <div className="textcontainer-e">
          <h2>ความสามารถพิเศษ</h2>
        </div>
        <div className="flex-row">
          <div className="left-side">
            <div className="textcontainer-six">
              <h4>ขับขี่จักรยาน</h4>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  checked={checkboxes.canRideBicycle}
                  onChange={() => handleCheck("canRideBicycle")}
                  className="custom-checkbox"
                />
                <label> ได้ </label>
                <input
                  type="checkbox"
                  checked={!checkboxes.canRideBicycle}
                  onChange={() => handleCheck("canRideBicycle")}
                  className="custom-checkbox"
                />
                <label> ไม่ได้ </label>
              </div>
            </div>
            <div className="textcontainer-seven">
              <h4>ขับขี่จักรยานยนต์</h4>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  checked={checkboxes.canRideMotorcycle}
                  onChange={() => handleCheck("canRideMotorcycle")}
                  className="custom-checkbox"
                />
                <label> ได้ </label>
                <input
                  type="checkbox"
                  checked={!checkboxes.canRideMotorcycle}
                  onChange={() => handleCheck("canRideMotorcycle")}
                  className="custom-checkbox"
                />
                <label> ไม่ได้ </label>
              </div>
              <div className="textcontainer-eight">
                <h4>ใบอนุญาตขับขี่ประเภท</h4>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    checked={checkboxes.temporaryLicense}
                    onChange={() => handleCheck("temporaryLicense")}
                    className="custom-checkbox"
                  />
                  <label> ชั่วคราว </label>
                  <input
                    type="checkbox"
                    checked={!checkboxes.permanentLicense}
                    onChange={() => handleCheck("permanentLicense")}
                    className="custom-checkbox"
                  />
                  <label> ตลอดชีพ </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <h4>ใบอนุญาตขับขี่เลขที่</h4>
              <input type="text" id="licenseNumber" class="form-control" name="licenseNumber" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-12">
              <h4>วันหมดอายุ</h4>
              <input type="date" id="expiryDate" class="form-control" name="expiryDate" />
            </div>
          </div>

        </div>
        <div className="textcontainer-nine">
          <h4>สามารถและพร้อมที่จะเดินทางไปปฎิบัติงานในสถานที่ต่างๆ ได้หรือไม่ เพราะเหตุผลใด</h4>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={checkboxes.canTravel}
              onChange={() => handleCheck("canTravel")}
              className="custom-checkbox"
            />
            <label> ได้ </label>
            <input
              type="checkbox"
              checked={checkboxes.cannotTravel}
              onChange={() => handleCheck("cannotTravel")}
              className="custom-checkbox"
            />
            <label> ไม่ได้ </label>
            <input
              type="checkbox"
              checked={checkboxes.otherReason}
              onChange={() => handleCheck("otherReason")}
              className="custom-checkbox"
            />
            <label> อื่นๆ </label>
          </div>
        </div>
        {/* <div className="input-groupc">
          <input type="text" id="reason" name="reason" />
        </div> */}
        <div class="row">
          <div class="col-md-12">
            <input type="text" id="reason" class="form-control" name="reason" />
          </div>
        </div>
      </div>
      <div className="container-f">
        <div className="textcontainer-f">
          <div className="h2">
            <h2>เอกสารเพิ่มเติม</h2>
          </div>
        </div>
        <div className="textcontainer-eleven">
          <input
            aria-label="อัปโหลดไฟล์"
            data-test-id="storyboard-upload-input"
            id="storyboard-upload-input"
            multiple=""
            tabIndex="0"
            type="file"
            className="add-button1"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th className="id1-column">ลำดับ</th>
              <th className="document-column">รายชื่อเอกสาร</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document, index) => (
              <tr key={document.id}>
                <td className="idd-column">{index + 1}</td>
                <td className="document-column">
                  <div className="input-groupd1">
                    <input
                      type="text"
                      value={document.name}
                      onChange={(e) => handleDocumentChange(index, e.target.value)}
                    />
                  </div>
                </td>
                <button className="delete-button" onClick={() => deleteDocument(document.id)}>ลบ</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button type="button" className="add-button" onClick={handleNextPage}>
          ย้อนกลับ
        </button>
        <button type="button" className="add-button3" onClick={handleSave} disabled={!isReadyToSave}>
          บันทึก
        </button>
      </div>
    </div>
  );
}

export default Contents;
