import React from 'react'

interface Props  {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
   <div className="card col-md-6 offset-md-3 mb-2">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">{companyName}</h5>
        <h2>$ {price}</h2>
        <p className="card-text">{ticker}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>

  )
}

export default Card