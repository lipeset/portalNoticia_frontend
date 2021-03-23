import React from 'react';
import styled from "styled-components";

const DivBg = styled.div`
  background-color: #051123;
  margin-top: -5px;
`;

function Races() {
    return (
        <DivBg className="container mx-auto md:grid grid-cols-6 grid-flow-col mt-28 max-w-full content-center">
            <div className="grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 1*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/NnvOIlJ.png" />
                </div>
            </div>
            <div className="grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 2*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/C97Oe3a.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 3*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/NRcTfQt.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 4*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/XK4uNTt.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 5*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/4nS8BRU.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center border-b-2 border-white"> {/*CORRIDA 6*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/TWQEVkz.png" />
                </div>
            </div>
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