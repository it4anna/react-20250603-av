import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { restaurants } from './materials/mock-restaurants'
import './main.css'

interface MenuProps {
  id: String
  name: String
  price: Number
  ingredients: [String]
}
interface ReviewProps {
  id: String
  user: String
  text: String
  rating: Number
}
interface RestaurantProps {
  id: String
  name: String
  menu: [MenuProps]
  reviews: [ReviewProps]
}

const Menu: React.FC<MenuProps> = ({menuItem}) => (
  <li>
    <h4>{`${menuItem.name}- ${menuItem.price}`}</h4>
    <p>{menuItem.ingredients.toString()}</p>
  </li>
)
const StarFilled = () => <span>&#9733;</span>
const StarEmpty = () => <span>&#9734;</span>
const Review: React.FC<ReviewProps> = ({review}) => (<li>
    <div className='review-header'>
      <h4>{review.user}</h4>
      <h4>
        {
          Array(review.rating)
          .fill('')
          .map((_, index) => <StarFilled key={index} />)
        }
        {
          Array(10-review.rating)
          .fill('')
          .map((_, index) => <StarEmpty key={index} />)
        }
        </h4>
    </div>
      <p>{review.text}</p>
  </li>
)
const Restaurant: React.FC<RestaurantProps> = ({restaurant}) => {
  const { name, menu, reviews } = restaurant
  return (
    <>
      <h2>{name}</h2>
      <div>
        <h3>Menu:</h3>
        <ul>
          {menu.map((menuItem) => (
            <Menu menuItem={menuItem} key={menuItem.id} />
          ))}
        </ul>
      </div>
      <div>
        <h3>Reviews:</h3>
        {
          <ul>
            {reviews.map((review) => (
              <Review review={review} key={review.id} />
            ))}
          </ul>
        }
      </div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Restaurants:</h1>
    {restaurants.map((restaurant) => (
      <Restaurant restaurant={restaurant} key={restaurant.id} />
    ))}
  </StrictMode>,
)
