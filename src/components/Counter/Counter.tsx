import classNames from 'classnames'
import { type CounterProps } from '../../types'
import styles from './Counter.module.css'

const MAX_QUANITITY = 5
const MIN_QUANITITY = 0

export const Counter = ({
  count = 0,
  max = MAX_QUANITITY,
  min = MIN_QUANITITY,
  increase,
  decrease,
  customeStyle,
}: CounterProps) => (
  <div className={classNames(styles.counter, { [customeStyle]: customeStyle })}>
    <button onClick={decrease} disabled={count <= min}>
      -
    </button>
    <span>{count}</span>
    <button onClick={increase} disabled={count >= max}>
      +
    </button>
  </div>
)
