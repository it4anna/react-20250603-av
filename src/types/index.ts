export interface MenuLiProps {
  id: string
  name: string
  price: any
  ingredients: string[]
}

export interface ReviewProps {
  id: string
  userId: string
  text: string
  rating: any
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
  menu: string[]
  reviews: string[]
}

export interface NormalizedRestaurantProps {
  id: string
  name: string
  menu: string[]
  reviews: string[]
}

export interface NormalizedMenuProps {
  id: string
  name: string
  price: number
  ingredients: string[]
}

export interface NormalizedReviewsProps {
  id: string
  userId: string
  text: string
  rating: number
}

export interface NormalizedUsersProps {
  id: string
  name: string
}

export interface RestaurantTabsProps {
  activeId: string | null
  onClick: any
  restaurants: any[]
}

export interface DishCounterProps {
  name?: string
  value?: number
  onChange?: any
}

export interface CounterProps {
  count: number
  increase: any
  decrease: any
  max?: number
  min?: number
  customeStyle?: string
}

export interface ReviewFormProps {
  value?: number
}

export interface actionProps {
  type: string
  payload?: string
}

export interface providerProps {
  children: any
}

export interface buttonProps {
  onClick: Function
  children: string
  className?: string
  disabled?: boolean
}

export interface CartItemProps {
  id: string
  quantity: number
}
