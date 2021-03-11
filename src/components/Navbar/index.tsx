import React from 'react';

function Navbar() {
    return (
        <nav className="text-white bg-black body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex items-center mb-4 md:mb-0" href="/">
                    <img src="https://i.imgur.com/xC5MgVW.png" />
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#" className="classA text-lg p-3 mr-5 hover:text-red-500">MURAL</a>
                    <a href="#" className="classA text-lg p-3 mr-5 hover:text-red-500">VÍDEOS</a>
                    <a href="#" className="classA text-lg p-3 mr-5 hover:text-red-500">CALENDÁRIO</a>
                    <a href="#" className="classA text-lg p-3 mr-5 hover:text-red-500">CLASSIFICAÇÃO</a>
                    <a href="/pilotos" className="classA text-lg p-3 mr-5 hover:text-red-500">PILOTOS</a>
                    <a href="/equipes" className="classA text-lg p-3 mr-5 hover:text-red-500">EQUIPES</a>
                </nav>
            </div>
        </nav >
    );
}
export default Navbar;