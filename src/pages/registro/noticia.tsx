import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';

export default function RegistroNoticia({ pilotos }) {
    const registerUser = async event => {
        event.preventDefault()

        const data_array = event.target.newsPicCarousel.value.split(',');

        const res = await fetch('https://portalnoticia-backend.herokuapp.com/news/register', {
            body: JSON.stringify({
                title: event.target.title.value,
                newsContent: event.target.newsContent.value,
                abstract: event.target.abstract.value,
                newsUrl: event.target.newsUrl.value,
                newsPicCarousel: data_array,
                newsVideoUrl: event.target.newsVideoUrl.value,
                author: event.target.author.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if (res.status == 200) {
            alert("Notícia cadastrada com sucesso");
            window.location.href = "https://www.pilotosdavila.com.br/";
        } else {
            alert("Falha no registro");;
        }
    }
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">
                        CADASTRO DE NOTÍCIA
                    </h1>
                    <div className="px-4 md:px-12">
                        <form onSubmit={registerUser}>
                            <label htmlFor="title" className="text-2xl">Título: </label>
                            <input id="title" name="title" type="text" autoComplete="title" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="Ex: Desafio da Equipe X vs Y" required /><br /><br />

                            <label htmlFor="newsContent" className="text-2xl">Conteúdo: </label>
                            <textarea id="newsContent" name="newsContent" autoComplete="newsContent" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="Conteúdo completo da notícia, sem cortes!" required /><br /><br />

                            <label htmlFor="abstract" className="text-2xl">Resumo: </label>
                            <input id="abstract" name="abstract" type="text" autoComplete="abstract" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="Breve resumo da notícia" required /><br /><br />

                            <label htmlFor="newsUrl" className="text-2xl">Imagem de capa da notícia: </label>
                            <input id="newsUrl" name="newsUrl" type="text" autoComplete="newsUrl" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="Imagem capa da notícia" required /><br /><br />

                            <label htmlFor="newsPicCarousel" className="text-2xl">Se tiver várias fotos, coloque o link separado por vírgula (,) sem espaço: </label>
                            <input id="newsPicCarousel" name="newsPicCarousel" type="text" autoComplete="newsPicCarousel" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="exemplo: link1,link2" /><br /><br />

                            <label htmlFor="newsVideoUrl" className="text-2xl">Se tiver vídeo, coloque o link aqui: </label>
                            <input id="newsVideoUrl" name="newsVideoUrl" type="text" autoComplete="newsVideoUrl" className="w-full bg-gray-300 rounded-lg text-2xl"
                                placeholder="Vídeo com o 'embebed'" /><br /><br />

                            <label htmlFor="author" className="text-2xl">Autor: </label>
                            <select id="author" name="author" className="text-2xl rounded-lg bg-gray-300">
                                {pilotos.sort().map((piloto) => (
                                    <option key={piloto._id} value={piloto._id}>{piloto.name}</option>
                                ))}
                            </select><br /><br />

                            <button type="submit" className="bg-green-500 rounded-lg text-2xl p-3 mb-4">Cadastrar notícia</button>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
RegistroNoticia.getInitialProps = async () => {
    const { data: pilotos } = await axios.get('https://portalnoticia-backend.herokuapp.com/pilots');

    return {
        pilotos
    }
}