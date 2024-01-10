import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props  {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
   <div key={id} id={id} className="card col-md-10 offset-md-1 mb-2">
    <div className="card-header">
        {searchResult.name}
    </div>
    <div className="card-body">
        <h5 className="card-title">{searchResult.name}</h5>
        <h2>Currency: {searchResult.currency}</h2>
        <p className="card-text">{searchResult.symbol}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>

  )
}

export default Card