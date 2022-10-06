import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { auth, signInWithGoogle } from "../../service/firebase";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import {
  Divider,
  FormLogin,
  GoogleIcon,
  LoginSocial,
  Register,
  WarningLogin,
} from "./styled";
import { useState } from "react";

const newValidationSchema = zod.object({
  emailLogin: zod.string().email({ message: "Digite um email válido" }),
  passwordLogin: zod.string().min(6),
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
    },
  });


 

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmitLogin(data: LoginValidation) {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.emailLogin,
        data.passwordLogin
      );

      if (user) {
        navigate("/user");
      }
    } catch (err: any) {
      if (err.code === "auth/user-not-found" || "auth/wrong-password") {
        let errorM = "usuário e/ou senha inválido";
        setErrorMessage(errorM);
      }
    }
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
        <p>{errorMessage && errorMessage}</p>
        <div>
          <WarningLogin> {errors.emailLogin?.message} </WarningLogin>
        </div>
        <label htmlFor="passwordLogin">senha</label>
        <input
          id="passwordLogin"
          type="password"
          {...register("passwordLogin")}
        />

        

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
        
        <div onClick={() => {
          signInWithGoogle()
        }}>
          <GoogleIcon />
          <h4>Entre com google</h4>
        </div>
      </LoginSocial>
    </>
  );
}
