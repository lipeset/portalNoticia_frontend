import React from 'react';
import styled from "styled-components";

const DivBg = styled.div`
  background-color: #051123;
`;

function Races() {
    return (
        <DivBg className="container mx-auto md:grid grid-cols-6 grid-flow-col mt-28 max-w-full content-center">


            <div className="grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 6*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/NnvOIlJ.png" />
                </div>
            </div>
            <div className="grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 6*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/C97Oe3a.png" />
                </div>
            </div>
            <div className="grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 6*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/NRcTfQt.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 6*/}
                <div className="flex flex-wrap content-center justify-center">
                    <img className="flex flex-wrap content-center justify-center"
                        src="https://i.imgur.com/XK4uNTt.png" />
                </div>
            </div>
            <div className="hidden md:grid grid-flow-col justify-center md:border-r-2 border-b-2 border-white"> {/*CORRIDA 6*/}
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
        </DivBg>
    );
}
export default Races;