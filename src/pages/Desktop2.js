import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onANewUserClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <img className="desktop-2-child" alt="" src="/group-2.svg" />
      <div className="desktop-2-item" />
      <nav className="frame-parent">
        <div className="logo-1-wrapper">
          <div className="logo-1">
            <img className="vector-icon" alt="" src="/vector@2x.png" />
          </div>
        </div>
        <div className="login-wrapper">
          <div className="login">Login</div>
        </div>
        <div className="features-parent">
          <div className="features">Features</div>
          <div className="features">Pricing</div>
        </div>
        <div className="sign-up">Sign Up</div>
      </nav>
      <form className="log-in-your-account-parent">
        <b className="log-in-your-container">
          <span className="log-in-your">Log in your Account</span>
          <span className="span">!</span>
        </b>
        <div className="to-enjoy-all">To enjoy all of our cool features</div>
        <div className="forgot-password">Forgot password?</div>
        <div className="a-new-user-sign-up-wrapper">
          <div className="a-new-user-container" onClick={onANewUserClick}>
            <span className="a-new-user">-A new user?</span>
            <span className="sign-up1"> Sign Up</span>
          </div>
        </div>
        <div className="frame-group">
          <div className="email-address-parent">
            <div className="email-address">Email address</div>
            <div className="frame-child" />
          </div>
          <div className="password-parent">
            <div className="password">Password</div>
            <img className="frame-item" alt="" src="/frame-10.svg" />
          </div>
        </div>
        <Button className="frame-inner" variant="primary" size="lg">
          Sign in
        </Button>
      </form>
      <div className="human-resource-management-port-wrapper">
        <div className="human-resource-management-container">
          <p className="human-resource-management">Human Resource Management</p>
          <p className="human-resource-management">
            Portal for Your Organizations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
