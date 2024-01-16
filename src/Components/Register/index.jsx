import { Divider } from "@mui/material";

const handleRegistration = () => {
  return alert('this is an attempt of register dude');
}

const changeScreenEvent = () => {
  alert('you tried to access to login page')
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
      <span>Dont have an account? 
        <span style={{color: "#49b479", fontWeight: "700"}}
          onClick={changeScreenEvent}>Sign up</span>
      </span>
      <br/>
      <button onClick={handleRegistration}>Sign up</button>
    </div>
  );
}

export default RegistrationPage;
