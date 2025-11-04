export interface MenuLiProps {
    id: string
    name: string
    price: any
    ingredients: string[]
    key: string
}
export interface ReviewProps {
  id: string
  user: string
  text: string
  rating: any
  key: string
}
export interface MenuProps {
  menu: MenuLiProps[]
}
export interface ReviewsProps {
  reviews: ReviewProps[]
}
export interface RestaurantProps {
  id: string
  name: string
  menu: MenuLiProps[]
  reviews: ReviewProps[]
  key: string
}
export interface RestaurantTabsProps {
  activeId: string
  onClick: any
}
export interface ButtonProps {
  value: string
  onClick: any
}
