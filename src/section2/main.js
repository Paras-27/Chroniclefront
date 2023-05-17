import React from 'react'
import Leftcard from '../cards/LeftCard'
import Rightcard from '../cards/RightCard'
import '../css/section.css'

const Section2 = () => {
    return (
        <div className='section-2'>
            <div className='scroll-card'>
                <Leftcard />
                <Rightcard />
            </div>
        </div>
    )
}

export default Section2