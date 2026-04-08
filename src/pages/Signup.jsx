import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Create your PopX account</h2>

      <label className="label">Full Name*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Phone number*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Email address*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Password*</label>
      <input type="password" className="input" placeholder="Marry Doe" />

      <label className="label">Company name</label>
      <input className="input" placeholder="Marry Doe" />

      <p className="label">Are you an Agency?*</p>

      <div style={{ display: "flex", gap: "15px" }}>
        <label><input type="radio" name="agency" /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>

      <button 
        className="btn btn-primary"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>
    </div>
  );
}