// D:\reacttrainkid\register\OwatMaid\src\UserForm.js

// import React, { useState } from "react";

// function UserForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = { name, email, password };

//     try {
//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       if (response.ok) {
//         const newUser = await response.json();
//         console.log("User created:", newUser);
//         // Reset form
//         setName("");
//         setEmail("");
//         setPassword("");
//       } else {
//         console.error("Failed to create user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//       </div>
//       <button type="submit">Create User</button>
//     </form>
//   );
// }

// export default UserForm;

import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: formData,
      });

      //   if (response.ok) {
      //     const newUser = await response.json();
      //     console.log("User created:", newUser);
      //     // Reset form
      //     setName("");
      //     setEmail("");
      //     setPassword("");
      //     setImage(null);
      //     setImagePreview(null);
      //   } else {
      //     console.error("Failed to create user");
      //   }
      if (response.ok) {
        const newUser = await response.json();
        console.log("User created:", newUser);
        // Reset form
        setName("");
        setEmail("");
        setPassword("");
        setImage(null);
        setImagePreview(null);
      } else {
        const errorData = await response.json();
        console.error("Failed to create user:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Profile Picture:
          <input type="file" onChange={handleImageUpload} />
        </label>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Selected"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
      </div>
      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
