import {useEffect} from 'react'
import {type CounterProps} from '../types'
import {useCount} from '../hooks/useCount'
import {Button} from '.'

export const Counter = ({value = 0, name = 'count', onChange = () => {}}: CounterProps) => {
    const {count, increase, decrease} = useCount(value)
    //As logic is extracted to HOOK, Ive left one compoment for both Rating and Review. If its still critical I create separete components, let me know pls

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => onChange({[name]: count}), [count])

    return <div className='counter'>
        <Button value='-' onClick={decrease} />
        <span>{count}</span>
        <Button value='+' onClick={increase} />
    </div>
}
