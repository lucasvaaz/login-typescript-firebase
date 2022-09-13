import { useState } from "react";
import { FormRegister } from "./styled";

export function Register() {
  const [showPassword, setShowPassword] = useState(true)
  return (
    <>
      <div>
        <h1>register</h1>
      </div>
      <FormRegister>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" />

        <label htmlFor="lastName">Sobrenome:</label>
        <input id="LastName" type="text" />

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" />

        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" />

        <label htmlFor="passwordConfirm">Confirmar senha:</label>
        <input id="passwordConfirm" type="password" />
       
      
        

        <div>
          <button type="submit"> CADASTRAR </button>
        </div>
      </FormRegister>
    </>
  );
}
