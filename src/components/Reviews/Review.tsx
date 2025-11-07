import { type ReviewProps } from '../../types'

const StarFilled = () => <span>&#9733;</span>
const StarEmpty = () => <span>&#9734;</span>

export const Review = ({ user, rating, text }: ReviewProps) => (
  <li>
    <div className="header">
      <h4>{user}</h4>
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
