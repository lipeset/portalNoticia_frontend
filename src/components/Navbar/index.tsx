import React, { Component } from "react";
import styled from "styled-components";
import "../Navbar"

const Teste = styled.div`
    #menu-toggle:checked + #menu {
        display: block;
    }
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  padding: 10px 11px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #111827;
  min-width: 1250px;
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

class Navbar extends Component {
    render = () => {
        return (
            <Teste>
                <header className="lg:px-16 px-8 bg-black flex flex-wrap items-center py-4 shadow-md">
                    <div className="flex-1 flex justify-between items-center">
                        <a className="flex items-center" href="/">
                            <img src="https://i.imgur.com/xC5MgVW.png" />
                        </a>
                    </div>
                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                        <svg className="fill-current text-white mr-2"
                            xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                        <nav>
                            <ul className="md:flex grid grid-cols-2 items-center justify-between text-base text-white pt-4 md:pt-0">
                                <a href="/noticias" className="classA text-lg p-3 mr-5 hover:text-red-500">NOTÍCIAS</a>
                                <a href="/quem_somos" className="classA text-lg p-3 mr-5 hover:text-red-500">QUEM SOMOS</a>
                                <a href="/mural" className="classA text-lg p-3 mr-5 hover:text-red-500">MURAL</a>
                                <a href="/videos" className="classA text-lg p-3 mr-5 hover:text-red-500">VÍDEOS</a>
                                <a href="/calendario" className="classA text-lg p-3 mr-5 hover:text-red-500">CALENDÁRIO</a>
                                <a href="/classificacao" className="classA text-lg p-3 mr-5 hover:text-red-500">CLASSIFICAÇÃO</a>
                                <DropDownLi className="static">
                                    <Dropbtn>
                                        <button className="flex items-center justify-center">
                                            <a href="/pilotos" className="classA text-lg hover:text-red-500">PILOTOS</a>
                                            <span>
                                                <svg className="fill-current h-4 w-4 hidden md:block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </Dropbtn>
                                    <div className="container hidden md:flex justify-end">
                                        <DropDownContent>
                                            <div className="container grid grid-cols-6 grid-flow-col mt-3 mb-3">
                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/604928e38e3d16001f018290">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Davi POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/60492a208e3d16001f0182a9">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Pedro HENRIQUE</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929dd8e3d16001f0182a5">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Fernando MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/60492a568e3d16001f0182ae">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Alexandre MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929458e3d16001f01829b">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Fabio ANDRADAS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929dd8e3d16001f0182a4">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Bruno MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/60492a208e3d16001f0182aa">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Rafael LEAL</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6049297e8e3d16001f01829f">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Rodrigo CARVALHO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604928e38e3d16001f018291">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Lucas SANTOS</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/604929148e3d16001f018296">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Klaus POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/60492a568e3d16001f0182af">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Pedro RABELLO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604928808e3d16001f01828b">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Robson IMANISKI</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/60492a9d8e3d16001f0182b3">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Leonardo SÁ</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6049297e8e3d16001f0182a0">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Igor SANTOS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604928808e3d16001f01828c">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Lucas POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/604929458e3d16001f01829a">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Felipe ALMEIDA</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929148e3d16001f018295">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Marcos POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/60492a9d8e3d16001f0182b4">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Maurício LOPES</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </DropDownContent>
                                    </div>
                                </DropDownLi>
                                <DropDownLi className="static">
                                    <Dropbtn>
                                        <button className="flex items-center justify-center">
                                            <a href="/equipes" className="classA text-lg hover:text-red-500">EQUIPES</a>
                                            <span>
                                                <svg className="fill-current h-4 w-4 hidden md:block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </Dropbtn>
                                    <div className="container hidden md:flex justify-end">
                                        <DropDownContent>
                                            <div className="container grid grid-cols-3 grid-flow-col mt-3 mb-3">
                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/604928e38e3d16001f018290">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">DUE FRATELLI MK FERRARI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/60492a208e3d16001f0182a9">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">DB-5 ASTON MARTIN</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929dd8e3d16001f0182a5">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">SKY HAAS TEAM</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/60492a568e3d16001f0182ae">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">NO LIMI WILLIAMS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929458e3d16001f01829b">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">DAVLUK MERCEDES</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604929dd8e3d16001f0182a4">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">TRANSVIQUI REDBULL</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/60492a208e3d16001f0182aa">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">M-TURBO RENAULT</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6049297e8e3d16001f01829f">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">ALFA ROMEO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/604928e38e3d16001f018291">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-b-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">MONTEIRO MCLAREN</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </DropDownContent>
                                    </div>
                                </DropDownLi>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Teste>
        );
    };
}
export default Navbar;
