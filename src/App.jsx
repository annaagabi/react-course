import Square from './components/square'

export default function App(){
  return(
    <div className="app-container">
      <Square
          color="blue"
          position="right"
      />
    </div>
  )
}



// import Brand from './components/brand'

// export default function App(){
//   return(
//     <div className="app-container">
//       <Brand 
//           brand="visa"
//       />
//     </div>
//   )
// }



// import Card from "./components/card"
// import Box from '../src/assets/image/Cube.svg'

// export default function App(){
//   return(
//     <div>
//         <Card 
//           image={Box}
//           imgAlt="Imagem de uma caixa"
//           title="Highlight benefit one"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
//           />
//         <Card 
//           image={Box}
//           imgAlt="Imagem de uma caixa"
//           title="Highlight benefit two"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
//         />
//         <Card 
//           image={Box}
//           imgAlt="Imagem de uma caixa"
//           title="Highlight benefit three"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
//         />
//       </div>
//   )
// }




// import Home from './pages/home/index'

// export default function App(){
//   return(
//     <Home />
//   )
// }

// function Filho({nome = "Mundo"}){
//   return <p>Olá, {nome}</p>
// }
// export default function App(){
//   return <Filho nome="Anna" />
// }


// Uso de props com evento onClick
// function Filho({onAlert}){
//   return <button onClick={onAlert}>Receba seu alert</button>
// }

// export default function App(){
//   const handleAlert = () => alert("Funcionou")
//   return <Filho onAlert={handleAlert} />

//   // return <Filho onAlert={() => alert("Funcionou")} /> // Não é uma boa prática jogar o arrow function direto
// }

/* 
export default function App(){
  // return <button onClick={() => console.log("Função Funcionando")}>Click Aqui</button>
  return <button onClick={() => alert("Função Funcionando")}>Click Aqui</button>
}
*/


// function Filho ({approved}){
//   return( <>
//       {/* {approved ? <p>Aprovado!</p> : <p>Reprovado</p> }*/} {/* Isto é verdadeiro ? Retorno :(se não) retorno */}
//       {approved ? <img src="https://pa1.aminoapps.com/6502/0683711d56279455df90340a7192f9c620ea0553_hq.gif" alt="Bobo Esponja fazendo joia" /> : <img src ="https://64.media.tumblr.com/2ddc057ed19e3f8f33efdcd029eff929/7d8c724997a7417c-ba/s540x810/cfad0f3422858b0135351069801e26a131782250.gifv" alt="Bob Esponja chorando" /> } 
//     </> // O nome desta tag é fragmento
//   )
// }

// export default function App(){
//     // return <Filho approved /> // O "true" é o valor padrão, então não precisa colocar ele
//    return <Filho approved={false} /> // O "true" é o valor padrão
  
// }


/* 
function Filho ({idade}){
  return(
    <p>{idade}</p>
  )
}

export default function App(){
  return <Filho idade={25} />
  
}
*/


// Uso da prop Children
// function Filho ({children}){
//   return(
//     <div className="filho">
//       {children}
//     </div>
//   )
// }

// export default function App(){
//   return <Filho> 
//             {/* <p>Sou uma tag p passando por filho</p>  */}
//             <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" alt="Charmander" />
//           </Filho>;
  
// }


/*
import Card from "./components/card"

export default function App(){
  return <Card 
              title="Titulo" 
              description="To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity."
              image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png"
              imgAlt="Image Gengar"
              />
}
*/



// function Filho(props){ // props = é um parâmetro
//   // return <p>Olá, Mundo!</p>

//   console.log(props)
//   return <p>{props.title}</p>
// }

// export default function App(){
//   return(
//     <Filho title="Enviando uma mnsagem" />
//   )
// }



/* 
import Home from "./pages/home/index.jsx"

export default function App(){ // O default só pode ser usado uma vez
  return(
    <Home />
  )
}
*/

