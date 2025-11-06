import {useProgress} from '../hooks/useProgress'

export const ScrollProgressBar = () => {
    const width = useProgress()
    
    return <div style={{width}} className='scroll-progress-bar'/>
}
