import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    const router = useRouter();

    const { pickup, dropoff } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropOffCoordinates] = useState();

    console.log('pickup', pickup);
    console.log('dropoff', dropoff);

    const getPickupCoordinates = (pickup) => {

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

    const getDropOffCoordinates = (dropoff) => {

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
        getPickupCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [pickup, dropoff])

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
    flex-1 flex flex-col
`

const ConfirmBtnContainer = tw.div`
    bg-black text-white border-t-2
`

const ConfirmBtn = tw.div`
    my-4 py-4 text-center text-xl
`