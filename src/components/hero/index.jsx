import './style.css'
import Placeholder from '../../assets/image/Placeholder Image.svg'

export default function Hero({alignment}){
    return(
        // É uma boa prática usar div no lugar de section
        <div className={`hero-container hero-${alignment}`}> 
            <img src={Placeholder} alt="" />
            <div className= "hero-text" >
                <h6>Feature one</h6>
                <h2>Describe benefit of feature one</h2>
                <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}