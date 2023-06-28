import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import star from '../../images/star.svg'
import noImage from '../../images/no-image.jpg'

export default function Detalhes(){
    //Extraindo da URL os parâmetros passados.
    const{categoria} = useParams()
    const{id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`,{
            params:{
                api_key: '6a28c8fa6ac872e1b1b90d85c8293c62',
                language: 'pt-BR'
            }
        })
        //Resposta positiva da API
        .then(response => {
            //setLoading(false)
            console.log(response.data);
            setItem(response.data)
        })
        //Falha de resposta da API
        .catch(erro => {
            console.log(erro.message)
        });
    }, [])
    return(
        <>
            <div className="BannerDetalhes">
                //
            </div>
            <div className="conteudoDetalhes">
                {
                    (item.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width={360} /> :
                        <img src={noImage} alt="" width={360} />
                    )
                }
                <div>
                    <h1>
                        {categoria === 'movie' ? item.title : item.name}
                    </h1>
                    <h2>
                        {item.tagline ? item.tagline : ''}
                    </h2>
                    <ul>
                        <li>Ano: {JSON.stringify(categoria === 'movie' ? item.release_date : item.first_air_date)/*.substring(1,5)*/}</li>
                        <li><img src={star} /> {item.vote_average}</li>
                    </ul>
                    <p>
                        {item.overview ? item.overview : ''}
                    </p>
                </div>
            </div>
        </>
    )
}
