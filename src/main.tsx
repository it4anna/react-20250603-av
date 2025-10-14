import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { restaurants } from './materials/mock-restaurants'

type MenuType = {
  id: String
  name: String
  price: Number
  ingredients: [String]
}
type ReviewType = {
  id: String
  user: String
  text: String
  rating: Number
}
type RestaurantType = {
  id: String
  name: String
  menu: [MenuType]
  reviews: [ReviewType]
}

const Menu = ({ data }: { MenuType }) => {
  return (
    <li>
      <h4>{`${data.name}- ${data.price}`}</h4>
      <p>{data.ingredients.toString()}</p>
    </li>
  )
}
const Review = ({ data }: { ReviewType }) => {
  return (
    <li>
      <h4>{'*'.repeat(10 - data.rating)}</h4>
      <p>{data.text}</p>
    </li>
  )
}
const Restaurant = ({ data }: { RestaurantType }) => {
  const { name, menu, reviews } = data
  return (
    <>
      <h2>{name}</h2>
      <div>
        <h3>Menu:</h3>
        <ul>
          {menu.map((menuItem) => (
            <Menu data={menuItem} key={menuItem.id} />
          ))}
        </ul>
      </div>
      <div>
        <h3>Reviews:</h3>
        {
          <ul>
            {reviews.map((review) => (
              <Review data={review} key={review.id} />
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
      <Restaurant data={restaurant} key={restaurant.id} />
    ))}
  </StrictMode>,
)
