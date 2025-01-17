
import styled from 'styled-components'
import BurguerButton from './BurguerButton '
import { Link , useLocation  } from "react-router-dom "
import pets from "/pets.png"
import animal from "/animal.jpg"
import petssvg from "/petssvg.svg"
import cart from "/cart.svg"
import login from "/login.svg"
import divi from "/divi.svg"
import  agenda from "/agenda.svg"
import NavbarDos from './NavbarDos'
import TodaContendio from '../hooks/TodaContendio'

function Navbar() {
  const location = useLocation()
  const { clicked , handleClick , CerrarSeccion , estado } = TodaContendio()
  
  return (
    <>
      

      <NavContainer>
        <Logo >
         <img src={pets} />
        <h2> My <span>Pets</span></h2>
        </Logo>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className={ ` ${ location.pathname ==='/' ? 'modificado' : ' normal' }  `} to="/"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Inicio</span></Link>

          <Link className={ ` ${ location.pathname ==='/nosotros' ? 'modificado' : ' normal' }  `} to="/nosotros"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Nosotros</span></Link>

          <Link className={ ` ${ location.pathname ==='/blog' ? 'modificado' : ' normal' }  `}to="/blog"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Blog</span></Link>

          <Link className={ ` ${ location.pathname ==='/contacto' ? 'modificado' : ' normal' }  `}to="/contacto">
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Contacto</span></Link>

          <Link className={ ` ${ location.pathname ==='/tienda' ? 'modificado' : ' normal' }  `}to="/tienda"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Tienda</span></Link>
         
          <Link className={ ` ${ location.pathname ==='/carrito' ? 'modificado' : ' normal' }  `}to="/carrito"> 
          <img  className='cart' onClick={handleClick} src={cart} /> </Link>

          <Link className={ ` ${ location.pathname ==='/administrador' ? 'modificado' : ' normal' }  `}to="/administrador"> 
          <img  className={ estado ? 'agenda':'desconectado' }  onClick={handleClick} src={agenda} /> </Link>
          
          <img className='divi' src={divi}/>

          <Link to="/login"> 
        
          <button className={ estado ? 'desconectado':'iniciosesion' }
          
          onClick={handleClick}  > <span> ✓ </span> iniciar sesion  </button>
          
          </Link>
         
          <button className={ estado ? 'cerrarsesion' : 'desconectado'  } onClick={CerrarSeccion} > <span> X </span>cerrar sesion </button>
          
          
        </div>

        
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      {(location.pathname ==='/')?( <Navptes
      className={ ` ${ location.pathname ==='/' ? 'sinicio' : ' noinicio' }  `}
      >
        <div className={`prueba ${clicked ? ' active' : ''}`}>
         
            {(clicked ===false) && <NavbarDos/>}
         
  
        </div>
    </Navptes>):""}

    </>
  )
}

export default Navbar

const Navptes = styled.div `


   
   .prueba {

    background-image: url("/animal.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    padding:25rem;
    display: flex;
    position: relative;
   

    
    
   }
    
   .prueba.active{

    background-image:none;
    background-color:#f4d3f4 ;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  

`



const NavContainer = styled.nav`
  h2{
    color: black;
    font-weight: 700;
    font-size: 2rem;
    @media(max-width: 400px){
         display: none;
      } 
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background: #f4d3f4;
background: linear-gradient(180deg, rgba(244,211,244,1) 0%, rgba(251,249,255,1) 95%);
  display: flex;
  align-items: center;
  
  justify-content: space-between;
  a .etiqueta {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    z-index: 2;
    

    @media(max-width: 400px){
         margin-left: 5rem;

      } 


  }
  a{
    text-decoration: none;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a .etiqueta{
      color: black;
      font-size: 2rem;
      z-index: 2;
      text-decoration: none;
      display: block;
    }
    @media(min-width: 1280px){
      position: initial;
      margin: 0;
      a .etiqueta{
        font-size: 1rem;
        color: black;
        display: inline;
        text-transform: uppercase;
        text-decoration: none;
        font-weight:400;
        z-index: 2;
      }

      a{
    text-decoration: none;
  }
      display: block;
    }
    & .cart {
      width: 2.5rem;
       margin: 0 auto ;
      @media(max-width: 1279px){
         margin-top: 2rem;
         margin-left: 8rem;
         width: 5rem;
      } 

      @media(max-width: 400px){
        width: 3.5rem;
        margin-left: 5.2rem;

      } 
    }

    & .agenda {
       width: 2.5rem;
       margin: 0 auto ;
       margin-left:2rem;
      @media(max-width: 1279px){
         margin-top: 2rem;
         width: 5rem;
      } 

      @media(max-width: 400px){
        width: 3.5rem;

      } 
    }


  

      @media(max-width: 400px){
         margin-top: 2rem;
         display: block;
         padding-left: 10rem;

      } 
    }

    & .divi {
      width: 3rem;
      padding-left: 4rem;
      padding-right: 2rem;
      opacity: 0.5;
      @media(max-width: 780px){
         display: none;
      } 
    }

   

   
  
  .links.active{
    width: 100%;
    display: block;
    z-index: 2;
   ;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    @media(max-width: 400px){
      top: 5rem;
      left: -10rem;
      right: 8rem;
    }

    a .etiqueta{
      font-size: 2rem;
      margin-top: 1rem;
      color: black;
      text-decoration: none;
      
    }
  }
  .burguer{
    z-index: 2;
  
    @media(max-width: 450px){
      
      
    }
    

    @media(min-width: 1280px){
      width: 10rem;
      display: none;
    }

    
  }

  .normal .icon {
    display: none;
        & img  {
      display: none;
    }
  }

.iniciosesion {
font-size: 1.2rem;
border-radius: 15px;
background: #356ad4;
box-shadow: inset -24px -24px 48px #20407f,
            inset 24px 24px 48px #4a94ff;
color: white;
padding: 0.6rem;
font-weight:600;
@media(max-width: 1280px){
      margin: 0 auto;
      
    }

@media(max-width: 1279px){
  display: block;
      margin-top:4rem;  
      
    }

@media(max-width: 400px){
      display: block;
      margin-top: 2rem;
    }


}

.iniciosesion:hover {
  border-radius: 15px;
background: #a3d6f5;
box-shadow: inset -24px -24px 48px #80caf8,
            inset 24px 24px 48px #e4ffff;
  color: black;

}

.cerrarsesion {
font-size: 1.2rem;
padding: 0.5rem;
border-radius: 15px;
background: #a7020b;
box-shadow: inset -24px -24px 48px #dd0813,
            inset 24px 24px 48px #aa0a55;
color: white;
border-radius: 0.5rem;
font-weight:600;

}

.cerrarsesion:hover {
  background: #eb7f84;
box-shadow: inset -24px -24px 48px #e01c8e,
            inset 24px 24px 48px #eb2380;
  color: black;

}

.desconectado {
  display: none;
}

  .modificado {
    padding: 1rem;
    background: rgb(244,211,244);
   background: linear-gradient(180deg, #f6def7 50%, rgba(217,164,217,1) 90%);
   font-size: 3rem;
   color: red;
   z-index: 1 ;
   @media(max-width: 1280px){
    background:none;
    padding: 0rem;
    font-size: 1rem;
   

      } 

      & .icon {

        width:1.5rem ;

        @media(max-width: 1280px){
          display: none;
      }}
      
      
        
  }

  


`

const Logo = styled.div `
   display :flex ;
   gap: 1rem;
   margin-left: 4rem;
   & h2 { 
    font-size: 2rem;
     align-items: flex-end;
    @media(max-width: 780px){
      font-size: 2rem;
      }

   }
   & img { 
    width: 12rem;
    @media(max-width: 780px){
          width:8rem;

      } 
   }

   & h2 span {
    display: block;
    font-size: 3rem;
   font-family: Arial, Helvetica, sans-serif;
   }

   


`

const BgDiv = styled.div`
@media(max-width: 1280px){
  background-color: #f4d3f4;
  text-transform: uppercase;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;

  
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  

}

`


