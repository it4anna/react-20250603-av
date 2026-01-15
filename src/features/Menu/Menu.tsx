import { useDishes } from '../../app/hooks'
import { type MenuProps } from '../../types'
import { Dish } from './Dish/Dish'

export const Menu = ({ dishesIds }: MenuProps) => {
  const { getDishesByIds } = useDishes()
  const dishes = getDishesByIds(dishesIds)

  return (
    <>
      <h3>Menu:</h3>
      <ul>
        {dishes.map((menuItem: String) => (
          <Dish {...menuItem} key={menuItem.id} />
        ))}
      </ul>
    </>
  )
}
