import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const handleRegistration = () => {
  return alert('this is an attempt of register dude');
}

const RegistrationPage = () => {
  return (
    <div className="main-container">
    <div className="second-container">
      <h1>Register</h1>
      <form>
        <input
          className="task-input"
          name="email"
          type="text"
          placeholder="example@mail.com"
        />
        <input
          className="task-input"
          type="password" 
          placeholder="Enter your password"
        />
      </form>
    </div>
      <Divider />
      <br/>
      <span>Already have an account? 
      </span>
      <Link to='/' style={{color: "#49b479", fontWeight: "700"}}> Sign in</Link>
      <br/>
      <button onClick={handleRegistration}>Sign up</button>
    </div>
  );
}

export default RegistrationPage;
