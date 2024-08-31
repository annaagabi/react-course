import './style.css'

export default function Square({ color, position }){ // desestruturação do parâmetro
    return <div className={`square square-${color} square-${position}`}></div>

}
