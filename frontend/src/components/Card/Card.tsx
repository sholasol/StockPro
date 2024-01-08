import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
   <div className="card">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">AAPL</h5>
        <h2>$110</h2>
        <p className="card-text">Some text here</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>

  )
}

export default Card