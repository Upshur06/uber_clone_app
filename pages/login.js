import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
            <Title>Log in to access your account</Title>
            <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.jpg' />
            <SignInBtn>
                Sign In With Google
            </SignInBtn>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen p-4
`

const SignInBtn = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500   
`

const HeadImg = tw.img`
    
`