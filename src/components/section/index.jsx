import Placeholder from "../../assets/image/Placeholder Image.svg"

export default function Section(){
    return(
        <section>
            <div className="section-container">
                <h1>Resonate with the visitor's problem</h1>
                <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
                <input type="email" placeholder="Enter your email" />
                <button type="button">Try it for free</button>
                <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
            </div>
            <img src={Placeholder} alt="Imagem com fundo cinza e um ícone de imagem dentro" />
        </section>
    )
}