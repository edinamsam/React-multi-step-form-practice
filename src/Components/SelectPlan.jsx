import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";

function SelectPlan() {
  const navigate = useNavigate();

  const { formData, setFormData } = useForm();

  const plans = [
    { name: "Arcade", monthly: 9, yearly: 90 },
    { name: "Advanced", monthly: 12, yearly: 120 },
    { name: "Pro", monthly: 15, yearly: 150 },
  ];

  const handlePlanSelect = (plan) => {
    setFormData((prev) => {
      return { ...prev, plan: plan };
    });
  };

  const toggleBilling = () => {
    setFormData((prev) => {
      return {
        ...prev,
        billing: prev.billing === "monthly" ? "yearly" : "monthly",
      };
    });
  };

  return (
    <main>
      <div className="select-plan-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plans">
          {plans.map((p) => {
            return (
              <>
                <label
                  key={p.name}
                  tabIndex={0}
                  role="button"
                  className={`plan-container ${
                    formData.plan === p.name ? "active-plan" : ""
                  }`}
                  onClick={() => handlePlanSelect(p.name)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter" || e.key == " ") {
                      handlePlanSelect(p.name);
                    }
                  }}
                >
                  <img src="" alt={`${p.name} icon`} />
                  <div>
                    <h2>{p.name}</h2>
                    <p>
                      $
                      {formData.billing === "monthly"
                        ? `${p.monthly}`
                        : `${p.yearly}`}
                    </p>
                  </div>
                </label>
              </>
            );
          })}
        </div>

        <div className="plan-toggle">
          <span>Monthly</span>
          <label>
            <input
              type="checkbox"
              checked={formData.billing === "yearly"}
              onChange={toggleBilling}
              aria-label="Toggle yearly billing"
            />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
        <div className="plan-btns">
          <button onClick={() => navigate("/")}>Go Back</button>
          <button onClick={() => navigate("/add-ons")}>Next Step</button>
        </div>
      </div>
    </main>
  );
}

export default SelectPlan;
