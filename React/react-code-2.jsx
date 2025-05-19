import { useState } from "react";

function Login() {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;
    setMsg("Tentative de connexion avec " + user + "/" + pass);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <input name="password" />
      <button>Se connecter</button>
      <p>{msg}</p>
    </form>
  );
}

export default Login;