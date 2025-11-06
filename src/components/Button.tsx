import {type ButtonProps} from '../types'

export const Button = ({value, onClick = () => {}}: ButtonProps) => (
  <input className='button' type='button' value={value} onClick={onClick} />
)
