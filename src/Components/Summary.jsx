import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";

function Summary() {
  const navigate = useNavigate();

  const { formData } = useForm();

  const planPrices = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addonPrices = {
    online: { monthly: 1, yearly: 10 },
    storage: { monthly: 2, yearly: 20 },
    profile: { monthly: 2, yearly: 20 },
  };

  const planCost = planPrices[formData.plan][formData.billing];

  const addonsTotal = Object.entries(formData.addons)
    .filter((item) => item[1] === true)
    .reduce((total, [addon]) => {
      return total + addonPrices[addon][formData.billing];
    }, 0);

  const total = planCost + addonsTotal;

  return (
    <main>
      <div className="summary-container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="summary-sub-container">
          <div className="summary-top">
            <div>
              <h2>
                {formData.plan} ({formData.billing})
              </h2>
              <button onClick={() => navigate("/selectPlan")}>Change</button>
            </div>
            <p>
              ${planCost}/{formData.billing === "monthly" ? "mo" : "yr"}
            </p>
          </div>

          <hr />

          <div className="summary-bottom">
            {Object.entries(formData.addons).map(([addon, selected]) => {
              return (
                selected && (
                  <div key={addon} className="addon-row">
                    <span>{addon}</span>
                    <span>
                      +${addonPrices[addon][formData.billing]}/
                      {formData.billing === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="total">
          <span>
            Total (per {formData.billing === "monthly" ? "month" : "year"})
          </span>
          <strong>
            +${total}/{formData.billing === "monthly" ? "mo" : "yr"}
          </strong>
        </div>

        <div className="summary-btns">
          <button onClick={() => navigate("/add-ons")}>Go back</button>
          <button onClick={() => navigate("/confirmation")}>Confirm</button>
        </div>
      </div>
    </main>
  );
}

export default Summary;
