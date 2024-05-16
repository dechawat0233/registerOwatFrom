import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // เพิ่มการนำเข้า useNavigate
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function Content() {
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

  const navigate = useNavigate(); // ใช้ useNavigate

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
    navigate('/contentss'); // นำทางไปยังหน้า '/contentss' โดยใช้ hook useNavigate
  };
  return (
    <div>
        <Navbar />
        <Sidebar/>
      <div className="h1">
        <h1>ใบรับสมัครพนังงาน</h1>
      </div>
      <div className="container-wrapper">
        <div className="container-one">
          <div className="textcontainer">
            <div className="h2">
              <h2>การสมัครงานทราบข่าวจาก</h2>
            </div>
            {/* เพิ่ม input type checkbox และให้มันผูกกับ state isChecked */}
            <input
              type="checkbox"
              checked={checkboxes.checkbox1}
              onChange={() => handleCheck("checkbox1")}
              className="custom-checkbox"
            />
            <label>ใบปลิว</label>

            <input
              type="checkbox"
              checked={checkboxes.checkbox2}
              onChange={() => handleCheck("checkbox2")}
              className="custom-checkbox"
            />
            <label>เพื่อนแนะนำ</label>

            <input
              type="checkbox"
              checked={checkboxes.checkbox3}
              onChange={() => handleCheck("checkbox3")}
              className="custom-checkbox"
            />
            <label>ป้ายหน้าออฟฟิต</label>

            <input
              type="checkbox"
              checked={checkboxes.checkbox4}
              onChange={() => handleCheck("checkbox4")}
              className="custom-checkbox"
            />
            <label>เจ้าหน้าที่แนะนำ</label>
          </div>
          <div className="input-group">
            <h4>ชื่อ - นามสกุล (ผู้ที่แนะนำมาสมัคร)</h4>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group1">
            <h4>หน่วยงาน</h4>
            <input type="text" id="department" name="department" />
          </div>
          <div className="input-group2">
            <h4>เบอร์โทรศัพท์</h4>
            <input type="text" id="phone" name="phone" />
          </div>

          <div className="input-group3">
            <h4>เลขที่หลังบัตรประชาชนผู้สมัคร (เพื่อใช้ยื่นแสดงรายได้ประจำปี)</h4>
            <input type="text" id="idNumber" name="idNumber" />
          </div>
        </div>
        <div className="container-three"></div>
      </div>
      <div className="container-two">
        <div className="textcontainer-one">
          <h2>บัตรประกันสังคม</h2>
        </div>
        <input
          type="checkbox"
          checked={checkboxes.checkbox5}
          onChange={() => handleCheck("checkbox5")}
          className="custom-checkbox1"
        />
        <label>มีมีบัตรประกันสังคม  (โปรดระบุโรงพยาบาล) </label>
        <div className="input-groupp">
          <input type="text" id="card" name="card" />
        </div>

        <input
          type="checkbox"
          checked={checkboxes.checkbox6}
          onChange={() => handleCheck("checkbox6")}
          className="custom-checkbox2"
        />
        <label>ไม่มีบัตรประกันสังคม  (โปรดระบุโรงพยาบาล) </label>
        <div className="input-groupp">
          <input type="text" id="card" name="card" />
        </div>
        <div className="textcontainer-two">
          <h2>รายละเอียดส่วนตัว</h2>
        </div>
        <div className="input-group4">
          <h4>ชื่อ - นามสกุล</h4>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-group5">
          <h4>อายุ</h4>
          <input type="text" id="age" name="age" />
        </div>
        <div className="input-group6">
          <h4>วัน เดือน ปี เกิด</h4>
          <input type="date" id="date" name="date" />
        </div>
        <div className="input-group7">
          <h4>สัญชาติ</h4>
          <input type="text" id="age" name="age" />
        </div>
        <div className="input-group8">
          <h4>เชื้อชาติ</h4>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-group9">
          <h4>ศาสนา</h4>
          <input type="text" id="age" name="age" />
        </div>
        <div className="input-group10">
          <h4>เลขบัตรประชาชน</h4>
          <input type="text" id="date" name="date" />
        </div>
        <div className="input-group11">
          <h4>ออกให้ ณ ที่ว่าการเขต</h4>
          <input type="text" id="age" name="age" />
        </div>
        <div className="input-group12">
          <h4>ที่อยู่ (ตามบัตรประชาชน) </h4>
          <input type="text" id="age" name="age" />
        </div>
        <div className="input-group13">
          <h4>ที่อยู่ปัจจุบัน (ที่สามารถติดต่อได้) </h4>
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

          <div className="input-group14">
            <input type="text" id="age" name="age" />
          </div>
          <div className="input-group2">
            <h4>โทรศัพท์มือถือ</h4>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="input-group2">
            <h4>โทรศัพท์มือถือที่ติดต่อได้</h4>
            <input type="text" id="phone" name="phone" />
          </div>
        </div>
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

export default Content;
