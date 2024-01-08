import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={110}/>
        <Card companyName='Microsoft' ticker='MSFT' price={230}/> 
        <Card companyName='Tesla' ticker='TSLA' price={320}/>
    </div>
  )
}

export default CardList