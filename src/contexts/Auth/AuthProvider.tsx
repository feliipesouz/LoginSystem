// O provider vai usar o contexto para criar um globo em volta da minha aplicação e eu vou ter acesso dentro da minha aplicação, a todos os dados dentro do meu contexto.
import React from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const api = useApi(); //CustomHook

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };
  
  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
