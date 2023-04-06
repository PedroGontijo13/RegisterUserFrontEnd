import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    padding: 1rem 2rem;
    h1{
        text-align: center;
    }
`;

const Home = () => {
  return (
    <HomeContainer>
        <h1>{import.meta.env.VITE_APP_URL}</h1>
    </HomeContainer>
  )
}

export default Home