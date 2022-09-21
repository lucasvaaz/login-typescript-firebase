
import { FormRegister } from "./styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"



const newValidationSchema = zod.object({
  name: zod.string().min(3, { message: "Mínimo de 3 caracteres" }).max(20, { message: "Máximo de 20 caracteres" }),
  lastName: zod.string().min(2, { message: "Mínimo de 2 caracteres"  }).max(20, { message: "Máximo de 20 caracteres" }),
  email: zod.string().email({ message: "Digite um email válido" }),
  password: zod.string().min(6, { message: "Mínimo de 6 caracteres" }).max(16, { message: "Máximo de 16 caracteres" }),
  passwordConfirm: zod.string().min(6, { message: "Mínimo de 6 caracteres" }).max(16, { message: "Máximo de 16 caracteres" }),
  
})

interface RegisterValidation {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string
  
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
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
 }
})

function handleSubmitRegister(data: RegisterValidation) {
  console.log(data)
}

  const registerWatch = watch("name" && "lastName" && "email" && "password" && "passwordConfirm");
  const isSubmitDisabled = !registerWatch;

  const passwordWatch = watch("password");
  const confirmPasswordWatch = watch("passwordConfirm");

console.log(errors)

  return (
    <>
      <div>
        <h1>cadastrar</h1>
      </div>
      <FormRegister onSubmit={handleSubmit(handleSubmitRegister)}>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" {...register("name")} />
        <p> {errors.name ? ( <p> { errors.name.message } </p> ) : (<p> </p>) } </p>

        <label htmlFor="lastName">Sobrenome:</label>
        <input id="lastName" type="text" {...register("lastName")} />
        <p> {errors.lastName ? ( <p> { errors.lastName.message } </p> ) : (<p> </p>) } </p>

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" {...register("email")} />
        <p> {errors.email ? ( <p> { errors.email.message } </p> ) : (<p> </p>) } </p>

        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" {...register("password")} />
        <p> {errors.password ? ( <p> { errors.password.message } </p> ) : (<p> </p>) } </p>

        <label htmlFor="passwordConfirm">Confirmar senha:</label>
        <input id="passwordConfirm" type="password" {...register("passwordConfirm")} />
        <p> {errors.passwordConfirm ? ( <p> { errors.passwordConfirm.message } </p> ) : (<p> </p>) } </p>
        
       {confirmPasswordWatch !== passwordWatch && ( <p> as senhas precisam ser iguais </p> ) }
      
        

        <div>
          <button type="submit" disabled={isSubmitDisabled}> CADASTRAR </button>
        </div>
      </FormRegister>
    </>
  );
}
