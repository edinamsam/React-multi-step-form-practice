import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";

function YourInfo() {
  const navigate = useNavigate();

  const { formData, setFormData } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    navigate("/selectPlan");
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
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email address">Email Address</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone number">Phone number</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="info-btn-container">
            <button className="info-btn" type="submit">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default YourInfo;
