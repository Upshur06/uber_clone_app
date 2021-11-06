import React from 'react'
import tw from "tailwind-styled-components"

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <Carlist>
                <Car>
                    <CarImg src='https://i.ibb.co/cyvcpfF/uberx.png' />
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>$24.00</Price>
                </Car>
            </Carlist>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 
`

const Title = tw.div`
    text-gray-500 text-center text-xs border-b
`

const Carlist = tw.div`

`

const Car = tw.div`
    flex p-4
`

const CarImg = tw.img`
    h-14 mr-2
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`


