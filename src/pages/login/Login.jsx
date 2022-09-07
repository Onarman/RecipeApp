import LoginStyle, 
{ FormContainer,
   Header, 
   LoginContainer, 
   StyledButton, 
   StyledForm, 
   StyledImg, 
   StyledInput } from './Login.style'
import mealSvg from "../../assets/food.png"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "ali"
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate(-1)
  }
  return <LoginContainer>
    <FormContainer>
      <StyledImg src={mealSvg}/>
      <Header>{"CW/>"}Recipe</Header>
      <StyledForm onSubmit={handleSubmit}>

        <StyledInput type="text" placeholder='username' required />
        <StyledInput type="password" placeholder='password' required/>
        <StyledButton type="submit">Login</StyledButton>
        
      </StyledForm>
    </FormContainer>
  </LoginContainer>
  
}

export default Login



        