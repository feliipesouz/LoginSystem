import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Dados incorretos.");
      }
    }
  };

  return (
    <div>
      <h2>Página Fechada</h2>
      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
