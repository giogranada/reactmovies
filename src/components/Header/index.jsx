import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { HeaderApp } from './style'

export function Header(){
    return(
        <HeaderApp>
            <img src={logo} alt="Logo React Movies"/>

            <nav>
                <Link to="/">Início</Link>
                <Link to="/filmes">Filmes</Link>
                <Link to="/series">Séries</Link>
            </nav>
        </HeaderApp>
    )
}