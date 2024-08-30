import './style.css'
import Placeholder from '../../assets/image/Placeholder Image.svg'

export default function Describle(){
    return(
        <section className='describle-container'>
            <img src={Placeholder} alt="Imagem com fundo cinza e um ícone de imagem dentro" />
            <div className="decrible-content">
                <p>Feature one</p>
                <h2>Describe benefit of feature one</h2>
                <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>
                <button type="button">Learn more</button>
            </div>
        </section>
    )
}