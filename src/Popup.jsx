import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <button className="open-popup-btn" onClick={togglePopup}>
        Join Group
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <span>
                Let’s learn, share & inspire each other with our passion for computer engineering. Sign up now ✌️
              </span>
              <button className="close-popup-btn" onClick={togglePopup}>
                &times;
              </button>
            </div>
            <h2>Create Account</h2>
            <div className="form-container">
              <form>
                <div className="name-fields">
                  <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
                  <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                </div>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                <button type="submit" className="create-account-btn">Create Account</button>
                <div className="social-signup">
                  <button type="button" className="facebook-signup-btn">Sign up with Facebook</button>
                  <button type="button" className="google-signup-btn">Sign up with Google</button>
                </div>
              </form>
            </div>
            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            <p className="signin-text">Already have an account? <a href="#">Sign In</a></p>
            <img src="https://cdn-images-1.medium.com/max/2000/1*9UN-8OUzyVJBaKiVNX5dig.png" alt="Signup" className="signup-image"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
