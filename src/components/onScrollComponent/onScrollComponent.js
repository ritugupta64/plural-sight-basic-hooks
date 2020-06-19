import React, {useEffect, useState, useRef} from 'react';


const OnPageScroll = ({primary, secondary}) => {
   const imgRef = useRef(null)
    useEffect(() => {

        window.addEventListener('scroll', scrollHandler);
         setInView(isInView())
        return() => {
            return window.removeEventListener('scroll', scrollHandler)
        }
    })

    const [inView, setInView] = useState(false)

    const isInView = () => {
         if(imgRef.current){
            const react = imgRef.current.getBoundingClientRect();
            return react.top >= 0 && react.bottom <= window.innerHeight
         }
         return false
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView()
        })
    }
 
    return <>
     <img src={inView ? primary : secondary} width="200" height="200" ref={imgRef}/>
     </>
}

export {OnPageScroll}