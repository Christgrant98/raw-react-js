import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// todo: we left code in the part of selecting how we are going to hanlde setValues into inputs

const RegistrationPage = () => {
  
  const handleRegistration = () => {
    return alert('this is an attempt of register dude');
  }

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
          onChange= {undefined}
        />
         <input
          className="task-input"
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
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
