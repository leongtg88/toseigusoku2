import heroImageDesktop from '../assets/Desktop Full.svg';
import imageLeon from '../assets/leonshutouke.svg';
import senseiManuel from '../assets/SenseiWeb.png';
import kyoshi from '../assets/KyoshiWeb2.png';
import inoue from '../assets/InoueSoke.png';
import rika from '../assets/RikaWeb.png';
import german from '../assets/Germanweb.png';
import LogoIskia from '../assets/LogoIskia.svg';
import LetrasISIKIA from '../assets/LetrasISIKIA.svg';




import heroImgTabletHorizontal from '../assets/Tablet Horizontal.svg';
import heroImagTabletVertical from '../assets/Tablet Vertical.svg';
import heroImagMovilLarge from '../assets/Movil Large.svg';
import heroImageMovilpeque from '../assets/Movil peque.svg';


const Hero = () => {
  return (
    <div
      className="relative 
      h-[1100px] w-full mx-auto bg-no-repeat bg-cover bg-center bg-fixed
      sm:h-[1000px] 
      md:h-[1000px]
      lg:h-[700px]
      xl:h-[900px]

      2xl:max-w-[1910px] "
      style={{ backgroundImage: `url(${heroImageDesktop})` }}
    >
      <div className="absolute inset-0 bg-black/60" />


      {/* Contenedor principal del hero */}

      <div className="relative h-full flex flex-col  justify-center px-4 
      sm:px-6 sm:pt-[50px]
      md:px-8 md:py-[60px]  md:flex-col md:items-center
       lg:px-2 lg:py-0 lg:flex-row lg:items-center  
      xl:items-center  
      2xl:pb-[150px]   ">

        {/*Conteneodr izquierdo imagenes */}

        <div className='relative px-8 pt-[30px] h-[200px]  mt-[80px]
            sm:h-[290px]  sm:pt-[160px]  sm:px-8  sm:mt-[30px]  sm:mb-[90px] 
            md:h-[380px] 
                lg:w-1/2 lg:h-full lg:pt-0 lg:mt-0 lg:flex lg:items-center
            xl:h-[400px] xl:pt-[100px]   
            2xl:h-[400px]  flex justify-center'> 

          {/*Contenedor inquierdo hijo imagenes */}
          <div className="relative h-full w-full 

              sm:h-[350px] sm:w-[350px] sm:top-[60px]
              
              md:h-[350px] md:w-[400px] md:top-[160px]

              lg:h-[350px]  flex flex-col items-center lg:w-full 
              
              xl:h-[300px]  flex flex-col  items-center">

            {/* Blur effect  */}
            <div className="absolute w-[400px] rounded-r rounded-l bottom-[-180px] h-[500px]

                  sm:w-[500px] sm:h-[500px] sm:bottom-[-10px] sm:ml-0 sm:transform sm:-translate-x-[0px]

                  md:bottom-[px]  md:mr-0 md:transform md:-translate-x-[0px]  md:h-[550px]  md:w-[700px]
                  
                  lg:left-1/2  lg:ml-0  lg:mr-0  lg:transform  lg:-translate-x-1/2   lg:left-[200px]  lg:bottom-[-100px]  lg:transform  lg:-translate-y-[33px] lg:ml-[50px]   lg:w-[600px]
                  
                  xl:bottom-[-100px]  xl:left-1/2  xl:transform  xl:-translate-x-1/2  xl:w-[800px]  xl:max-w-[900px]
                  
                  2xl:bottom-[-150px] 2xl:left-[380px] 2xl:transform 2xl:-translate-x-1/2 2xl:w-[740px]  2xl:max-w-[900px]
                  "
              style={{
                animation: "color-change 10s infinite linear",
                backgroundImage: "radial-gradient(closest-side, currentColor, transparent)"
              }}>

            </div>
            {/*End Blur effect  */}

            <img
              src={inoue}
              alt="Inoue Soke"
              className="absolute w-[100%] max-w-[360px] h-[280px] -top-[60px] -translate-x-[60px]
                    
                    sm:w-[100%] sm:max-w-[260px] sm:h-[260px] sm:top-[20px]  sm:-translate-x-[90px] sm:-translate-y-[125px]
                    
                    lg:w-[100%] lg:max-w-[300px] lg:h-[300px] lg:top-[-50px] lg:left-[110px]    
                
                    xl:w-[100%] xl:max-w-[350px] xl:h-[350px] xl:top-[-190px]   xl:left-[160px] xl:translate-x-[-90px]
                    
                    2xl:w-[100%] 2xl:max-w-[350px] 2xl:h-[350px] 2xl:top-[-120px] 2xl:left-1/3 2xl:transform 2xl:-translate-x-[100px]
                    "
            />
            <img 
              src={kyoshi}
              alt="Kyoshi"
              className="absolute w-[100%] max-w-[230px] h-[220px] -top-[70px] translate-x-[60px]
                    
                    sm:w-[100%] sm:max-w-[260px] sm:h-[260px] sm:top-[20px]  sm:-translate-x-[90px] sm:-translate-y-[125px]
                  
                    lg:w-[300px] lg:max-w-[300px] lg:h-[300px] lg:top-[20px] lg:-translate-y-[200px]  lg:left-[260px]  
                    
                    xl:w-[100%] xl:max-w-[350px] xl:h-[350px] xl:top-[-160px]  xl:left-[290px]  xl:-translate-x-[50px]

                    2xl:w-[100%] 2xl:max-w-[350px] 2xl:h-[350px] 2xl:-top-[90px] 2xl:left-1/2 2xl:transform 2xl:-translate-x-[80px]"


            />
            <img
              src={senseiManuel}
              alt="Sensei Manuel"
              className="absolute w-[230px] max-w-[250px] h-[200px] top-[20px] translate-x-[-10px]
                    
                    sm:w-[80%] sm:max-w-[280px] sm:h-[240px] sm:top-[20px] sm:-translate-x-[20px] sm:-translate-y-[65px]
                    
                    lg:w-[100%] lg:max-w-[300px] lg:h-[300px] lg:top-[20px] lg:left-[120px]
                
                    xl:w-[100%] xl:max-w-[350px] xl:h-[350px] xl:top-[-90px] xl:left-1/2 xl:transform xl:-translate-x-45 
                    2xl
                    "
            />
            <img
              src={rika}
              alt="Rika"
              className="absolute w-[220px] h-[220px] top-[65px] -translate-x-[110px]
                    
                  sm:w-[80%] sm:max-w-[280px] sm:h-[240px] sm:-translate-x-[100px] sm:-translate-y-[40px]
                  
                  lg:w-[100%] lg:max-w-[300px] lg:h-[300px] lg:top-[40px] lg:left-[300px] lg:transform lg:-translate-x-78 
                
                  xl:w-[100%] xl:max-w-[350px] xl:h-[350px] xl:top-[-100px] xl:left-1/2  xl:-translate-x-78 "
            />
            <img
              src={imageLeon}
              alt="Leon"
              className="absolute w-[100%] max-w-[220px] h-[250px] top-[40px] translate-x-[75px]
                    
                  sm:w-[80%] sm:max-w-[280px] sm:h-[240px] sm:top-[100px] sm:translate-x-[80px] sm:-translate-y-[70px]
                  
                  lg:w-[100%] lg:max-w-[320px] lg:h-[320px] lg:top-[50px] lg:left-[120px] lg:transform 
                
                  xl:w-[100%] xl:max-w-[350px] xl:h-[350px] xl:top-[-80px] xl:left-1/2 xl:transform xl:-translate-x-13 "
            />
            <img
              src={german}
              alt="German"
              className="absolute w-[180px] h-[180px] top-[105px] translate-x-[-20px]
                  
                  sm:w-[60%] sm:max-w-[180px] sm:h-[180px] sm:top-[75px] sm:-translate-x-[15px] sm:translate-y-[15px]
                  
                  lg:w-[80%] lg:max-w-[220px] lg:h-[220px] lg:top-[60px] lg:left-[150px] lg:transform 

                  xl:w-[100%] xl:max-w-[270px] xl:h-[270px] xl:top-[-80px] xl:left-1/2 xl:transform xl:-translate-x-40 "
            />

            {/* Rain container */}
            <div className="rain-container absolute inset-0">
              <div className="rain">
                <div className="waves"></div>
                <div className="particles">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            {/* Blur effect at the bottom */}

            <div className="absolute rounded-l rounded-r opacity-90  
                bottom-[-135px] ml-2 h-[30px]  w-[340px] max-w-[380px]
                
                sm:bottom-[65px] sm:ml-8 sm:h-[30px] sm:w-[450px] sm:max-w-[450px]

                md:bottom-[65px] md:ml-8 md:h-[30px] md:w-[500px] md:max-w-[600px]
                
                lg:bottom-[-20px] lg:transform  lg:left-[-100px] lg:-translate-y-[40px] lg:ml-[80px]  lg:h-[50px] lg:w-[600px] lg:max-w-[700px]

                xl:bottom-[20px]   xl:-translate-x-[0px]  xl:w-[800px]  xl:max-w-[900px]
                
                2xl:bottom-[25px]  2xl:transform 2xl:translate-x-[0px] 2xl:w-[740px]  4xl:max-w-[900px] 
                
                custom-range:bottom-[-185px] custom-range:transform custom-range:-translate-x-[300px] custom-range:w-[740px]  custom-range:max-w-[900px]
                "
              style={{
                animation: "color-change 10s infinite linear",
                backgroundImage: "radial-gradient(closest-side, currentColor 45%, transparent )"
              }}></div>




          </div>
        </div>

        {/*Contenedor derecho imagenes */}

        <div className="
             px-4 flex justify-center 
             sm:px-6 sm:mt-[20px] sm:mb-[20px]
             md:px-6 md:mt-[20px] md:mb-[20px]
            lg:w-1/2 text-left text-white lg:max-w-lg  lg:mx-auto lg:ml-12">

          {/*Contenedor  titulos */}
          <div className="bg-transparent backdrop-blur-xs px-4 py-4  border-[1px] hover:backdrop-blur-lg border-current  rounded-lg shadow-xl/50 transition-[backdrop-filter] duration-500"
            style={{ animation: " color-change 10s infinite linear" }}>

            <h1 className=" text-4xl lg:text-5xl font-bold lg:text-leading-tight">
              TU CUERPO ES
              <br />
              <span className="text-white">TU TEMPLO</span>
            </h1>
            <p className="mt-4 text-sm font-light tracking-wide text-white">
              "El dolor que sientes hoy es la fuerza que sentirás mañana. Cada repetición, cada gota de sudor, te acerca a la mejor versión de ti mismo. ¡No te rindas!"
            </p>

            {/*Boton */}
            <div className="mt-8   py-2 px-6 inline-block bg-current  backdrop-blur-sm shadow-xl/30 border hover-border-white   hover:bg-color-change  hover:text-white font-regular  rounded-lg "
              style={{ animation: "border-color-change  10s infinite linear" }}>
              <a
                href="#"
                className="text-white hover:text-white text-sm font-semibold  2xl:text-base  transition-colors duration-300"
              >
                Empieza Hoy
              </a>
            </div>
            {/*end Boton */}


            {/* Redes sociales y logo Padre*/}
            <div className="mt-4  w-full justify-between flex flex-row items-center lg:items-start">
              
                {/*Contenedor  Logo IKIA*/}
              <div className=" relative flex justify-start ">

                {/* Logo IKIA */}
                <img src={LogoIskia} alt="Logo Iskia" className="mt-8  z-10  w-[150px] h-auto" />
                
                {/* Blur effect  */}
                <div className=" absolute w-[195px] h-[195px]  
                        -right-[20px] -translate-x-[0px]  top-[15px]  rounded-r rounded-l bottom-[0px]
                        sm:w-[195px] sm:h-[195px]  sm:top-[15px]  sm:-translate-x-[40px]  
                        sm:right-1/2  sm:-translate-x-[100px]  top-[15px]  rounded-r rounded-l bottom-[0px]"

                  style={{
                    animation: "color-change 10s infinite linear",
                    backgroundImage: "radial-gradient(closest-side, currentColor, transparent)"
                  }}>
                </div>
                {/*End Blur effect  */}
              </div>
              {/* Fin Contenedor  Logo IKIA */}
              
              
              
              
              {/* Redes sociales */}
              <div className="mt-8 flex flex-col  space-x-4 space-y-2">
                <a href="#" className="text-white hover:text-indigo-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.8.36-1.65.6-2.54.7.9-.54 1.6-1.4 1.92-2.44-.84.5-1.78.86-2.78 1.06C18.26 4.3 17.1 4 15.82 4c-2.44 0-4.42 1.98-4.42 4.42 0 .34.04.68.1.1L7.1 9.42C6.7 7.9 5.8 6.63 4.58 5.82c-.34.58-.53 1.25-.53 1.96 0 1.5.76 2.84 1.94 3.62-.7-.02-1.36-.22-1.94-.54v.06c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.14-1.14.14-.28 0-.55-.02-.82-.08.56 1.72 2.18 2.97 4.1 3-1.48 1.16-3.36 1.86-5.4 1.86-.35 0-.7-.02-1.04-.06 1.92 1.24 4.2 1.96 6.68 1.96 8.02 0 12.4-6.64 12.4-12.4v-.56c.84-.6 1.58-1.36 2.16-2.24z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 6.78h-1.34c-.5 0-.6.24-.6.6v.94h1.86l-.24 1.86h-1.62v4.78h-1.94v-4.78H9v-1.86h1.32v-.7c0-1.3.8-2.02 1.96-2.02h1.6v1.88z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 5.8c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3h-1.2c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3zm-3.6 0c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3h-1.2c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3zm-3.6 0c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3H8c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
                {/* Fin contenedor Redes sociales */}



            </div>

          </div>

        </div>

      </div>


    </div>
  );
};

export default Hero;
