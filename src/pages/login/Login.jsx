import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center"
    }}>
      <input
        style={{padding:10,marginBottom:20}}
        type="text"
        placdeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        style={{padding:10,marginBottom:20}}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleClick} style={{padding:10 , width:100}}>Login</button>
    </div>
  );
};
export default Login;
