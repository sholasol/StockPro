import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props  {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
    
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <>
        <div className="card col-md-10 offset-md-1 mb-2">
        <div className="card-body">
            <h5 className="card-title">{portfolioValue}</h5>
            <a href="#" className="card-link">Card link</a>
            <DeletePortfolio 
            onPortfolioDelete ={onPortfolioDelete}
            portfolioValue={portfolioValue}
            />
        </div>
        </div>

    </>
  )
}

export default CardPortfolio