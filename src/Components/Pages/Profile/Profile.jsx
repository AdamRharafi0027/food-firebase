import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase/firebase";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../../../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (username !== user.displayName) {
        await updateProfile(user, {
          displayName: username,
        });
      }
      if (password) {
        // Handle password change logic here if needed
        alert("Password change is not yet implemented.");
      }

      alert("Profile updated successfully!");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="New Password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
