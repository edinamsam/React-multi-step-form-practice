import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";

function AddOns() {
  const navigate = useNavigate();

  const { formData, setFormData } = useForm();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        addons: {
          ...prev.addons,
          [name]: checked,
        },
      };
    });
  };

  return (
    <main>
      <div className="add-ons-container">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="add-ons">
          <div className="add-ons-online">
            <label>
              <input
                type="checkbox"
                name="online"
                checked={formData.addons.online}
                onChange={handleChange}
              />
            </label>
            <div className="online-on">
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
            <span>+$1/mo</span>
          </div>

          <div className="add-ons-larger">
            <label>
              <input
                type="checkbox"
                name="storage"
                checked={formData.addons.storage}
                onChange={handleChange}
              />
            </label>
            <div className="larger-on">
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span>+$2/mo</span>
          </div>

          <div className="add-ons-customizable">
            <label>
              <input
                type="checkbox"
                name="profile"
                checked={formData.addons.profile}
                onChange={handleChange}
              />
            </label>
            <div className="customizable">
              <h2>Customizable Profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <span>+$2/mo</span>
          </div>
        </div>

        <div className="add-ons-btns">
          <button onClick={() => navigate("/selectPlan")}>Go back</button>
          <button onClick={() => navigate("/summary")}>Next Step</button>
        </div>
      </div>
    </main>
  );
}

export default AddOns;
