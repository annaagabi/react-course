import { useState } from "react"

export default function Count(){
    const [count, setCount] = useState(0) // 0 é o estado inicial

    // Tradicional function
    function handleCount(){
        setCount(count+1)
    }
    
    return(
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={()=> setCount(count+1)}>Click Aqui</button>
        </div>
    )
}