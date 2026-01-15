import { useUsers } from '../../app/hooks'
import { type ReviewProps } from '../../types'

const StarFilled = () => <span>&#9733;</span>
const StarEmpty = () => <span>&#9734;</span>

export const Review = ({ userId, rating, text }: ReviewProps) => {
  const { getUserById } = useUsers()
  const user = getUserById(userId)

  return (
    <li>
      <div className="header">
        <h4>{user?.name}</h4>
        <h4>
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <StarFilled key={index} />
            ))}
          {Array(10 - rating)
            .fill('')
            .map((_, index) => (
              <StarEmpty key={index} />
            ))}
        </h4>
      </div>
      <p>{text}</p>
    </li>
  )
}
