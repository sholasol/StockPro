import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import ListPortfolio from '../../components/Portfolio/PortfolioList/ListPortfolio';
import Header from '../../components/Header/Header';

type Props = {}

const SearchPage = (props: Props) => {

  const [search, setSearch] = useState("");
   const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
   const [serverError, setServerError] = useState<string | null>(null);
   const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   };


    const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

    const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };



  return (
    <>
    <Header/>
        <Search 
      onSearchSubmit={onSearchSubmit} 
      search={search} 
      handleSearchChange={handleSearchChange}/>
      <div className="row">
        <div className="col-md-8">
          <CardList 
          onPortfolioCreate={onPortfolioCreate} 
          searchResults={searchResult}/>
        </div>
        <div className="col-md-4">
          <ListPortfolio 
          portfolioValues={portfolioValues}
          onPortfolioDelete={onPortfolioDelete}
          />
        </div>
        
      </div>
      
      
      {serverError && <h1>{serverError}</h1>}
    </>
  )
}

export default SearchPage