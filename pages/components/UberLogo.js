import React from 'react'
import tw from "tailwind-styled-components"

const UberLogo = (prop) => {
    return (
        <Wrapper>
            <img src={prop.src} alt='...' />
        </Wrapper>
    )
}

export default UberLogo

const Wrapper = tw.img`
    h-28
`