import './style.css'
import Logo from "../../assets/image/logo.svg"
import ChevronDown from "../../assets/image/Chevron Down.svg"

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo da Compania" />
            <nav>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href="">
                    <p>Link Four</p>
                    <img src={ChevronDown} alt="Seta para baixo" />
                </a>
            </nav>
            <button type="button">Try it for free</button>
        </header>
    )
}