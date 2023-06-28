import axios from "axios";
import { useEffect, useState } from "react";
import { BotaoPaginacao, CardItem, CardsList, Search } from "./style";
import star from '../../images/star.svg'
import noImage from '../../images/no-image.jpg'
import proxPag from '../../images/proxPag.png'
import next from '../../images/next.png'
import { Banner } from "../Banner";
import { Link } from "react-router-dom";

export function List({titulo, subtitulo, categoria}){
    //const [conteudo, setConteudo] = useState("movie")
    const [classificacao, setClassificacao] = useState(sessionStorage.getItem('classificacao') !== null ? JSON.parse(sessionStorage.getItem('classificacao')) : "popular")
    const [page, setPage] = useState(sessionStorage.getItem('page') !== null ? JSON.parse(sessionStorage.getItem('page')) : 1)
    //const [lastPage, setLastPage] = useState(1)
    const [items, setItems] = useState(sessionStorage.getItem('items') !== null ? JSON.parse(sessionStorage.getItem('items')) : [])

    const [loading, setLoading] = useState(true)

    const [busca, setBusca] = useState(sessionStorage.getItem('busca') !== null ? JSON.parse(sessionStorage.getItem('busca')) : '')

    const [scrollPosition, setScrollPosition] = useState(sessionStorage.getItem('scrollPosition') !== null ? JSON.parse(sessionStorage.getItem('scrollPosition')) : 0)

    useEffect(()=>{
        //console.log('componente renderizado')
        //get -> consultar
        //post -> enviar
        //put -> atualizar
        //delete -> excluir

        if (busca == '') {
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
                //setLastPage(response.data.total_pages)
                console.log(response.data);
                setItems(response.data.results)//.slice(0,18)
            })
            //Falha de resposta da API
            .catch(erro => {
                console.log(erro.message)
            });
        } else{
            axios.get(`https://api.themoviedb.org/3/search/${categoria}`,{
                params:{
                    query: busca,
                    page: page,
                    api_key: '6a28c8fa6ac872e1b1b90d85c8293c62',
                    language: 'pt-BR'
                }
            })
            //Resposta positiva da API
            .then(response => {
                setLoading(false)
                //setLastPage(response.data.total_pages)
                console.log(response.data);
                setItems(response.data.results)//.slice(0,18)
            })
            //Falha de resposta da API
            .catch(erro => {
                console.log(erro.message)
            });
        }
    },[busca, classificacao, page])

    if (loading) {
        return(
            <h1>Carregando...</h1>
        )
    }

    //Mudar a posicao vertical da tela (scroll) para a última posição.
    window.scrollTo(0, scrollPosition);

    //Armazenar a posição vertical atual da tela (scroll) num estado a ser carregado.
    window.addEventListener('scroll', () => {
        //console.log(window.scrollY);
        setScrollPosition(window.scrollY);
    })

    return(
        <>
            {sessionStorage.setItem('classificacao', JSON.stringify(classificacao))}
            {sessionStorage.setItem('page', JSON.stringify(page))}
            {sessionStorage.setItem('items', JSON.stringify(items))}
            {sessionStorage.setItem('busca', JSON.stringify(busca))}
            {sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition))}

            <Banner title={titulo}>
                <p>{subtitulo}</p>
                <Search
                    type="text"
                    value={busca}
                    placeholder="Digite o título desejado..."
                    onChange={(event) => setBusca(event.target.value)}
                />
            </Banner>

            <BotaoPaginacao>
                {
                    classificacao == "popular" ? <button disabled><p>Mais populares</p></button> :
                    <button onClick={()=>setClassificacao("popular")}><p>Mais populares</p></button>
                }
                {
                    classificacao == "top_rated" ? <button disabled><p>Maior avaliação</p></button> :
                    <button onClick={()=>setClassificacao("top_rated")}><p>Maior avaliação</p></button>
                }
                {
                    categoria == "movie" ?
                        (classificacao == "now_playing" ? <button disabled><p>Em cartaz</p></button> :
                        <button onClick={()=>setClassificacao("now_playing")}><p>Em cartaz</p></button>) :
                        (classificacao == "on_the_air" ? <button disabled><p>No ar</p></button> :
                        <button onClick={()=>setClassificacao("on_the_air")}><p>No ar</p></button>)
                }
            </BotaoPaginacao>

            <BotaoPaginacao>
                {
                    page == 1 ? <button disabled><p>{'<<'}</p></button> :
                    <button onClick={()=>setPage(1)}><p>{'<<'}</p></button>
                }
                {
                    page == 1 ? <button disabled><p>{'<'}</p></button> :
                    <button onClick={()=>setPage(page-1)}><p>{'<'}</p></button>
                }
                <button disabled><p>{page}</p></button>
                <button onClick={()=>setPage(page+1)}><p>{page+1}</p></button>
                <button onClick={()=>setPage(page+2)}><p>{page+2}</p></button>
                <button onClick={()=>setPage(page+3)}><p>{page+3}</p></button>
                <button onClick={()=>setPage(page+4)}><p>{page+4}</p></button>
                <button onClick={()=>setPage(page+5)}><p>{page+5}</p></button>
                <button onClick={()=>setPage(page+1)}><p>{'>'}</p></button>
            </BotaoPaginacao>
            
            <div className='container'>
                {/* Local onde serão mostrados os cards*/}
                <CardsList>
                    {
                        items.map((item) => (
                            <CardItem key={item.id}>
                                <Link to={`/detalhes/${categoria}/${item.id}`}>
                                    <div className="envelope">
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
                                    </div>
                                </Link>
                            </CardItem>
                        ))
                    }
                    <CardItem key='404'>
                        <div className="envelopeButton">
                            <img style={{filter:'invert(1)'}} src={next} alt="" height='200' onClick={()=>setPage(page+1)} />
                        </div>
                    </CardItem>
                </CardsList>
            </div>

            <BotaoPaginacao>
                {
                    page == 1 ? <button disabled><p>{'<<'}</p></button> :
                    <button onClick={()=>setPage(1)}><p>{'<<'}</p></button>
                }
                {
                    page == 1 ? <button disabled><p>{'<'}</p></button> :
                    <button onClick={()=>setPage(page-1)}><p>{'<'}</p></button>
                }
                <button disabled><p>{page}</p></button>
                <button onClick={()=>setPage(page+1)}><p>{page+1}</p></button>
                <button onClick={()=>setPage(page+2)}><p>{page+2}</p></button>
                <button onClick={()=>setPage(page+3)}><p>{page+3}</p></button>
                <button onClick={()=>setPage(page+4)}><p>{page+4}</p></button>
                <button onClick={()=>setPage(page+5)}><p>{page+5}</p></button>
                <button onClick={()=>setPage(page+1)}><p>{'>'}</p></button>
            </BotaoPaginacao>
            {/* JSON.stringify(items) */}
        </>
    )
}