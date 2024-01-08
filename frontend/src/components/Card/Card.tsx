import React from 'react'
import { CompanySearch } from '../../company';

interface Props  {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : JSX.Element => {
  return (
   <div className="card col-md-6 offset-md-3 mb-2">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">{searchResult.name}</h5>
        <h2>Currency: {searchResult.currency}</h2>
        <p className="card-text">{searchResult.symbol}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>

  )
}

export default Card