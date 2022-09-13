import { Link } from "react-router-dom";
import {
  Divider,
  FacebookIcon,
  FormLogin,
  GoogleIcon,
  LoginSocial,
  Register,
} from "./styled";

export function LoginForm() {
  return (
    <>
      <div>
        <h1>login</h1>
      </div>
      <FormLogin>
        <label htmlFor="email">email</label>
        <input id="email" type="text" />

        <label htmlFor="password">senha</label>
        <input id="password" type="password" />
        <a href="#">Esqueci minha senha</a>

        <div>
          <button type="submit"> ENTRAR </button>
        </div>
      </FormLogin>
      <Register>
        <p>
          Ainda não tem uma conta?<Link to="/register"> Registre-se.</Link>
        </p>
      </Register>
      <Divider>OU</Divider>
      <LoginSocial>
        <div>
          <FacebookIcon />
          <h3>Entre com facebook</h3>
        </div>
        <div>
          <GoogleIcon />
          <h3>Entre com google</h3>
        </div>
      </LoginSocial>
    </>
  );
}
