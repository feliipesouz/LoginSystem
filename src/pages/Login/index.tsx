import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = () => {
    
  }

  return (
    <div>
      <h2>Página Fechada</h2>
      <input type="text" value={email} placeholder="Digite seu e-mail" />
      <input type="password" value={password} placeholder="Digite sua senha" />
      <button onClick={handleLogin} />
    </div>
  );
};
