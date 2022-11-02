//RequireAuth significa: precisa de autenticação.
//Aqui vamos verificar se o usuário está logado ou não, caso esteja, mostro a página privada, se não, mostro a página de login.

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  //Recebo um children porque é um component dentro de outro(a página que queremos acessar).
  return children;
};
