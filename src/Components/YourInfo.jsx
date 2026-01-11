import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";
import { useState } from "react";

function YourInfo() {
  const navigate = useNavigate();

  const { formData, setFormData } = useForm();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.entries(newErrors).length === 0) {
      navigate("/selectPlan");
    }
  };

  return (
    <main>
      <div className="info-container">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form className="info-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <small className="error" aria-live="polite">
              {errors.name}
            </small>
          )}

          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="error" aria-live="polite">
              {errors.email}
            </small>
          )}

          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <small className="error" aria-live="polite">
              {errors.phone}
            </small>
          )}

          <div className="info-btn-container">
            <button
              className="info-btn"
              type="submit"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default YourInfo;
