import React from 'react';
import styled from "styled-components";

const DivBg = styled.div`
  background-color: #051123;
  margin-top: -5px;
`;

function Races() {
    return (
        <DivBg className="container mx-auto md:grid grid-cols-6 grid-flow-col mt-28 max-w-full content-center">
            <a href="/calendario/primeira_etapa">
                <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 1*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/NnvOIlJ.png" />
                    </div>
                </div>
            </a>
            <a href="/calendario/segunda_etapa">
                <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 2*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/AWm2noq.png" />
                    </div>
                </div>
            </a>
            <a href="/calendario/terceira_etapa">
                <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 3*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/oyABzRb.png" />
                    </div>
                </div>
            </a>
            <a href="/calendario/quarta_etapa">
                <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 4*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/XK4uNTt.png" />
                    </div>
                </div>
            </a>
            <a href="/calendario/quinta_etapa">
                <div className="md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 5*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/figZBt4.png" />
                    </div>
                </div>
            </a>
            <a href="/calendario/sexta_etapa">
                <div className="md:grid grid-flow-col justify-center border-b-2 border-white"> {/*CORRIDA 6*/}
                    <div className="flex flex-wrap content-center justify-center">
                        <img className="flex flex-wrap content-center justify-center"
                            src="https://i.imgur.com/TWQEVkz.png" />
                    </div>
                </div>
            </a>
            <div className="md:hidden grid grid-flow-col justify-center bg-white">
                <a href="/calendario">
                    <button className="flex items-center font-bold text-white bg-red-500 hover:bg-black py-1 px-3 focus:outline-none 
                        rounded text-xl md:mt-0 ">VER CALENDÁRIO COMPLETO
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </DivBg>
    );
}
export default Races;