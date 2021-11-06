import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <Carlist>
                { carList.map((car, index)=>{
                    <Car key={index}>
                        <CarImg src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>$24.00</Price>
                    </Car>
                })}
            </Carlist>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
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


