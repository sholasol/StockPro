import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {

   const [search, setSearch] = useState("");
   const [serverError, setServerError] = useState<string | null>(null);
   const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
        const result = await searchCompanies(search);
        if(typeof result === "string") {
          setServerError(result);
        }else if(Array.isArray(result.data)) {
          setSearchResult(result.data);
        }
        console.log(searchResult);
    };

    const onPortfolioCreate = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log(e);
    }

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList onPortfolioCreate={onPortfolioCreate} searchResults={searchResult}/>
    </div>
  );
}

export default App;
