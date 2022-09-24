import { FormRegister } from "./styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useNavigate } from "react-router-dom";

const newValidationSchema = zod.object({
  
  email: zod.string().email({ message: "Digite um email válido" }),
  password: zod
    .string()
    .min(6, { message: "Mínimo de 6 caracteres" })
    .max(16, { message: "Máximo de 16 caracteres" }),
  passwordConfirm: zod
    .string()
    .min(6, { message: "Mínimo de 6 caracteres" })
    .max(16, { message: "Máximo de 16 caracteres" }),
});

interface RegisterValidation {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterValidation>({
    resolver: zodResolver(newValidationSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const navigate = useNavigate()

  async function handleSubmitRegister(data: RegisterValidation) {
    try {
      const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
      
      if (user) {
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const registerWatch = watch(
   "email" && "password" && "passwordConfirm"
  );
  const isSubmitDisabled = !registerWatch;

  const passwordWatch = watch("password");
  const confirmPasswordWatch = watch("passwordConfirm");

  const isSubmitDisabledPassword = confirmPasswordWatch !== passwordWatch;

  console.log();

  return (
    <>
      <div>
        <h1>cadastrar</h1>
      </div>
      <FormRegister onSubmit={handleSubmit(handleSubmitRegister)}>

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" {...register("email")} />
        <p> {errors.email ? <p> {errors.email.message} </p> : <p> </p>} </p>

        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" {...register("password")} />
        <p>
          
          {errors.password ? <p> {errors.password.message} </p> : <p> </p>}
        </p>

        <label htmlFor="passwordConfirm">Confirmar senha:</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm")}
        />
        <p>
          
          {errors.passwordConfirm ? (
            <p> {errors.passwordConfirm.message} </p>
          ) : (
            <p> </p>
          )}
        </p>

        {confirmPasswordWatch !== passwordWatch && (
          <p> As senhas precisam ser iguais </p>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitDisabled || isSubmitDisabledPassword}
          >
            
            CADASTRAR
          </button>
        </div>
      </FormRegister>
    </>
  );
}
