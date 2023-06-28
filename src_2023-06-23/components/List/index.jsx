import axios from "axios";
import { useEffect, useState } from "react";
import { BotaoPaginacao, CardItem, CardsList } from "./style";
import star from '../../images/star.svg'
import noImage from '../../images/no-image.jpg'
import proxPag from '../../images/proxPag.png'
import { Banner } from "../Banner";
import { Link } from "react-router-dom";

export function List({titulo, subtitulo, categoria}){
    //const [conteudo, setConteudo] = useState("movie")
    const [classificacao, setClassificacao] = useState("popular")
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        //console.log('componente renderizado')
        //get -> consultar
        //post -> enviar
        //put -> atualizar
        //delete -> excluir

        axios.get(`https://api.themoviedb.org/3/${categoria}/${classificacao}`,{
            params:{
                page: page,
                api_key: '6a28c8fa6ac872e1b1b90d85c8293c62',
                language: 'pt-BR'
            }
        })
        //Resposta positiva da API
        .then(response => {
            setLoading(false)
            //console.log(response.data.results);
            setItems(response.data.results)//.slice(0,18)
        })
        //Falha de resposta da API
        .catch(erro => {
            console.log(erro.message)
        });
    },[classificacao, page])

    if (loading) {
        return(
            <h1>Carregando...</h1>
        )
    }

    return(
        <>
            <Banner title={titulo}>
                <p>{subtitulo}</p>
            </Banner>

            <BotaoPaginacao>
                <button onClick={()=>setPage(1)}><p>Primeira página</p></button>
                <button onClick={()=>setPage(page+1)}><p>Próxima página</p></button>
                <button onClick={()=>setClassificacao(classificacao === 'popular' ? 'top_rated' : 'popular')}>
                    {classificacao === 'popular' ? <p>Maior avaliação</p> : <p>Mais populares</p>}
                </button>
            </BotaoPaginacao>
            
            <div className='container'>
                {/* Local onde serão mostrados os cards*/}
                <CardsList>
                    {
                        items.map((item) => (
                            <CardItem key={item.id}>
                                <Link to={`/detalhes/${categoria}/${item.id}`}>
                                    {
                                        (item.backdrop_path ?
                                            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" width={360} /> :
                                            <img src={noImage} alt="" width={360} />
                                        )
                                    }
                                    <div className="card-content">
                                        <h2>
                                            {categoria === 'movie' ? item.title : item.name}
                                        </h2>
                                        <h3> 
                                            Ano: {JSON.stringify(categoria === 'movie' ? item.release_date : item.first_air_date).substring(1,5)}
                                        </h3>
                                        <span><img src={star} /> {item.vote_average}</span>
                                    </div>
                                </Link>
                            </CardItem>
                        ))
                    }
                    <CardItem key='404'>
                        <div style={{width:360, textAlign:'center' }}>
                            <img src={proxPag} alt="" height='200' onClick={()=>setPage(page+1)} />
                        </div>
                    </CardItem>
                </CardsList>
            </div>
            {/* JSON.stringify(items) */}
        </>
    )
}