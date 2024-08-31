import './style.css'
import American from '../../assets/image/american-express.png'
import Master from '../../assets/image/mastercard.png'
import Visa from '../../assets/image/visa.png'
import Alelo from '../../assets/image/alelo.png'

// Código Limpo
const brandImages ={
    alelo: Alelo,
    american: American,
    master: Master,
    visa: Visa
}

export default function Brand({ brand }){
    const ImageSrc = brandImages[brand] // Vai percorrer o array de marcas
    return ImageSrc ? <img src={ImageSrc} alt={`Imagem da bandeira ${brand}`} /> : <h1>Selecione uma bandeira válida</h1>

}

/*
// Código sujo

import './style.css'
import American from '../../assets/image/american-express.png'
import Master from '../../assets/image/mastercard.png'
import Visa from '../../assets/image/visa.png'
import Alelo from '../../assets/image/alelo.png'

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
*/