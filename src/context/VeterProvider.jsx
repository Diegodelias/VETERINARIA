import React, { useState, useEffect ,createContext} from 'react';
import { useNavigate } from "react-router-dom";
import { generarID } from '../data/helpes';
import { formatearFecha } from '../data/helpes';
import { app } from '../components/Firebase/Firebase';
import { getAuth, signInWithEmailAndPassword , signInWithPopup, signOut , onAuthStateChanged } from "firebase/auth";

const Contenido = createContext();

function VeterProvider({children}) {
   
  const [perros, setPerros] = useState([]);

  //Url con todos los datos raw.
  const URL = "http://localhost:3004/articulos";

  //Funcion que trae toda la info 'personajes'
  const fetchMascotas = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPerros(data);
      })
      .catch((error) => console.log(error));
  };

  //Se ejecuta por defecto por primera vez al renderizar el componente y en cada updateting.
  useEffect(() => {
    fetchMascotas(URL);
  }, []);

  app
  const auth = getAuth();


// var navbar 
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if(( window.innerWidth) > 1280 ){
        setClicked(false)}else {
            setClicked(!clicked)

        } }

// funcion datos 
const navigate = useNavigate();
const [datos ,setdatos] = useState([])
const [mensaje2, setmensaje2] = useState('');





// inicioSesion

const [emailIS, setemailIS] = useState('');
const [constraseñaIS , setconstraseñaIS] = useState('')
const [ estado , setestado ] = useState(false)

const InisionSesion = (e) => {
  e.preventDefault();
  const {email,constraseña } = datos
  signInWithEmailAndPassword(auth, emailIS, constraseñaIS)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("iniciaste sesion correctamente")
    navigate("/abmturnos")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    if ((emailIS =="")|(constraseñaIS == "")){
      setmensaje2("Todos los campos son obligatorios")
      setTimeout(()=>setmensaje2("") , 3000)
    }else {
      console.log("datos incorrecatos")
      setmensaje2("Datos incorrectos")
      setTimeout(()=>setmensaje2("") , 3000)
    }

 
    // ..
  });
  
   
};
 estado de la sesion 


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("usurio conectado")
      setestado(true)
      // ...
    } else {
      // User is signed out
      // ...
      console.log("desconectado")
      setestado(false)
      
    }
  });
}, [estado]);


  const [clicked, setClicked] = useState(false);

const CerrarSeccion = (e) => {
  e.preventDefault();
  
  signOut(auth).then(() => {
   
    navigate("/")
  }).catch((error) => {
   console.log("hubo un error" , error )
  });
  
  return

}

const guardargatos = (Referencia) => {
  if (datos.some((comparacion) => comparacion.id === Referencia.id)) {
    const datosActulizado = datos.map((comparacion) =>
      comparacion.id === Referencia.id ? Referencia : comparacion
    );
    setdatos(datosActulizado);
  } else {

     //agregar mas prop que las iniciales
    Referencia.id = generarID();
    Referencia.fecha = Date.now();
    setdatos([...datos, Referencia]);
  }
};

  return (
    <Contenido.Provider
            value={{
              clicked,
              handleClick,
              guardargatos,
              mensaje2,
              setmensaje2,
              InisionSesion,
              estado,
              emailIS,
              setemailIS,
              constraseñaIS,
              setconstraseñaIS,
              CerrarSeccion
              

            }}>
            {children}
        </Contenido.Provider>
  )
}


export {VeterProvider};

export default Contenido;