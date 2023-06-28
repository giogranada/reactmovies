import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import star from '../../images/star.svg'
//import noImage from '../../images/no-image.jpg'
import { DetailsBanner, DetailsContent } from "./style"

export default function Detalhes(){
    //Extraindo da URL os parâmetros passados.
    const{categoria} = useParams()
    const{id} = useParams()

    const navigate = useNavigate()

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
            <DetailsBanner url={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />
            <DetailsContent>
                {
                    (item.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width={360} /> :
                        //<img src={noImage} alt="" width={360} />
                        //<div style={{width:360,height:500}}></div>
                        ""
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
                        {/* ?. -> optional chaining : só executa se o valor a ser recebido existir (!= NULL/undefined) */}
                        <li>Ano: {JSON.stringify(categoria === 'movie' ? item.release_date : item.first_air_date)?.substring(1,5)}</li>
                        <li><img src={star} /> {(item.vote_average*10)?.toFixed(0)}%</li>
                    </ul>
                    <p>
                        <strong>Sinopse:</strong> {item.overview ? item.overview : "Não disponível."}
                    </p>
                    <button onClick={()=> navigate(-1)}>Voltar</button>
                </div>
            </DetailsContent>
        </>
    )
}
