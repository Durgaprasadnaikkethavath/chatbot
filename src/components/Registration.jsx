import React, { useState } from "react";

const Registration = () => {
  const [emailVerified, setEmailVerified] = useState(false);

  return (
    <div className="registration_container">
      <h2 className="registration_heading">User Registration</h2>
      <input type="text" placeholder="Name" className="registration_input" />
      <input type="email" placeholder="Email" className="registration_input" />
      <input
        type="password"
        placeholder="Password"
        className="registration_input"
      />
      <button className="registration_btn">Continue with Google</button>
      {!emailVerified ? (
        <button
          onClick={() => setEmailVerified(true)}
          className="registration_btn"
        >
          Verify Email
        </button>
      ) : (
        <p className="text-green-600">Email Verified!</p>
      )}
    </div>
  );
};

export default Registration;
