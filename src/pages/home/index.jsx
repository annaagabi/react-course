import Header from "../../components/header"
import Section from "../../components/section"
// import CardsBenefit from "../../components/cards-benefit"
import Headline from "../../components/headline"
import Describle from "../../components/describle"
import Card from "../../fundamentos"
import Box from '../../assets/image/Cube.svg'

export default function Home(){
    return (
        <div>
        <Header />
        <Section />
        {/* <CardsBenefit /> */}
        <Card 
            image={Box}
            imgAlt="Imagem de uma caixa"
            title="Highlight benefit one"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
        <Headline />
        <Describle />
        </div>
    )
}