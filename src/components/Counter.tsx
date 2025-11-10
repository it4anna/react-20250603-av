import { type CounterProps } from '../types'

const MAX_QUANITITY = 5
const MIN_QUANITITY = 0

export const Counter = ({
  count = 0,
  max = MAX_QUANITITY,
  min = MIN_QUANITITY,
  increase,
  decrease,
}: CounterProps) => (
  <div className="counter">
    <button onClick={decrease} disabled={count <= min}>
      -
    </button>
    <span>{count}</span>
    <button onClick={increase} disabled={count >= max}>
      +
    </button>
  </div>
)
