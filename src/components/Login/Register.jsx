import React from 'react'
import styled from 'styled-components'
import pets from "/pets.png"
import  { useState, useEffect } from 'react';
import Error from '../Error';
import TodaContendio from '../../hooks/TodaContendio';
import { getAuth , createUserWithEmailAndPassword  } from 'firebase/auth';
import { app } from '../Firebase/Firebase';

function Register() {

    const { guardargatos , mensaje2 , setmensaje2 } = TodaContendio()
     
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [email, setemail] = useState('');
    const [constraseña , setcontraseña] = useState('')
    const [id, setid] = useState('')
   
    


   


    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, apellido, email,constraseña].includes('')) {
          setmensaje2('Todos los campos son obligatorios ');
          
          setTimeout(() => {
            setmensaje2('');
          }, 2000);

          return;
        }
        guardargatos({ nombre, apellido, email , constraseña});
         
        app
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, constraseña)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      
      };


  return (
      <>
          <EstilosDiv>
              <form 
              onSubmit={handleSubmit}
              >
                  <h2> Registro </h2>
                  {mensaje2 && <Error> {mensaje2} </Error> }
                  <input 
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                  type='text' name='nombre' placeholder='Nombre'  />
                  <input  type='text' name='apellidos' placeholder='Apellidos' 
                  value={apellido}
                  onChange={(e) => setapellido(e.target.value)}
                   />
                  <input type='text'  name='correo'   placeholder='Correo' 
                   value={email}
                   onChange={(e) => setemail(e.target.value)}
                  />
                  <input 
                  type='password' name='password' placeholder='password'
                  value={constraseña}
                   onChange={(e) => setcontraseña(e.target.value)}
                  />
                  <input type='submit' value='ENVIAR' id='boton' />
                  
              </form>
          </EstilosDiv>
      </>
  );
}

export default Register



const EstilosDiv = styled.div`

margin-top: 2rem;
background-image:url("../../../public/animal.jpg") ;
background-size: cover;
background-repeat:no-repeat;


@media (max-width:480px) {
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-image:none;
}

form {
    width: 450px;
    margin: auto;
    background: rgb(59,162,250);
background: linear-gradient(0deg, rgba(59,162,250,0.8519782913165266) 0%, rgba(57,173,232,0.773546918767507) 10%, rgba(73,197,249,0.7063200280112045) 100%);
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 2.5rem;
    -webkit-box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
-moz-box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
}


h2 {
    color: #fff;
    text-align: center;
    margin: 0;
    font-size: 30px;
    margin-bottom: 20px;
}

input {
    width: 100%;
    margin-bottom: 20px;
    padding: 7px;
    box-sizing: border-box;
    font-size: 17px;
    border: none;
    border-radius: 0.5rem;
}

textarea {
    min-height: 100px;
    max-height: 200px;
    max-width: 100%;
}

#boton{
    background: #31384A;
    color: #fff;
    padding: 20px;
}

#boton:hover {
    cursor: pointer;
}


@media (max-width:480px) {
    form{
        width: 100%;
    }
}

h1 {
    text-align: center;
    color: #fff;
    font-size: 40px;
    background: rgba(0,0,0,0.4);
    margin-top: 300px;
}
  
`