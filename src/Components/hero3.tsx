import heroImageDesktop from "../assets/Desktop Full.svg";
import imageLeon from "../assets/leonshutouke.png";
import senseiManuel from "../assets/SenseiWeb.png";
import kyoshi from "../assets/KyoshiWeb2.png";
import inoue from "../assets/InoueSoke.png";
import rika from "../assets/RikaWeb.png";
import german from "../assets/Germanweb.png";


const Hero = () => {
    return (
        <div
            className="relative h-[800px]  md:h-[600px] lg:h-[1000px]   w-full bg-no-repeat bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${heroImageDesktop})` }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div
                id="hero__content"
                className="relative h-full grid  grid-rows-2 md:grid-cols-2 items-center px-4 sm:px-2 lg:px-2"
            >
                {/* Images Section */}

                <div
                    id="container__images"
                    className="relative h-[300px] w-[300px] 
                        md:h-[350px] md:w-[300px] md:mt-[300px] md:mx-auto
                        lg:h-[600px] lg:w-[500px] lg:mt-[300px] "
                >
                    <div
                        id="images__masters"
                        className="relative h-full w-full flex md:flex-col justify-center items-center"
                    >
                        <img
                            src={inoue}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 top-1/2 left-1/2 transform  -translate-x-[110px] -translate-y-[180px]
                        
                        sm:w-[200px] sm:h-[200px]  sm:top-1/2 sm:left-1/2 sm:transform  sm:-translate-x-[6px] sm:-translate-y-[200px] sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        md:w-[250px] md:h-[250px]  md:top-1/2 md:left-1/2 md:transform md:-translate-x-45 md:-translate-y-[245px]
                        lg:w-[500px] lg:h-[500px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-80 lg:-translate-y-[275px]"
                        />
                        <img
                            src={kyoshi}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        sm:w-[200px] sm:h-[200px]]  sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-[6px] sm:-translate-y-[200px] 
                        lg:w-[400px] lg:h-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-15 lg:-translate-y-[300px]
                        md:w-[250px] md:h-[250px] md:top-1/2 md:left-1/2 md:transform md:-translate-x-20 md:-translate-y-[240px]"
                        />
                        <img
                            src={senseiManuel}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        sm:w-[200px] sm:h-[200px]  sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-[6px] sm:-translate-y-[200px] 
                        lg:w-[400px] lg:h-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-45 lg:-translate-y-[150px]
                        md:w-[250px] md:h-[250px]   md:top-1/2 md:left-1/2 md:transform md:-translate-x-30 md:-translate-y-[150px]"
                        />
                        <img
                            src={rika}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        sm:w-[200px] sm:h-[200px]  sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-[6px] sm:-translate-y-[200px] 
                        lg:w-[400px] lg:h-[400px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-78 lg:-translate-y-1/3
                        md:w-[250px] md:h-[250px]  md:top-1/2 md:left-1/2 md:transform md:-translate-x-60 md:-translate-y-[160px]"
                        />
                        <img
                            src={imageLeon}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        sm:w-[200px] sm:h-[200px] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-[6px] sm:-translate-y-[200px] 
                        lg:w-[380px] lg:h-[380px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-13 lg:-translate-y-[113px]
                        md:w-[250px] md:h-[250px]  md:top-1/2 md:left-1/2 md:transform md:-translate-x-15 md:-translate-y-[90px]"
                        />
                        <img
                            src={german}
                            alt="Leon"
                            className="absolute w-32 h-32 mt-4 ml-4 sm:w-40 sm:h-40 sm:mt-6 sm:ml-6 
                        sm:w-[200px] sm:h-[200px]  sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-[6px] sm:-translate-y-[200px] 
                        lg:w-[300px] lg:h-[300px] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-40 lg:-translate-y-[33px] 
                        md:w-[250px] md:h-[250px]   md:top-1/2 md:left-1/2 md:transform md:-translate-x-50 md:-translate-y-[90px]"
                        />

                        {/* Blur effect at the bottom */}

                        <div
                            id="container__blur"
                            className="absolute  bottom-0 h-26 rounded-l rounded-r
                            sm:bottom-[-145px] sm:left-1/2 sm:transform sm:-translate-x-55 sm:-translate-y-[35px]  sm:w-[460px]
                            md:bottom-[-145px] md:left-1/2 md:transform md:-translate-x-55 md:-translate-y-[35px]  md:w-[460px]
                            lg:bottom-[-130px] lg:left-1/2 lg:transform lg:-translate-x-43 lg:-translate-y-[35px]  lg:w-[460px] "
                            style={{
                                backgroundImage:
                                    "linear-gradient(to top, #bfe4fd, #9cd3f8a1, transparent)",
                                animation: "wave 4s ease-in-out infinite",
                            }}
                        ></div>


                        <div
                            id="container__blur2"
                            className="absolute bottom-0 h-[100px] rounded-l rounded-r
                            md:bottom-[-44px] md:left-1/2 md:transform md:-translate-x-40 md:-translate-y-[33px]       
                            md:w-[350px]
                            lg:bottom-[-50px] lg:left-[80px] lg:transform lg:-translate-x-40 lg:-translate-y-[33px]       
                            lg:h-[50px] lg:w-[850px] bg-[radial-gradient(closest-side,#bfe4fd_30%,transparent)]"
                        ></div>
                    </div>

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
                </div>

                {/* Title Section */}
                <div
                    id="container__title"
                    className="text-left text-white lg:max-w-lg flex-1 
                md:mt-[200px] md:mx-8
                lg:ml-12 lg:mt-[300px]
            "
                >
                    <div className="bg-transparent backdrop-blur-xs p-8 py-8 rounded-2xl border-[1px] border-[#3caffc]">
                        <h1 className="text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-bold font-bold lg:text-leading-tight! ">
                            TU CUERPO ES
                            <br />
                            <span className="text-[#3caffc]">TU TEMPLO</span>
                        </h1>
                        <p className="mt-4 lg:text-lg md:text-sm">
                            "El dolor que sientes hoy es la fuerza que sentirás mañana. Cada
                            repetición, cada gota de sudor, te acerca a la mejor versión de ti
                            mismo. ¡No te rindas!"
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-block bg-[#3caffc] hover:bg-[#032c85] text-white font-bold py-3 px-8 rounded-lg text-lg"
                            >
                                Empieza Hoy
                            </a>
                        </div>
                        <div className="mt-8 flex justify-end space-x-4">
                            <a href="#" className="text-white hover:text-indigo-400">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.46 6c-.8.36-1.65.6-2.54.7.9-.54 1.6-1.4 1.92-2.44-.84.5-1.78.86-2.78 1.06C18.26 4.3 17.1 4 15.82 4c-2.44 0-4.42 1.98-4.42 4.42 0 .34.04.68.1.1L7.1 9.42C6.7 7.9 5.8 6.63 4.58 5.82c-.34.58-.53 1.25-.53 1.96 0 1.5.76 2.84 1.94 3.62-.7-.02-1.36-.22-1.94-.54v.06c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.14-1.14.14-.28 0-.55-.02-.82-.08.56 1.72 2.18 2.97 4.1 3-1.48 1.16-3.36 1.86-5.4 1.86-.35 0-.7-.02-1.04-.06 1.92 1.24 4.2 1.96 6.68 1.96 8.02 0 12.4-6.64 12.4-12.4v-.56c.84-.6 1.58-1.36 2.16-2.24z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-indigo-400">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 6.78h-1.34c-.5 0-.6.24-.6.6v.94h1.86l-.24 1.86h-1.62v4.78h-1.94v-4.78H9v-1.86h1.32v-.7c0-1.3.8-2.02 1.96-2.02h1.6v1.88z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-indigo-400">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 5.8c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3h-1.2c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3zm-3.6 0c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3h-1.2c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3zm-3.6 0c.2.1.3.2.4.4.1.2.2.4.2.6v6.4c0 .4-.1.7-.4.9-.2.2-.5.3-.8.3H8c-.3 0-.6-.1-.8-.3-.2-.2-.4-.5-.4-.9V9.4c0-.4.1-.7.4-.9.2-.2.5-.3.8-.3h1.2c.3 0 .6.1.8.3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
