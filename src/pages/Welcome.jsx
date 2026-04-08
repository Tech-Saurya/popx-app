import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Welcome to PopX</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button 
        className="btn btn-primary"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      <button 
        className="btn btn-secondary"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}