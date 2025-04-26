import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage({ text: "✅ Login successful!", type: "success" });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setMessage({ text: `❌ ${err.message}`, type: "error" });
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="auth-footer">
        Don't have an account?{" "}
        <Link to="/signup" className="auth-link">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
