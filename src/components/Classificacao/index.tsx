import React from 'react';
import styled from "styled-components";

const DivBg = styled.div`
  background-color: #8a7865;
`;

function Races() {
    return (
        <DivBg className="container mt-3 mx-auto md:grid grid-cols-3 grid-flow-col max-w-full" >
            <div className="hidden md:flex justify-end">
                <img src="https://i.imgur.com/2XPKYG0.png" />
            </div>
            <div className="flex justify-center">
                <img src="https://i.imgur.com/2XPKYG0.png" />
            </div>
            <div className="hidden md:flex justify-start">
                <img src="https://i.imgur.com/2XPKYG0.png" />
            </div>
        </DivBg >
    );
}
export default Races;