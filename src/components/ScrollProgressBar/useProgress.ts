import { useEffect, useState } from 'react'

const getNewPercents = () => {
  const bodyHeight = document.body.scrollHeight - window.innerHeight
  const scrollY = window.scrollY

  return `${(scrollY / bodyHeight) * 100}%`
}

export const useProgress = () => {
  const [percents, setPercents] = useState('0%')

  useEffect(() => {
    const onScroll = () => setPercents(getNewPercents())
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return percents
}
