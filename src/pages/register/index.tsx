
import { FormRegister } from "./styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"

const newValidationSchema = zod.object({
  name: zod.string().min(3),
  lastName: zod.string().min(2),
  email: zod.string().email(),
  password: zod.string().min(6),
  passwordConfirm: zod.string().min(6),
  
})

export function Register() {
  
 const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
 } = useForm({
  resolver: zodResolver(newValidationSchema),
  defaultValues: { 
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
 }
})

function handleSubmitRegister(data: any) {
  console.log(data)
}

  return (
    <>
      <div>
        <h1>cadastrar</h1>
      </div>
      <FormRegister onSubmit={handleSubmit(handleSubmitRegister)}>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" {...register("name")} />

        <label htmlFor="lastName">Sobrenome:</label>
        <input id="lastName" type="text" {...register("lastName")} />

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" {...register("email")} />

        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" {...register("password")} />

        <label htmlFor="passwordConfirm">Confirmar senha:</label>
        <input id="passwordConfirm" type="password" {...register("passwordConfirm")} />
       
      
        

        <div>
          <button type="submit"> CADASTRAR </button>
        </div>
      </FormRegister>
    </>
  );
}
