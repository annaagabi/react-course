import './style.css'
import Cube from '../../assets/image/Cube.svg'

export default function CardsBenefit(){
    return(
        <section>
            <div className="card">
                <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                <h3>Highlight benefit two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="card">
                <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                <h3>Highlight benefit two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="card">
                <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                <h3>Highlight benefit two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
        </section>
    )
}