import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
     symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioCreate}>
            <input readOnly={true} hidden={true} value={symbol} />
            <button type='submit' className='btn btn-success btn-sm'>Add</button>
        </form>
    </div>
  )
}

export default AddPortfolio