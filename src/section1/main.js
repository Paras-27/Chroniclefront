import React, { useEffect } from 'react'
import '../css/section.css'
import Word from './word'

const Section1 = () => {
    const paragraph = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."
    const words = paragraph.split(" ");


    return (
        <div className='section-1'>
            <p className='scroll-text'>
                {words.map((word, i) => (
                    <Word word={word} i={i} l={words.length} />
                ))}
            </p>
        </div>
    )
}

export default Section1