import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  Divider,
  FacebookIcon,
  FormLogin,
  GoogleIcon,
  LoginSocial,
  Register,
  WarningLogin,
} from "./styled";

const newValidationSchema = zod.object({
  emailLogin: zod.string().email({ message: "Digite um email válido" }),
  passwordLogin: zod.string().min(6)
});

interface LoginValidation {
  emailLogin: string;
  passwordLogin: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginValidation>({
    resolver: zodResolver(newValidationSchema),
    defaultValues: {
      emailLogin: "",
      passwordLogin: "",
    }
  });

  function handleSubmitLogin(data: LoginValidation) {
    console.log(data);
  }

  const loginAndPassword = watch("emailLogin" && "passwordLogin");
  const isSubmitDisabled = !loginAndPassword;

  return (
    <>
      <div>
        <h1>login</h1>
      </div>

      <FormLogin onSubmit={handleSubmit(handleSubmitLogin)}>
        <label htmlFor="emailLogin">email</label>
        <input id="emailLogin" type="text" {...register("emailLogin")} />
        <div>
          <WarningLogin> {errors.emailLogin?.message} </WarningLogin>
        </div>
        <label htmlFor="passwordLogin">senha</label>
        <input
          id="passwordLogin"
          type="password"
          {...register("passwordLogin")}
        />
        <a href="#">Esqueci minha senha</a>

        <div>
          <button type="submit" disabled={isSubmitDisabled}>
            {" "}
            ENTRAR{" "}
          </button>
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
