import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { userRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    // const router = userRouter();

    // const {pickup, dropoff} = router;

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropOffCoordinates] = useState();

    // console.log('pickup', pickup);
    // console.log('dropoff', dropoff)

    const getPickupCoordinates = () => {
        const pickup = 'Santa Monica'

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoidXBzaHVyMDYiLCJhIjoiY2t2bHY4b3ZmMWM1cTJucWdrNW4xczYwbyJ9.QVJqO8s8uiq0fqdxdRYqCA',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropOffCoordinates = () => {
        const dropoff = 'Los Angeles'

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoidXBzaHVyMDYiLCJhIjoiY2t2bHY4b3ZmMWM1cTJucWdrNW4xczYwbyJ9.QVJqO8s8uiq0fqdxdRYqCA',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropOffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates();
        getDropOffCoordinates();
        // getPickupCoordinates(pickup);
        // getDropOffCoordinates(dropoff);
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
                    <ConfirmBtn>
                        Confirm UberX
                    </ConfirmBtn>
                </ConfirmBtnContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1
`

const ConfirmBtnContainer = tw.div`
    border-t-2
`

const ConfirmBtn = tw.div`
    bg-black text-white my-4 py-4 text-center text-xl
`