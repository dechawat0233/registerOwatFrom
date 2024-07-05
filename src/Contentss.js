import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Contentss({ formData, setFormData }) {
  const navigate = useNavigate();

  const [checkboxes, setCheckboxes] = useState({
    familyStatus: "",
    marriageRegistration: "",
    childrenStatus: "",
  });

  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState(1); // To track the ID of the new employee

  // const [formData, setFormData] = useState({
  //   fatherName: '',
  //   fatherJob: '',
  //   fatherAge: '',
  //   motherName: '',
  //   motherJob: '',
  //   motherAge: '',
  //   spouseName: '',
  //   spouseNationality: '',
  //   spouseJob: '',
  //   spouseWorkplace: '',
  //   spousePhone: '',
  //   spouseMobile: '',
  //   numChildren: '',
  //   numChildrenStudying: '',
  //   numChildrenUnder6: '',
  //   birthdateChildrenUnder6: ''
  // });

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({ ...prevData, familyStatus: e.target.value }));
  };

  const handleRadioChange2 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      marriageRegistration: e.target.value,
    }));
  };

  const handleRadioChange3 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      child: e.target.value,
    }));
  };

  // const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);

  const handleFormDataChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value
    // });

    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleNameChange = (id, name) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, name } : employee
    );
    setEmployees(updatedEmployees);

    setFormData((prevData) => ({
      ...prevData,
      employees: prevData.employees.map((employee) =>
        employee.id === id ? { ...employee, name } : employee
      ),
    }));
  };

  const addEmployee = () => {
    const newEmployee = {
      id: employeeId,
      name: "",
    };

    setEmployeeId(employeeId + 1);

    setEmployees([...employees, newEmployee]);
    // setEmployeeId(employeeId + 1);

    setFormData((prevData) => ({
      ...prevData,
      employees: [...prevData.employees, newEmployee],
    }));
  };

  console.log("formData", formData);
  console.log("employees", employees);

  const handleCheck = (group, value) => {
    setCheckboxes({
      ...checkboxes,
      [group]: value,
    });
  };

  // const handleNextPage = () => {
  //   navigate("/contents");
  // };

  // const handlereturnPage = () => {
  //   navigate("/content");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contents");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="h1">
          <h1>ใบรับสมัครพนังงาน</h1>
        </div>
        <div className="container-wrapper">
          <div className="container-one">
            <div className="textcontainer-one">
              <h2>ข้อมูลบิดา - มารดาผู้สมัคร</h2>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4>ชื่อบิดา - นามสกุล</h4>
                <input
                  type="text"
                  id="fatherName"
                  class="form-control"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>อายุ/ปี</h4>
                <input
                  type="number"
                  id="fatherAge"
                  class="form-control"
                  name="fatherAge"
                  value={formData.fatherAge}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>อาชีพ</h4>
                <input
                  type="text"
                  id="fatherJob"
                  class="form-control"
                  name="fatherJob"
                  value={formData.fatherJob}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>ชื่อบิดา - นามสกุล</h4>
                <input
                  type="text"
                  id="motherName"
                  class="form-control "
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>อายุ/ปี</h4>
                <input
                  type="number"
                  id="motherAge"
                  class="form-control"
                  name="motherAge"
                  value={formData.motherAge}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>อาชีพ</h4>
                <input
                  type="text"
                  id="motherJob"
                  class="form-control"
                  name="motherJob"
                  value={formData.motherJob}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />

            <div className="textcontainer-two">
              <h2>สถานะครอบครัว</h2>
              <div className="checkbox-group">
                {/* <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "single"}
                  onChange={() => handleCheck("familyStatus", "single")}
                  className="custom-checkbox"
                />
                <label>โสด</label>

                <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "engaged"}
                  onChange={() => handleCheck("familyStatus", "engaged")}
                  className="custom-checkbox"
                />
                <label>หมั้น</label>

                <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "married"}
                  onChange={() => handleCheck("familyStatus", "married")}
                  className="custom-checkbox"
                />
                <label>สมรสแล้ว</label>

                <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "divorced"}
                  onChange={() => handleCheck("familyStatus", "divorced")}
                  className="custom-checkbox"
                />
                <label>หย่าร้าง</label>

                <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "widowed"}
                  onChange={() => handleCheck("familyStatus", "widowed")}
                  className="custom-checkbox"
                />
                <label>หม้าย</label>

                <input
                  type="checkbox"
                  checked={checkboxes.familyStatus === "separated"}
                  onChange={() => handleCheck("familyStatus", "separated")}
                  className="custom-checkbox"
                />
                <label>แยกกันอยู่</label> */}
                {/* <label>Family Status:</label> */}
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="single"
                      checked={formData.familyStatus === "single"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    โสด
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="engaged"
                      checked={formData.familyStatus === "engaged"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    หมั้น
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="married"
                      checked={formData.familyStatus === "married"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    สมรสแล้ว
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="divorced"
                      checked={formData.familyStatus === "divorced"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    หย่าร้าง
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="widowed"
                      checked={formData.familyStatus === "widowed"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    หม้าย
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="familyStatus"
                      value="separated"
                      checked={formData.familyStatus === "separated"}
                      onChange={handleRadioChange}
                      className="custom-radio"
                    />
                    แยกกันอยู่
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4>ชื่อ - นามสกุล คู่สมรส</h4>
                <input
                  type="text"
                  id="spouseName"
                  class="form-control"
                  name="spouseName"
                  value={formData.spouseName}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>สัญชาติ</h4>
                <input
                  type="text"
                  id="spouseNationality"
                  class="form-control"
                  name="spouseNationality"
                  value={formData.spouseNationality}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>อาชีพ</h4>
                <input
                  type="text"
                  id="spouseJob"
                  class="form-control"
                  name="spouseJob"
                  value={formData.spouseJob}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>สถานที่ทำงาน</h4>
                <input
                  type="text"
                  id="spouseWorkplace"
                  class="form-control"
                  name="spouseWorkplace"
                  value={formData.spouseWorkplace}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>โทรศัพท์</h4>
                <input
                  type="text"
                  id="spousePhone"
                  class="form-control"
                  name="spousePhone"
                  value={formData.spousePhone}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>โทรศัพท์มือถือ</h4>
                <input
                  type="text"
                  id="spouseMobile"
                  class="form-control"
                  name="spouseMobile"
                  value={formData.spouseMobile}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />

            <div className="input-row">
              <div className="left-side2">
                <div className="h2">
                  <h2>ทะเบียนสมรส</h2>
                </div>
                <div className="checkbox-group">
                  {/* <input
                    type="checkbox"
                    checked={checkboxes.marriageRegistration === "registered"}
                    onChange={() =>
                      handleCheck("marriageRegistration", "registered")
                    }
                    className="custom-checkbox"
                  />
                  <label>มีทะเบียนสมรส</label>

                  <input
                    type="checkbox"
                    checked={
                      checkboxes.marriageRegistration === "notRegistered"
                    }
                    onChange={() =>
                      handleCheck("marriageRegistration", "notRegistered")
                    }
                    className="custom-checkbox"
                  />
                  <label>ไม่มีทะเบียนสมรส</label> */}
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="marriageRegistration"
                        value="registered"
                        checked={formData.marriageRegistration === "registered"}
                        onChange={handleRadioChange2}
                        className="custom-radio"
                      />
                      มีทะเบียนสมรส
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="marriageRegistration"
                        value="notRegistered"
                        checked={
                          formData.marriageRegistration === "notRegistered"
                        }
                        onChange={handleRadioChange2}
                        className="custom-radio"
                      />
                      ไม่มีทะเบียนสมรส
                    </label>
                  </div>
                </div>
              </div>
              <div className="right-side2">
                <div className="h2">
                  <h2>บุตร</h2>
                </div>
                <div className="checkbox-group">
                  {/* <input
                    type="checkbox"
                    checked={checkboxes.childrenStatus === "hasChildren"}
                    onChange={() =>
                      handleCheck("childrenStatus", "hasChildren")
                    }
                    className="custom-checkbox"
                  />
                  <label>มีบุตร</label>

                  <input
                    type="checkbox"
                    checked={checkboxes.childrenStatus === "noChildren"}
                    onChange={() => handleCheck("childrenStatus", "noChildren")}
                    className="custom-checkbox"
                  />
                  <label>ไม่มีบุตร</label> */}
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="child"
                        value="haveChild"
                        checked={formData.child === "haveChild"}
                        onChange={handleRadioChange3}
                        className="custom-radio"
                      />
                      มีบุตร
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="child"
                        value="notChild"
                        checked={formData.child === "notChild"}
                        onChange={handleRadioChange3}
                        className="custom-radio"
                      />
                      ไม่มีบุตร
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h4>จำนวนบุตร/คน</h4>
                <input
                  type="number"
                  id="numChildren"
                  class="form-control"
                  name="numChildren"
                  value={formData.numChildren}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-6">
                <h4>จำนวนบุตรกำลังศึกษา/คน</h4>
                <input
                  type="number"
                  id="numChildrenStudying"
                  class="form-control"
                  name="numChildrenStudying"
                  value={formData.numChildrenStudying}
                  onChange={handleFormDataChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <h4>จำนวนบุตรอายุตํ่ากว่า 6 ปี/คน</h4>
              </div>
              <div class="col-md-6">
                <h4>วันเดือนปีเกิดของบุตรที่อายุต่ำกว่า</h4>
                <h4>6 ปี/คน</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="number"
                  class="form-control"
                  id="numChildrenUnder6"
                  name="numChildrenUnder6"
                  value={formData.numChildrenUnder6}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-4">
                <input
                  type="date"
                  class="form-control"
                  id="birthdateChildrenUnder6"
                  name="birthdateChildrenUnder6"
                  value={formData.birthdateChildrenUnder6}
                  onChange={handleFormDataChange}
                />
              </div>
              <div class="col-md-2">
                {/* <button type="button" className="add-button">
                  {" "}
                  เพิ่ม
                </button> */}
                <button
                  type="button"
                  className="add-button"
                  onClick={addEmployee}
                >
                  เพิ่ม
                </button>
              </div>
            </div>
            <br />
            <div className="container-one-table">
              <table>
                <thead>
                  <tr>
                    <th className="id2-column">ลำดับ</th>
                    <th className="namee-column">
                      วันเดือนปีเกิด(วว/ดด/ปปปป(พ.ศ.))ของบุตรที่อายุตํ่ากว่า 6
                      ปี/คน
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="id-column">{employee.id}</td>
                      <td className="name-column">{employee.name}</td>
                      <td>
                        <button
                          className="delete-button1"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          ลบรายชื่อ
                        </button>
                      </td>
                    </tr>
                  ))} */}
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="id-column">{employee.id}</td>
                      <td className="name-column">
                        <input
                          type="text"
                          value={employee.name}
                          onChange={(e) =>
                            handleNameChange(employee.id, e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <button
                          className="delete-button1"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          ลบรายชื่อ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="button-container">
          {/* <button
            type="button"
            className="add-button"
            onClick={handlereturnPage}
          >
            ย้อนกลับ
          </button> */}
          <button type="button" className="add-button" onClick={() => navigate(-1)}>
            ย้อนกลับ
          </button>
          {/* <button type="button" className="add-button" onClick={handleNextPage}> */}
          <button type="submit" className="add-button">
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contentss;
