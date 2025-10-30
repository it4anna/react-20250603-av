import { StrictMode, useState, FunctionComponent } from 'react'
import { createRoot } from 'react-dom/client'
import { restaurants } from './materials/mock-restaurants'
import './main.css'

// Linter: what settings to use? Didnt get about learning project settings
//Prettier and linter was brocken  - please ignore, gonne fix it next HW

//Constants
const MINQUONITITY = 0
const MAXQUONITITY = 5
const FIRST_REST_ID = restaurants[0].id
interface DishProps {
    id: string
    name: string
    price: any
    ingredients: [string]
    key: string
}
interface ReviewProps {
  id: string
  user: string
  text: string
  rating: any
  key: string
}
interface MenuProps {
  menu: [DishProps]
}
interface ReviewsProps {
  menu: [ReviewProps]
}
interface RestaurantProps {
  id: string
  name: string
  menu: [DishProps]
  reviews: [ReviewProps]
  key: string
}
interface RestaurantTabsProps {
  activeId: string
  onClick: any
}
interface ButtonProps {
  value: string
  onClick: any
}

// Heplers:
function getRestById (id: string) {
  return {...restaurants.find((restaurant) => restaurant.id === id)}
}
function toCapitalize (arr: string[]) {
  const str = arr.join(', ')
  return str.charAt(0).toUpperCase() + str.slice(1)
}

//Components
const StarFilled = () => <span>&#9733;</span>
const StarEmpty = () => <span>&#9734;</span>
const Review: React.FC<ReviewProps> = ({user, rating, text}) => (
  <li>
    <div className='header'>
      <h4>{user}</h4>
      <h4>
        {Array(rating).fill(0).map((_, index) => <StarFilled key={index} />)}
        {Array(10-rating).fill('').map((_, index) => <StarEmpty key={index} />)}
      </h4>
    </div>
    <p>{text}</p>
  </li>
)
const MenuLi = ({name, price, ingredients}: DishProps) => (
  <li>
    <div className='header'>
      <h4>{name}</h4>
      <h4>{price}</h4>
    </div>
    <p>{toCapitalize(ingredients)}</p>
  </li>
)
const useQuonitity = () => {
  const [quontity, setQuontity] = useState(0);
  const increaseQuontity = () => quontity < MAXQUONITITY && setQuontity(quontity + 1)
  const decreaseQuontity = () => quontity > MINQUONITITY && setQuontity(quontity - 2)

  return {quontity, increaseQuontity, decreaseQuontity}
}
const Button = ({value, onClick = () => {}}: ButtonProps) => (
  <input className='button' type='button' value={value} onClick={onClick} />
)
const Dish = (props: DishProps) => {
  const {quontity, increaseQuontity, decreaseQuontity} = useQuonitity()
  return (
    <>
      <MenuLi {...props}/>
      <div className='dish-buttons'>
        <Button value='Remove' onClick={decreaseQuontity} />
        <span>{quontity}</span>
        <Button value='Add' onClick={increaseQuontity} />
      </div>
    </>
  )
}
const Menu = ({menu}: MenuProps) => (
  <>
    <h3>Menu:</h3>
    <ul>
      {menu.map((menuItem: DishProps) => <Dish {...menuItem} key={menuItem.id} />)}
    </ul>
  </>
)
const Reviews = ({reviews}: ReviewsProps) => (
  <>
    <h3>Reviews:</h3>
    <ul>
      {reviews.map((menuItem: DishProps) => <Review {...menuItem} key={menuItem.id} />)}
    </ul>
  </>
)
// TODO: Optimize the code duplication for these wto components: Reviews and Reviews
// Question: Abot "Simmple/Stupid": When decombine components when to stop? Is this file as example ... is it not too much?
const Restaurant = ({menu, reviews}: RestaurantProps) => (
  <>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
  </>
)
const RestaurantTabs = ({activeId, onClick}: RestaurantTabsProps) => {
  return restaurants.map(({id, name}: RestaurantProps) => (
    <h2 
      className={`${id === activeId ? 'active-' : ''}resarant-tab`}
      onClick={() => onClick(id)}
      key={id}
    >
      {name}
    </h2>
  ))
}
const Restaurants = () => {
  const [id, setId] = useState(FIRST_REST_ID);
  return (
  <>
    <RestaurantTabs activeId={id} onClick={setId} />
    <Restaurant {...getRestById(id)} key={id} />
  </>
)}
const Header = () => <header><h1>Restaurants:</h1></header>
const Footer = () => <footer>...</footer>
const Layaout = ({children}: FunctionComponent[]) => (
<>
    <Header />
    <body>
      {children}
    </body>
    <Footer />
</>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layaout>
      <Restaurants />
   </Layaout>
   </StrictMode>
)
