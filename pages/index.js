import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {
  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/*Header*/}
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <Name> Michael Upshur </Name>
            <UserImage 
              src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/194350498_10100988701417037_294715602391550969_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VmCH5dm6IB8AX_FA-Tz&_nc_ht=scontent-lga3-2.xx&oh=49238684c92e0789f0a425b0bb00ff1e&oe=61A8BDF5'
            />
          </Profile>
        </Header>
        {/*ActionButtons*/}
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uber.png' />
              Ride
            </ActionButton >
          </Link>
          <Link href='/search'>
            <ActionButton >
              <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png' />
              Wheels
            </ActionButton>
          </Link>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png' />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        {/*InputButton*/}
        <InputButton>
          Where To?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20 text-small
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-7 h-38 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImg = tw.img`
  h-3/5
`

const InputButton= tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 ml-7 mr-7
`