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
                                                    <a className="no-underline px-4" href="pilotos/606101223245cc0004337957">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Davi POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6060ffc83245cc0004337943">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Pedro HENRIQUE</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6061002b3245cc0004337949">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Fernando MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/606101dc3245cc0004337961">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Alexandre MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6061007b3245cc000433794e">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Fabio ANDRADAS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6061002b3245cc0004337948">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Bruno MONTEIRO</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/6060ffc83245cc0004337944">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Rafael LEAL</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6060fdc43245cc0004337939">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Rodrigo CARVALHO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/606101223245cc0004337958">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Lucas SANTOS</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/606100bb3245cc0004337953">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Klaus POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/606101dc3245cc0004337962">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Pedro RABELLO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/606101933245cc000433795d">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Robson IMANISKI</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/6060ff743245cc000433793e">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Leonardo SÁ</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6060fdc43245cc000433793a">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Igor SANTOS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/606101933245cc000433795c">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Lucas POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/pilotos/6061007b3245cc000433794d">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Felipe ALMEIDA</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/606100bb3245cc0004337952">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">Marcos POQUIVIQUI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/pilotos/6060ff743245cc000433793f">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
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
                                                    <a className="no-underline px-4" href="/equipes/606100bb3245cc0004337951">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-red-800 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">FERRARI</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/6060ffc83245cc0004337942">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-800 hover:bg-green-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">ASTON MARTIN</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/606101dc3245cc0004337960">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-900 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">HAAS</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/equipes/6061007b3245cc000433794c">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-blue-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">WILLIAMS</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/606101223245cc0004337956">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-black hover:bg-green-300 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">MERCEDES</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/606101933245cc000433795b">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-red-500 hover:bg-blue-800
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">RED BULL</p>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid grid-rows-3">
                                                    <a className="no-underline px-4" href="/equipes/6060fdc43245cc0004337938">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-yellow-300 hover:bg-black 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">RENAULT</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/6060ff743245cc000433793d">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-900 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">ALFA ROMEO</p>
                                                        </div>
                                                    </a>
                                                    <a className="no-underline px-4" href="/equipes/6061002b3245cc0004337947">
                                                        <div className="container my-1 mx-auto md:px-4 flex items-center justify-between leading-tight p-2 md:p-4 
                                                    border-gray-600 border-t-2 border-r-2 rounded-r-3xl px-1 hover:border-white hover:bg-red-500 
                                                    transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg">
                                                            <p className="text-base text-white">MCLAREN</p>
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
