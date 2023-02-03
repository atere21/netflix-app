import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home =() =>{
  return (
    <div>
        <Main/>
        <Row title='Up Coming fetchUrl ={requests.requestUp Coming}'/>
        <Row title='Popular fetchUrl ={requests.requestPopular}'/>
        <Row title='Trending fetchUrl ={requests.requestTrending}'/>
        <Row title='TopRated fetchUrl ={requests.requestTopRated}'/>
    </div>
  )
}

export default Home