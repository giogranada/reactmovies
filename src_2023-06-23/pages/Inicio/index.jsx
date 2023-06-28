import { Link } from 'react-router-dom';
import cardHomeMovies from '../../images/card-home-movies.png';
import cardHomeSeries from '../../images/card-home-series.png';
import { ContentHome } from './style';
import { Banner } from "../../components/Banner"

export default function Inicio(){
    return(
        <>
            <Banner title="Filmes & Séries">
                <p>Lista de filmes e séries baseada na API The Movie DB. 
                Confira as produções mais populares do mundo.</p>
            </Banner>
            <ContentHome>
                <Link to='/filmes'>
                    <img src={cardHomeMovies} alt="Filmes" />
                </Link>
                <Link to='/series'>
                    <img src={cardHomeSeries} alt="Séries" />
                </Link>
            </ContentHome>
        </>
    )
}