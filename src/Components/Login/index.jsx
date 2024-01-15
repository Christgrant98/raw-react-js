import { Button, Divider } from "@mui/material";

const handleLogin = () => {
  return alert('this is an attempt of logging dude');
}

const LoginPage = () => {
  return (
    <div className="main-container">
    <div className="second-container">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}

export default LoginPage;
