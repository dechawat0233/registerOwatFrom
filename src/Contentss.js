import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
function Contentss() {
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
    navigate('/contents'); // นำทางไปยังหน้า '/contentss' โดยใช้ hook useNavigate
  };

  return (
    <div>
      <div className="h1">
      <h1>ใบรับสมัครพนังงาน</h1>
      </div>
      <div className="container-wrapper">
        <div className="container-one">
          <div className="textcontainer-one">
            <h2>ข้อมูลบิดา - มารดาผู้สมัคร</h2>
          </div>
          <div className="input-group1">
            <h4>ชื่อบิดา - นามสกุล </h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group">
            <h4>อาชีพ</h4>
            <input type="text" id="department" name="department" />
            <h4>อายุ/ปี</h4>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="input-group1">
            <h4>ชื่อมารดา - นามสกุล </h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group">
            <h4>อาชีพ</h4>
            <input type="text" id="department" name="department" />
            <h4>อายุ/ปี</h4>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="textcontainer-two">
            <h2>สถานะครอบครัว</h2>
          <input
            type="checkbox"
            checked={checkboxes.checkbox2}
            onChange={() => handleCheck("checkbox2")}
            className="custom-checkbox"
          />
          <label>โสด</label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox3}
            onChange={() => handleCheck("checkbox3")}
            className="custom-checkbox"
          />
          <label>หมั้น</label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label>สมรสแล้ว</label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label>หย่าร้าง</label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label>หม้าย</label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label>แยกกันอยู่</label>
          </div>
          <div className="input-group">
            <h4>ชื่อ - นามสกุล คู่สมรส</h4>
            <input type="text" id="fname" name="fname" />
            <h4>สัญชาติ</h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group">
            <h4>อาชีพ</h4>
            <input type="text" id="department" name="department" />
            <h4>สถานที่ทำงาน</h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group">
            <h4>โทรศัพท์</h4>
            <input type="text" id="phone" name="phone" />
            <h4>โทรศัพท์มือถือ</h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="textcontainer-two">
            <h2>ทะเบียนสมรส</h2>
          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label> มีทะเบียนสมรส </label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label> ไม่มีทะเบียนสมรส </label>
            <h2>บุตร</h2>
          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label> มีบุตร </label>

          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheck("checkbox4")}
            className="custom-checkbox"
          />
          <label> ไม่มีบุตร </label>
          </div>
          <div className="input-group">
            <h4>จำนวนบุตร/คน</h4>
            <input type="text" id="idNumber" name="idNumber" />
            <h4>จำนวนบุตรกำลังศึกษา/คน</h4>
            <input type="text" id="idNumber" name="idNumber" />
          </div>
          <div className="input-group">
            <h4>จำนวนบุตรอายุตํ่ากว่า 6 ปี/คน</h4>
            <input type="text" id="idNumber" name="idNumber" />
            <h4>วันเดือนปีเกิดของบุตรที่อายุตํ่ากว่า 6 ปี/คน</h4>
            <input type="text" id="idNumber" name="idNumber" />
          </div>
        </div>
        </div>
      <div className="button-container">
        <button type="button" className="add-button">
          บันทึกข้อมูล
        </button>
        <button type="button" className="add-button"onClick={handleNextPage}>
          ถัดไป
        </button>
      </div>
    </div>
  );
}

export default Contentss;
