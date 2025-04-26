import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      setMessage({ text: "✅ Account created successfully! Redirecting to login...", type: "success" });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMessage({ text: `❌ ${err.message}`, type: "error" });
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      {message.text && <div className={`message ${message.type}`}>{message.text}</div>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <p className="auth-footer">
        Already have an account?{" "}
        <Link to="/login" className="auth-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
