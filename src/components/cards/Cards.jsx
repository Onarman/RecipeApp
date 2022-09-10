import {MainContainer,
  Card,
  Image,
  Head,
  Button} from './Cards.style';
  import {useNavigate} from "react-router-dom"
import defaultImage from "../../assets/defaultImage.jpeg"
const Cards = ({recipes}) => {
  const navigate = useNavigate();
  return <MainContainer wrap="wrap">
    {recipes.map(({recipe},index)=>( //?yolda destructring
    <Card key={index}>
      <Head>recipe.label</Head>
      <Image src={recipes.image || defaultImage}/>
      <Button onClick={()=> navigate("detail",{state: recipe,replace:false})}>View More</Button>
    </Card>
    ))}
    
  </MainContainer>
}

export default Cards