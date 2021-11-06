import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoidXBzaHVyMDYiLCJhIjoiY2t2bHY4b3ZmMWM1cTJucWdrNW4xczYwbyJ9.QVJqO8s8uiq0fqdxdRYqCA';

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
          });

        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
            // map.fitBound
        }


      }, [props.pickupCoordinates, props.dropoffCoordinates])

      const addToMap = (map,coordinates) =>{
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
      }

    //   useEffect(()=>{
    //       if(pickupCoordinates){
    //           addToMap()
    //       }
    //     // console.log(props.pickupCoordinates)
    //     // console.log(props.dropoffCoordinates)
    //   }, [props.pickupCoordinates, props.dropoffCoordinates])

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )

}

const Wrapper = tw.div`
  flex-1
`

export default Map
