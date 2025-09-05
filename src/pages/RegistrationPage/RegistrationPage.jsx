import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/browse");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
  <div className="registration-container">
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  </div>
);

}
