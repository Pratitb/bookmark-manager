import { useEffect, useState, type RefObject } from "react"

export const useRemHeight = (ref: RefObject<HTMLElement | null>, padding = 20) => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const element = ref?.current
        if (!element) return
        const calculate = () => {
            const viewportHeight = window.innerHeight
            const elementTop = element?.getBoundingClientRect().top
            const remHeight = viewportHeight - elementTop - padding
            setHeight(remHeight)
        }

        calculate()

        window.addEventListener('scroll', calculate)
        window.addEventListener('resize', calculate)

        return () => {
            window.removeEventListener('scroll', calculate)
            window.removeEventListener('resize', calculate)
        }
    }, [ref, padding])

    return height
}