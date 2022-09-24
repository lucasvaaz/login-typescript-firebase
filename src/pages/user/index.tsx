import { ImageProfile, UserContainer } from "./styled";
import { auth } from "../../service/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";


export function User() {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              const uid = user.uid;
              
            } 
          });
    }, [])
 
    
 const logout = () => { 
    signOut(auth).then(() => {
  
}).catch((error) => {
  console.log(error)
});}

    return (
        <>
        <UserContainer>
            <h2>Olá, </h2>
            <h2>{ auth.currentUser?.displayName ?
            auth.currentUser?.displayName :
            auth.currentUser?.email
              }
              
            </h2>

            <ImageProfile>
                <div>
                    { auth.currentUser?.photoURL ? (
                    <img src={auth.currentUser.photoURL} />
                    ) 
                    :
                    (
                        <img src="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" />
                    )   
                }
                    
                </div>
            </ImageProfile>

            <button onClick={logout}
            
          >
            
            SAIR
          </button>
        </UserContainer>
        </>
    )
}