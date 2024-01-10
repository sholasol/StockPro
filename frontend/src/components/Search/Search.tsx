import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import fin from '../../assets/fin.jpg'
import './search.css';

interface Props  {
    onSearchSubmit: (e: SyntheticEvent)=> void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;

}

const Search: React.FC<Props> = ({
  onSearchSubmit, 
  search, 
  handleSearchChange
}: Props) : JSX.Element => {

   

  return (
    <div className="hero-section">
        <div className="row hero-section">
            <div className="col-md-6">
            <h1>Find a Company</h1>
          <h1>That fits your life</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio 
            commodi mollitia neque dolor blanditiis maxime? Aspernatur recusandae error, illum consectetur facere distinctio veniam magni!
            </p>
            <form onSubmit={onSearchSubmit}>
                <div className="search">
              <i className="ri-file-search-line"></i>
              <input type="text" 
              value={search}
              onChange={(e) => handleSearchChange(e)}
            className='form-control'
            placeholder='Find a company' />
            </div>
            </form>
        </div>
        <div className="col-md-6 hero-img">
            <img src={fin} alt="hero img" className='heroImg'/>
        </div>
        </div>
    </div>
  )
}

export default Search