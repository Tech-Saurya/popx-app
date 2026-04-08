import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Signin to your PopX account</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <label className="label">Email Address</label>
      <input className="input" placeholder="Enter email address" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Enter password" />

      <button 
        className="btn btn-secondary"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
}