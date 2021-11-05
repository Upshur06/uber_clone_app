import React from 'react'
import tw from "tailwind-styled-components"

const Search = () => {
    return (
        <Wrapper>
            <ButtonContainer>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </ButtonContainer>
            <InPutContainer>
                <FromToIcons>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder='Enter pickup location' />
                    <Input placeholder='Where to?' />
                </InputBoxes>
            </InPutContainer>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
    bg-gray-200 h-screen 
`

const ButtonContainer = tw.div`
    bg-white px-4
`

const BackButton = tw.img`
    h-12
`

const InPutContainer = tw.div`
    bg-white flex
`

const FromToIcons = tw.div`
    w-10 flex flex-col
`

const Circle = tw.img`
    
`

const Line = tw.img`

`

const Square = tw.img`

`

const InputBoxes = tw.div`
    flex flex-col flex-1 
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`