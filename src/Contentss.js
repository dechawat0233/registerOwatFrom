import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';

function Contentss() {
  const navigate = useNavigate();

  const [checkboxes, setCheckboxes] = useState({
    familyStatus: '',
    marriageRegistration: '',
    childrenStatus: ''
  });

  const [formData, setFormData] = useState({
    fatherName: '',
    fatherJob: '',
    fatherAge: '',
    motherName: '',
    motherJob: '',
    motherAge: '',
    spouseName: '',
    spouseNationality: '',
    spouseJob: '',
    spouseWorkplace: '',
    spousePhone: '',
    spouseMobile: '',
    numChildren: '',
    numChildrenStudying: '',
    numChildrenUnder6: '',
    birthdateChildrenUnder6: ''
  });

  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddPerson = () => {
    console.log("Adding person..."); // Add this line to debug
    const newPerson = {
      id: `${employees.length + 1}`,
      name: formData.birthdateChildrenUnder6
    };

    axios.post('http://localhost:5000/api/employees', newPerson)
      .then(response => {
        console.log("Person added:", response.data); // Add this line to debug
        const newEmployee = response.data;
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        setFilteredEmployees(updatedEmployees);
        setFormData({
          ...formData,
          birthdateChildrenUnder6: ''
        });
      })
      .catch(error => {
        console.error('Error adding employee:', error); // Add this line to debug
      });
  };

  const deleteEmployee = (id) => {
    const isConfirmed = window.confirm("คุณต้องการลบใช่หรือไม่?");
    if (isConfirmed) {
      axios.delete(`http://localhost:5000/api/employees/${id}`)
        .then(() => {
          const updatedEmployees = employees.filter(employee => employee.id !== id);
          setEmployees(updatedEmployees);
          setFilteredEmployees(updatedEmployees);
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
        });
    }
  };

  const handleCheck = (group, value) => {
    setCheckboxes({
      ...checkboxes,
      [group]: value
    });
  };

  const handleNextPage = () => {
    navigate('/contents');
  };

  const handlereturnPage = () => {
    navigate('/content');
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
          <div className="input-row">
            <div className="input-group1">
              <h4>ชื่อบิดา - นามสกุล</h4>
              <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleFormDataChange} className="long-input" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>อาชีพ</h4>
              <input type="text" id="fatherJob" name="fatherJob" value={formData.fatherJob} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>อายุ/ปี</h4>
              <input type="number" id="fatherAge" name="fatherAge" value={formData.fatherAge} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>ชื่อมารดา - นามสกุล</h4>
              <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleFormDataChange} className="long-input" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>อาชีพ</h4>
              <input type="text" id="motherJob" name="motherJob" value={formData.motherJob} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>อายุ/ปี</h4>
              <input type="number" id="motherAge" name="motherAge" value={formData.motherAge} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="textcontainer-two">
            <h2>สถานะครอบครัว</h2>
            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'single'}
                onChange={() => handleCheck('familyStatus', 'single')}
                className="custom-checkbox"
              />
              <label>โสด</label>

              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'engaged'}
                onChange={() => handleCheck('familyStatus', 'engaged')}
                className="custom-checkbox"
              />
              <label>หมั้น</label>

              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'married'}
                onChange={() => handleCheck('familyStatus', 'married')}
                className="custom-checkbox"
              />
              <label>สมรสแล้ว</label>

              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'divorced'}
                onChange={() => handleCheck('familyStatus', 'divorced')}
                className="custom-checkbox"
              />
              <label>หย่าร้าง</label>

              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'widowed'}
                onChange={() => handleCheck('familyStatus', 'widowed')}
                className="custom-checkbox"
              />
              <label>หม้าย</label>

              <input
                type="checkbox"
                checked={checkboxes.familyStatus === 'separated'}
                onChange={() => handleCheck('familyStatus', 'separated')}
                className="custom-checkbox"
              />
              <label>แยกกันอยู่</label>
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>ชื่อ - นามสกุล คู่สมรส</h4>
              <input type="text" id="spouseName" name="spouseName" value={formData.spouseName} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>สัญชาติ</h4>
              <input type="text" id="spouseNationality" name="spouseNationality" value={formData.spouseNationality} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>อาชีพ</h4>
              <input type="text" id="spouseJob" name="spouseJob" value={formData.spouseJob} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>สถานที่ทำงาน</h4>
              <input type="text" id="spouseWorkplace" name="spouseWorkplace" value={formData.spouseWorkplace} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>โทรศัพท์</h4>
              <input type="text" id="spousePhone" name="spousePhone" value={formData.spousePhone} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>โทรศัพท์มือถือ</h4>
              <input type="text" id="spouseMobile" name="spouseMobile" value={formData.spouseMobile} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="input-row">
            <div className="left-side2">
              <div className="h2">
                <h2>ทะเบียนสมรส</h2>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  checked={checkboxes.marriageRegistration === 'registered'}
                  onChange={() => handleCheck('marriageRegistration', 'registered')}
                  className="custom-checkbox"
                />
                <label>มีทะเบียนสมรส</label>

                <input
                  type="checkbox"
                  checked={checkboxes.marriageRegistration === 'notRegistered'}
                  onChange={() => handleCheck('marriageRegistration', 'notRegistered')}
                  className="custom-checkbox"
                />
                <label>ไม่มีทะเบียนสมรส</label>
              </div>
            </div>
            <div className="right-side2">
              <div className="h2">
                <h2>บุตร</h2>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  checked={checkboxes.childrenStatus === 'hasChildren'}
                  onChange={() => handleCheck('childrenStatus', 'hasChildren')}
                  className="custom-checkbox"
                />
                <label>มีบุตร</label>

                <input
                  type="checkbox"
                  checked={checkboxes.childrenStatus === 'noChildren'}
                  onChange={() => handleCheck('childrenStatus', 'noChildren')}
                  className="custom-checkbox"
                />
                <label>ไม่มีบุตร</label>
              </div>
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>จำนวนบุตร/คน</h4>
              <input type="number" id="numChildren" name="numChildren" value={formData.numChildren} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>จำนวนบุตรกำลังศึกษา/คน</h4>
              <input type="number" id="numChildrenStudying" name="numChildrenStudying" value={formData.numChildrenStudying} onChange={handleFormDataChange} />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <h4>จำนวนบุตรอายุตํ่ากว่า 6 ปี/คน</h4>
              <input type="number" id="numChildrenUnder6" name="numChildrenUnder6" value={formData.numChildrenUnder6} onChange={handleFormDataChange} />
            </div>
            <div className="input-group">
              <h4>วันเดือนปีเกิดของบุตรที่อายุต่ำกว่า 6 ปี/คน</h4>
              <div className="birthdate-input">
                <input type="date" id="birthdateChildrenUnder6" name="birthdateChildrenUnder6" value={formData.birthdateChildrenUnder6} onChange={handleFormDataChange} />
                <button type="button" className="add-button" onClick={handleAddPerson}>
                  เพิ่ม
                </button>
              </div>
            </div>
          </div>
          <div className="container-one-table">
            <table>
              <thead>
                <tr>
                  <th className="id2-column">ลำดับ</th>
                  <th className="namee-column">วันเดือนปีเกิดของบุตรที่อายุตํ่ากว่า 6 ปี/คน</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map(employee => (
                  <tr key={employee.id}>
                    <td className="id-column">{employee.id}</td>
                    <td className="name-column">{employee.name}</td>
                    <td>
                      <button className="delete-button1" onClick={() => deleteEmployee(employee.id)}>ลบรายชื่อ</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="add-button" onClick={handlereturnPage}>
          ย้อนกลับ
        </button>
        <button type="button" className="add-button" onClick={handleNextPage}>
          ถัดไป
        </button>
      </div>
    </div>
  );
}

export default Contentss;
