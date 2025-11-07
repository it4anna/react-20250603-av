import { type CounterProps } from '../types'
import { Button } from '.'

export const Counter = ({
  count = 0,
  increase,
  decrease = () => {},
}: CounterProps) => (
  <div className="counter">
    <Button value="-" onClick={decrease} />
    <span>{count}</span>
    <Button value="+" onClick={increase} />
  </div>
)
