import classNames from 'classnames'
import type { buttonProps } from '../../types'
import { useTheme } from '../ThemeToggle/useTheme'
import styles from './Button.module.scss'

export const Button = ({onClick, className, children, disabled}: buttonProps) => {
    const {theme} = useTheme()

    return (
        <button
            className={classNames(className, {
                [styles.light]: theme === 'light',
                [styles.dark]: theme ==='dark'
                
            })}
            onClick={onClick} 
            disabled={disabled} 
        >
            {children}
        </button>
    )   
}