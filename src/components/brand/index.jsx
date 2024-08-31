import './style.css'
import American from '../../assets/image/american-express.png'
import Master from '../../assets/image/mastercard.png'
import Visa from '../../assets/image/visa.png'
import Alelo from '../../assets/image/mastercard.png'


export default function Brand({brand}){
    switch(brand){
        case 'american':
            return <img src={American} alt="Icones de marcas de cartões" />
        case 'master':
            return <img src={Master} alt="Icones de marcas de cartões" />
        case 'visa':
            return <img src={Visa} alt="Icones de marcas de cartões" />
        case 'alelo':
            return <img src={Alelo} alt="Icones de marcas de cartões" />
        default:
            return <h1>Selecione uma brand disponível</h1>
    }
    // return(
    //     <img src="" alt="Icones de marcas de cartões" />
    // )
}