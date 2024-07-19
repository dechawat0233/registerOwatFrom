import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios"; // นำเข้า axios สำหรับการส่งคำขอ HTTP

function Contents({ formData, setFormData }) {
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
    {
      degree: "ประถมศึกษาปีที่ 1-6",
      institution: "",
      location: "",
      duration: "",
    },
    {
      degree: "มัธยมศึกษาปีที่ 1-3/ ปสช.",
      institution: "",
      location: "",
      duration: "",
    },
    {
      degree: "มัธยมศึกษาปีที่ 1-3/ ปสช.",
      institution: "",
      location: "",
      duration: "",
    },
    {
      degree: "มัธยมศึกษาปีที่ 4-6/ ปวส.",
      institution: "",
      location: "",
      duration: "",
    },
    { degree: "ปริญญาตรี", institution: "", location: "", duration: "" },
    { degree: "อื่นๆ", institution: "", location: "", duration: "" },
  ]);

  const [workHistory, setWorkHistory] = useState([
    {
      duration: "",
      workplace: "",
      position: "",
      lastSalary: "",
      reasonForLeaving: "",
    },
    {
      duration: "",
      workplace: "",
      position: "",
      lastSalary: "",
      reasonForLeaving: "",
    },
    {
      duration: "",
      workplace: "",
      position: "",
      lastSalary: "",
      reasonForLeaving: "",
    },
  ]);

  const [documents, setDocuments] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedDocuments = files.map((file, index) => ({
      id: index + 1, // You can use a more sophisticated method to generate IDs
      name: file.name,
      file: file, // Store the file object if needed for uploading later
    }));
    setDocuments([...documents, ...updatedDocuments]);

    // setFormData((prevData) => ({ ...prevData, documents: files }));
    setFormData((prevData) => ({
      ...prevData,
      documents: [...prevData.documents, ...updatedDocuments],
    }));
  };

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
      setDocuments(documents.filter((doc) => doc.id !== id));
      setIsReadyToSave(false);
    }
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][field] = value;
    setEducationData(updatedEducationData);

    setFormData((prevData) => ({
      ...prevData,
      educationData: updatedEducationData, // Update educationData in formData
    }));
  };

  console.log("formData", formData);

  const handleWorkHistoryChange = (index, field, value) => {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    setWorkHistory(updatedWorkHistory);

    setFormData((prevData) => ({
      ...prevData,
      workHistory: updatedWorkHistory, // Update educationData in formData
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({ ...prevData, accountBook: [e.target.value] }));
  };
  const handleRadioChange2 = (e) => {
    setFormData((prevData) => ({ ...prevData, rideBicycle: [e.target.value] }));
  };
  const handleRadioChange3 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ridingMotorcycle: [e.target.value],
    }));
  };
  const handleRadioChange4 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      driverLicenseType: [e.target.value],
    }));
  };
  const handleRadioChange5 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      canWorkAnyWhere: [e.target.value],
    }));
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDocumentChange = (index, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].name = value;
    setDocuments(updatedDocuments);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("ไฟล์ถูกอัปโหลดสำเร็จ");
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการอัปโหลดไฟล์", error);
      });
  };

  useEffect(() => {
    document.title = "น้องต้นแขมอิอิ";
  }, []);
  useEffect(() => {
    const allChecked = Object.values(checkboxes).every(
      (value) => value === true
    );
    setIsReadyToSave(allChecked);
  }, [checkboxes]);

  const handleNextPage = () => {
    navigate("/contentss");
  };
  const handleSave = () => {
    if (isReadyToSave) {
      console.log("บันทึกข้อมูล...");
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/contentss");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formDataToSubmit = new FormData();
  //   // formDataToSubmit.append("name", formData.name);
  //   // formDataToSubmit.append("email", formData.email);
  //   // formDataToSubmit.append("password", formData.password);
  //   // formDataToSubmit.append("image", formData.image);
  //   // formDataToSubmit.append("choose", JSON.stringify(formData.choose));

  //   for (const key in formData) {
  //     if (key === "image") {
  //       // Append the image file
  //       formDataToSubmit.append(key, formData[key]);
  //     } else if (key === "documents") {
  //       // Append each document file
  //       formData[key].forEach((document, index) => {
  //         formDataToSubmit.append(`documents[${index}]`, document.file);
  //       });
  //     } else if (Array.isArray(formData[key])) {
  //       // Convert arrays to JSON strings
  //       formDataToSubmit.append(key, JSON.stringify(formData[key]));
  //     } else {
  //       formDataToSubmit.append(key, formData[key]);
  //     }
  //     console.log(`${key} : ${formData[key]}`);
  //   }

  //   // formDataToSubmit.append("name", formData.name);
  //   // formDataToSubmit.append("choose", JSON.stringify(formData.choose));
  //   // formDataToSubmit.append("phone", formData.phone);

  //   try {
  //     const response = await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       body: formDataToSubmit,
  //     });

  //     if (response.ok) {
  //       console.log("User created successfully");
  //       navigate("/");
  //     } else {
  //       console.error("Failed to create user");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // if (!formData.email || formData.email.trim() === "") {
  //   //   console.error("Email is required");
  //   //   return;
  //   // }

  //   const formDataToSubmit = new FormData();

  //   for (const key in formData) {
  //     if (key === "image") {
  //       // Append the image file
  //       formDataToSubmit.append(key, formData[key]);
  //     } else if (key === "documents") {
  //       // Append each document file
  //       // formData[key].forEach((document, index) => {
  //       //   formDataToSubmit.append(`documents[${index}]`, document.file);
  //       // });
  //       /////
  //       formData[key].forEach((document, index) => {
  //         formDataToSubmit.append("documents", document.file);
  //       });
  //     } else if (Array.isArray(formData[key])) {
  //       // Convert arrays to JSON strings
  //       formDataToSubmit.append(key, JSON.stringify(formData[key]));
  //     } else {
  //       formDataToSubmit.append(key, formData[key]);
  //     }
  //     console.log(key + " : " + formData[key]);
  //   }

  //   try {
  //     const response = await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       body: formDataToSubmit,
  //     });

  //     if (response.ok) {
  //       console.log("User created successfully");
  //       navigate("/");
  //     } else {
  //       const errorData = await response.json();
  //       console.error("Failed to create user:", errorData.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
  
    for (const key in formData) {
      if (key === 'image') {
        formDataToSubmit.append(key, formData[key]);
      } else if (key === 'documents') {
        formData[key].forEach((document) => {
          formDataToSubmit.append('documents', document.file);
        });
      } else if (typeof formData[key] === 'object') {
        formDataToSubmit.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    }
  
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: formDataToSubmit,
      });
  
      if (response.ok) {
        console.log('User created successfully');
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Failed to create user:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                  <th className="duration-column">
                    ระยะเวลาที่ศึกษา ตั้งแต่ต้นจนจบ
                  </th>
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
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="location-column">
                      <input
                        type="text"
                        value={education.location}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "location",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="duration-column">
                      <input
                        type="text"
                        value={education.duration}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "duration",
                            e.target.value
                          )
                        }
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
                  <th className="duration-column">ระยะเวลาทำงาน (ปี)</th>
                  <th className="workplace-column">
                    ชื่อสถานที่ทำงานและที่อยู่
                  </th>
                  <th className="position-column">
                    ตำแหน่งหน้าที่ที่รับผิดชอบโดยสังเขป
                  </th>
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
                        onChange={(e) =>
                          handleWorkHistoryChange(
                            index,
                            "duration",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="workplace-column">
                      <input
                        type="text"
                        value={item.workplace}
                        onChange={(e) =>
                          handleWorkHistoryChange(
                            index,
                            "workplace",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="position-column">
                      <input
                        type="text"
                        value={item.position}
                        onChange={(e) =>
                          handleWorkHistoryChange(
                            index,
                            "position",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="salary-column">
                      <input
                        type="text"
                        value={item.lastSalary}
                        onChange={(e) =>
                          handleWorkHistoryChange(
                            index,
                            "lastSalary",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td className="reason-column">
                      <input
                        type="text"
                        value={item.reasonForLeaving}
                        onChange={(e) =>
                          handleWorkHistoryChange(
                            index,
                            "reasonForLeaving",
                            e.target.value
                          )
                        }
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
                type="radio"
                // checked={checkboxes.hasBankAccount}
                // onChange={() => handleCheck("hasBankAccount")}
                name="accountBook"
                value="haveAccountBook"
                checked={formData.accountBook.includes("haveAccountBook")}
                onChange={handleRadioChange}
                className="custom-radio"
              />
              <label>มีสมุดบัญชีธนาคาร</label>
            </div>
            <div className="checkbox-group">
              <input
                type="radio"
                // checked={checkboxes.noBankAccount}
                // onChange={() => handleCheck("noBankAccount")}
                name="accountBook"
                value="notAccountBook"
                checked={formData.accountBook.includes("notAccountBook")}
                onChange={handleRadioChange}
                className="custom-radio"
              />
              <label>ไม่มีสมุดบัญชีธนาคาร</label>
            </div>
            <div className="textcontainer-c">
              <div class="row">
                <div class="col-md-5">
                  <h4>ชื่อธนาคาร</h4>
                  <input
                    type="text"
                    id="bankname"
                    name="bankname"
                    value={formData.bankname}
                    onChange={handleChange}
                    class="form-control"
                  />
                </div>
                <div class="col-md-5">
                  <h4>สาขาธนาคาร</h4>
                  <input
                    type="text"
                    id="bankBranch"
                    name="bankBranch"
                    value={formData.bankBranch}
                    onChange={handleChange}
                    class="form-control"
                  />
                </div>
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
              <input
                type="text"
                class="form-control"
                id="emergencyName"
                name="emergencyName"
                value={formData.emergencyName}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>เบอร์โทรศัพท์ที่ติดต่อได้</h4>
              <input
                type="text"
                id="parentContact"
                class="form-control"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>เบอร์โทรศัพท์พี่/น้อง</h4>
              <input
                type="text"
                id="Contact"
                class="form-control"
                name="Contact"
                value={formData.Contact}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h4>เบอร์โทรศัพท์พ่อ/แม่</h4>
              <input
                type="text"
                id="emergencyContact"
                class="form-control"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <h4>เบอร์โทรศัพท์ญาติ</h4>
              <input
                type="text"
                id="Contactt"
                class="form-control"
                name="Contactt"
                value={formData.Contactt}
                onChange={handleChange}
              />
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
                    type="radio"
                    // checked={checkboxes.canRideBicycle}
                    // onChange={() => handleCheck("canRideBicycle")}
                    name="rideBicycle"
                    value="canRideBicycle"
                    checked={formData.rideBicycle.includes("canRideBicycle")}
                    onChange={handleRadioChange2}
                    className="custom-radio"
                  />
                  <label> ได้ </label>
                  <input
                    type="radio"
                    // checked={!checkboxes.canRideBicycle}
                    // onChange={() => handleCheck("canRideBicycle")}
                    // className="custom-checkbox"
                    name="rideBicycle"
                    value="cantRideBicycle"
                    checked={formData.rideBicycle.includes("cantRideBicycle")}
                    onChange={handleRadioChange2}
                    className="custom-radio"
                  />
                  <label> ไม่ได้ </label>
                </div>
              </div>
              <div className="textcontainer-seven">
                <h4>ขับขี่รถยนต์</h4>
                <div className="checkbox-group">
                  <input
                    type="radio"
                    // checked={checkboxes.canRideMotorcycle}
                    // onChange={() => handleCheck("canRideMotorcycle")}
                    // className="custom-checkbox"
                    name="rideMotorcycle"
                    value="canRideMotorcycle"
                    checked={formData.ridingMotorcycle.includes(
                      "canRideMotorcycle"
                    )}
                    onChange={handleRadioChange3}
                    className="custom-radio"
                  />
                  <label> ได้ </label>
                  <input
                    type="radio"
                    // checked={!checkboxes.canRideMotorcycle}
                    // onChange={() => handleCheck("canRideMotorcycle")}
                    // className="custom-checkbox"
                    name="rideMotorcycle"
                    value="cantRideMotorcycle"
                    checked={formData.ridingMotorcycle.includes(
                      "cantRideMotorcycle"
                    )}
                    onChange={handleRadioChange3}
                    className="custom-radio"
                  />
                  <label> ไม่ได้ </label>
                </div>
                <div className="textcontainer-eight">
                  <h4>ใบอนุญาตขับขี่ประเภท</h4>
                  <div className="checkbox-group">
                    <input
                      type="radio"
                      // checked={checkboxes.temporaryLicense}
                      // onChange={() => handleCheck("temporaryLicense")}
                      // className="custom-checkbox"
                      name="license"
                      value="temporaryLicense"
                      checked={formData.driverLicenseType.includes(
                        "temporaryLicense"
                      )}
                      onChange={handleRadioChange4}
                      className="custom-radio"
                    />
                    <label> ชั่วคราว </label>
                    <input
                      type="radio"
                      // checked={!checkboxes.permanentLicense}
                      // onChange={() => handleCheck("permanentLicense")}
                      // className="custom-checkbox"
                      name="license"
                      value="permanentLicense"
                      checked={formData.driverLicenseType.includes(
                        "permanentLicense"
                      )}
                      onChange={handleRadioChange4}
                      className="custom-radio"
                    />
                    <label> ตลอดชีพ </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h4>ใบอนุญาตขับขี่เลขที่</h4>
                <input
                  type="text"
                  id="licenseNumber"
                  class="form-control"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-12">
                <h4>วันหมดอายุ</h4>
                <input
                  type="date"
                  id="expiryDate"
                  class="form-control"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="textcontainer-nine">
            <h4>
              สามารถและพร้อมที่จะเดินทางไปปฎิบัติงานในสถานที่ต่างๆ ได้หรือไม่
              เพราะเหตุผลใด
            </h4>
            <div className="checkbox-group">
              <input
                type="radio"
                // checked={checkboxes.canTravel}
                // onChange={() => handleCheck("canTravel")}
                // className="custom-checkbox"
                name="CanGoAnyWhere"
                value="canTravel"
                checked={formData.canWorkAnyWhere.includes("canTravel")}
                onChange={handleRadioChange5}
                className="custom-radio"
              />
              <label> ได้ </label>
              <input
                type="radio"
                // checked={checkboxes.cannotTravel}
                // onChange={() => handleCheck("cannotTravel")}
                // className="custom-checkbox"
                name="CanGoAnyWhere"
                value="cannotTravel"
                checked={formData.canWorkAnyWhere.includes("cannotTravel")}
                onChange={handleRadioChange5}
                className="custom-radio"
              />
              <label> ไม่ได้ </label>
              <input
                type="radio"
                // checked={checkboxes.otherReason}
                // onChange={() => handleCheck("otherReason")}
                // className="custom-checkbox"
                name="CanGoAnyWhere"
                value="otherReason"
                checked={formData.canWorkAnyWhere.includes("otherReason")}
                onChange={handleRadioChange5}
                className="custom-radio"
              />
              <label> อื่นๆ </label>
            </div>
          </div>
          {/* <div className="input-groupc">
          <input type="text" id="reason" name="reason" />
        </div> */}
          <div class="row">
            <div class="col-md-12">
              <input
                type="text"
                id="reason"
                class="form-control"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
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
            {/* <input
            aria-label="อัปโหลดไฟล์"
            data-test-id="storyboard-upload-input"
            id="storyboard-upload-input"
            multiple=""
            tabIndex="0"
            type="file"
            className="add-button1"
          /> */}
            <input
              aria-label="อัปโหลดไฟล์"
              data-test-id="storyboard-upload-input"
              id="storyboard-upload-input"
              multiple=""
              tabIndex="0"
              type="file"
              className="add-button1"
              onChange={handleFileChange}
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
              {/* {documents.map((document, index) => (
              <tr key={document.id}>
                <td className="idd-column">{index + 1}</td>
                <td className="document-column">
                  <div className="input-groupd1">
                    <input
                      type="text"
                      value={document.name}
                      onChange={(e) =>
                        handleDocumentChange(index, e.target.value)
                      }
                    />
                  </div>
                </td>
                <button
                  className="delete-button"
                  onClick={() => deleteDocument(document.id)}
                >
                  ลบ
                </button>
              </tr>
            ))} */}
              {documents.map((document, index) => (
                <tr key={document.id}>
                  <td className="idd-column">{index + 1}</td>
                  <td className="document-column">{document.name}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteDocument(document.id)}
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-container">
          {/* <button type="button" className="add-button" onClick={handleNextPage}> */}
          <button
            type="button"
            className="add-button"
            onClick={() => navigate(-1)}
          >
            ย้อนกลับ
          </button>
          {/* <button
            type="button"
            className="add-button3"
            onClick={handleSave}
            disabled={!isReadyToSave}
          >
            บันทึก
          </button> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contents;
