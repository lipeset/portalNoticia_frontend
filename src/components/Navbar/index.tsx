import React from 'react';

function Navbar() {
    return (
        <nav className="bg-red-500 shadow-lg">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    <a href="/" className="text-white text-3xl font-bold italic p-3">
                        <img src="pv.png" />
                    </a>
                    <ul className="text-white sm:self-center font-bold italic border-t sm:border-none">
                        <li className="sm:inline-block">
                            <a href="#" className="p-3">Vídeos</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="#" className="p-3">Calendário</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="#" className="p-3">Classificação</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="/pilotos" className="p-3">Pilotos</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="/equipes" className="p-3">Equipes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;