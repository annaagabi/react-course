import "./style.css"
import Cube from "../../assets/image/Cube.svg"

export default function Headline(){
    return(
        <section>
            <div className="section-content">
                <p>How it works</p>
                <h2>Headline with USP related to how your product or service works</h2>
                <button type="button">Learn more</button>
            </div>
            <div className="section-steps">
                <div className="steps">
                    <div className="steps-icons">
                        <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                        <div className="line"></div>
                    </div>
                    <div className="steps-text">
                        <h3>Short summary of step one</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="steps">
                    <div className="steps-icons">
                        <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                        <div className="line"></div>
                    </div>
                    <div className="steps-text">
                        <h3>Short summary of step two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="steps">
                    <div className="steps-icons">
                        <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                        <div className="line"></div>
                    </div>
                    <div className="steps-text">
                        <h3>Short summary of step three</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="steps">
                    <div className="steps-icons">
                        <img src={Cube} alt="Cubo com arestas na cor preta, uma das faces na cor preta e as outras faces na cor branca" />
                        {/* <div className="line"></div> */}
                    </div>
                    <div className="steps-text">
                        <h3>Short summary of step four</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}