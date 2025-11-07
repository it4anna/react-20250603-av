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
  className?: string
  value: string
  onClick: any
  isEnable?: boolean
}
export interface MenuLiCounterProps {
  name?: string
  value?: number
  onChange?: any
}
export interface CounterProps {
  count: number
  increase: any
  decrease: any
}
export interface ReviewFormProps {
  value?: number
}
export interface actionProps {
  type: string
  payload?: object
}
