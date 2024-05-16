import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function Contents() {
  const navigate = useNavigate(); // เรียกใช้ hook useNavigate ในการนำทาง

  // สร้าง state เพื่อเก็บค่าการติ้กของแต่ละ checkbox
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

  const handleCheck = (checkboxName) => {
    // สร้างคัวสำหรับเก็บค่าของ checkbox ใหม่
    const newCheckboxes = { ...checkboxes };
    // เปลี่ยนสถานะของ checkbox นั้นๆ
    newCheckboxes[checkboxName] = !newCheckboxes[checkboxName];
    // อัปเดต state ของ checkboxes
    setCheckboxes(newCheckboxes);
  };

  // ตั้งค่าหัวข้อหน้าเว็บเมื่อ Component ถูกโหลด
  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);
  const handleNextPage = () => {
    navigate('/content'); // นำทางไปยังหน้า '/contentss' โดยใช้ hook useNavigate
  };

  return (
    <div>
      <Navbar /> {/* ตรวจสอบการใช้ Component */}
        <Sidebar />
      <div className="h1">
      <h1>ใบรับสมัครพนังงาน</h1>
      </div>
      <div className="container-wrapper">
        <div className="container-one">
          <div className="textcontainer-one">
            <h2>ประวัติการศึกษา</h2>
          </div>
          <table>
    <tr>
    <th>วุฒิการศึกษา</th>
    <th>ชื่อสถานการศึกษา</th>
    <th>ที่ตั้ง</th>
    <th>ระยะเวลาที่ศึกษา ตั้งแต่ต้นจนจบ</th>
  </tr>
  <tr>
    <td>ประถมศึกษาปีที่1-6</td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>มัธยมศึกษาปีที่1-3/ ปสช.</td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>มัธยมศึกษาปีที่1-3/ ปสช.</td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>มัธยมศึกษาปีที่4-6/ ปวส.</td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td>ปริญญาตรี</td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td> อื่นๆ </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
</table>
        </div>
        </div>
        <div className="container-four">
        <div className="textcontainer-four">
            <h2>กรณีเกิดอุบัติเหตุหรือเรื่องฉุกเฉิน บุคคลที่สามารถติดต่อได้</h2>
          </div>
        <div className="input-group">
           <h4>ชื่อ - นามสกุล</h4>
           <input type="text" id="emergencyName" name="emergencyName" />
           <h4>เบอร์โทรศัพท์ที่ติดต่อได้</h4>
           <input type="text" id="emergencyContact" name="emergencyContact" />
           <h4>เบอร์โทรศัพท์พ่อ/แม่</h4>
           <input type="text" id="parentContact" name="parentContact" />
           <h4>เบอร์โทรศัพท์พี่/น้อง</h4>
            <input type="text" id="" name="fname" />
            <h4>เบอร์โทรศัพท์ญาติ</h4>
            <input type="text" id="department" name="department" />
        </div>
        </div>
        <div className="container-five">
        <div className="textcontainer-five">
            <h2>ความสามารถพิเศษ</h2>
          </div>
          <div className="textcontainer-six">
            <h4>ขับขี่จักรยาน</h4>
          </div>
          <input
            type="checkbox"
            checked={checkboxes.checkbox3}
            onChange={() => handleCheck("checkbox3")}
            className="custom-checkbox"
          />
          <label> ได้ </label>
          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label> ไม่ได้ </label>
          <div className="textcontainer-seven">
            <h4>ขับขี่จักรยานยนต์</h4>
          </div>
          <input
            type="checkbox"
            checked={checkboxes.checkbox5}
            onChange={() => handleCheck("checkbox5")}
            className="custom-checkbox"
          />
          <label> ได้ </label>
          <input
            type="checkbox"
            checked={checkboxes.checkbox6}
            onChange={() => handleCheck("checkbox6")}
            className="custom-checkbox"
          />
          <label> ไม่ได้ </label>
          <div className="textcontainer-eight">
            <h4>ใบอนุญาตขับขี่ประเภท</h4>
          <input
            type="checkbox"
            checked={checkboxes.checkbox7}
            onChange={() => handleCheck("checkbox7")}
            className="custom-checkbox"
          />
          <label> ชั่วคราว </label>
          <input
            type="checkbox"
            checked={checkboxes.checkbox8}
            onChange={() => handleCheck("checkbox8")}
            className="custom-checkbox"
          />
          <label> ตลอดชีพ </label>
          </div>
          <div className="input-group">
            <h4>ใบอนุญาตขับขี่เลขที่</h4>
            <input type="text" id="department" name="department" />
            <h4>วันหมดอายุ</h4>
            <input type="text" id="department" name="department" />
          </div>
          <div className="textcontainer-nine">
            <h4>สามารถและพร้อมที่จะเดินทางไปปฎิบัติงานในสถานที่ต่างๆ ได้หรือไม่ เพราะเหตุผลใด</h4>
            <input
            type="checkbox"
            checked={checkboxes.checkbox9}
            onChange={() => handleCheck("checkbox9")}
            className="custom-checkbox"
          />
          <label> ได้ </label>
          <input
            type="checkbox"
            checked={checkboxes.checkbox10}
            onChange={() => handleCheck("checkbox10")}
            className="custom-checkbox"
          />
          <label> ไม่ได้ </label>
          <input
            type="checkbox"
            checked={checkboxes.checkbox11}
            onChange={() => handleCheck("checkbox11")}
            className="custom-checkbox"
          />
          <label> อื่นๆ  </label>
          </div>
          <div className="input-group2">
            <input type="text" id="department" name="department" />
          </div>
        </div>
        <div className="container-six">
        <div className="textcontainer-ten">
            <h2>เอกสารเพิ่มเติม</h2>
          </div>
          <div className="textcontainer-eleven">
          <h3>อัพโหลดเอกสารเพิ่มเติม</h3>
          </div>
        <table>
  <tr>
    <th>ลำดับ</th>
    <th>รายชื่อเอกสาร</th> 
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
        </div>
      <div className="button-container">
        <button type="button" className="add-button">
          บันทึกข้อมูล
        </button>
        <button type="button" className="add-button" onClick={handleNextPage}>
          ถัดไป
        </button>
      </div>
    </div>
  );
}

export default Contents;
