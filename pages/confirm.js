import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { userRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const confirm = () => {
    const router = userRouter();

    const {pickup, dropoff} = router;

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropOffCoordinates] = useState();

    console.log('pickup', pickup);
    console.log('dropoff', dropoff)


    const getPickupCoordinates = () => {
        const pickup = 'Santa Monica'

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`)
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoidXBzaHVyMDYiLCJhIjoiY2t2bHY4b3ZmMWM1cTJucWdrNW4xczYwbyJ9.QVJqO8s8uiq0fqdxdRYqCA',
                limit: 1
            })
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropOffCoordinates = () => {
        const dropoff = 'Los Angeles'

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`)
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoidXBzaHVyMDYiLCJhIjoiY2t2bHY4b3ZmMWM1cTJucWdrNW4xczYwbyJ9.QVJqO8s8uiq0fqdxdRYqCA',
                limit: 1
            })
        .then(response => response.json())
        .then(data => {
            console.log('DropOff')
            console.log(data.features[0].center)
            setDropOffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [])

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector />

                <ConfirmBtnContainer>
                    Confirm UberX
                </ConfirmBtnContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1
`

const ConfirmBtnContainer = tw.div`

`