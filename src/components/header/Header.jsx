import {
  HeaderContainer,
  MainHeader,
  FormContainer,
  FoodInput,
  Button,
  Select,
} from './Header.style';

export const Header = ({setQuery,setSelectedMeal,mealType,getData}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData()
  }
  return (
  <div>
    <h1>asdasd</h1>
        <HeaderContainer>
          <MainHeader>RecipeApp</MainHeader>
          <FormContainer onSubmit={handleSubmit}>
            <FoodInput 
              type="text"
              placeholder="search"
              onChange={(e)=> setQuery(e.target.value)}
              />
            <Button type="submit">SEARCH</Button>
            <Select 
              name="mealType"
              id="mealType">
              onChange={(e)=> setSelectedMeal(e.target.value)}
              {mealType.map((meal,index) => (
              <option key={index} value={meal.lowerCase()}>{meal}</option>//? süslü parantez kulanmadığımız için return kullanmadık.
            ))}
            </Select>
          </FormContainer>
        </HeaderContainer>
        </div>
  )
}

// export default Header