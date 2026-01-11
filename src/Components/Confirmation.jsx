import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";

function Confirmation() {
  const navigate = useNavigate();

  const { setFormData } = useForm();

  const handleFinish = () => {
    localStorage.removeItem("formData");

    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "Arcade",
      billing: "monthly",
      addons: {
        online: false,
        storage: false,
        profile: false,
      },
    });

    navigate("/");
  };

  return (
    <main>
      <div className="confirmation-container">
        <div className="confirmation-icon">✔</div>

        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription. We hope you enjoy using our
          platform. If you ever need support, please fell free to contact us.
        </p>

        <button onClick={handleFinish}>Back to Home</button>
      </div>
    </main>
  );
}

export default Confirmation;
