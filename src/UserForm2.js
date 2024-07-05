// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function UserForm2({ formData, setFormData }) {
//   const [imagePreview, setImagePreview] = useState(formData.image ? URL.createObjectURL(formData.image) : null);
//   const navigate = useNavigate();

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({ ...prevData, image: file }));
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSubmit = new FormData();
//     formDataToSubmit.append('name', formData.name);
//     formDataToSubmit.append('email', formData.email);
//     formDataToSubmit.append('password', formData.password);
//     formDataToSubmit.append('image', formData.image);

//     try {
//       const response = await fetch('http://localhost:3000/users', {
//         method: 'POST',
//         body: formDataToSubmit,
//       });

//       if (response.ok) {
//         console.log('User created successfully');
//         navigate('/userForm');
//       } else {
//         console.error('Failed to create user');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Upload Image:</label>
//         <input type="file" onChange={handleImageUpload} required />
//         {imagePreview && <img src={imagePreview} alt="Image Preview" width="100" />}
//       </div>
//       <button type="button" onClick={() => navigate(-1)}>Back</button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UserForm2;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm2({ formData, setFormData }) {
  const [imagePreview, setImagePreview] = useState(
    formData.image ? URL.createObjectURL(formData.image) : null
  );
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const newChoices = checked
        ? [...prevData.choose, name]
        : prevData.choose.filter((choice) => choice !== name);
      return { ...prevData, choose: newChoices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("password", formData.password);
    formDataToSubmit.append("image", formData.image);
    formDataToSubmit.append("choose", JSON.stringify(formData.choose));

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        console.log("User created successfully");
        navigate("/");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload Image:</label>
        <input type="file" onChange={handleImageUpload} required />
        {imagePreview && (
          <img src={imagePreview} alt="Image Preview" width="100" />
        )}
      </div>
      <div>
        <label>Choose Options:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={formData.choose.includes("option1")}
              onChange={handleCheckboxChange}
            />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="option2"
              checked={formData.choose.includes("option2")}
              onChange={handleCheckboxChange}
            />
            Option 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="option3"
              checked={formData.choose.includes("option3")}
              onChange={handleCheckboxChange}
            />
            Option 3
          </label>
        </div>
      </div>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm2;
