import './style.css'

export default function Card({image, imgAlt, title, description}){
    return(
        <div className="card-container">
            <img src={image} alt={imgAlt}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}