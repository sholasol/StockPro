import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tile from '../../components/Tile/Tile';
import Spinner from '../../components/Spinners/Spinner';
import CompanyDashboard from '../../components/CompanyDashboard/CompanyDashboard';
import CompFinder from '../../components/CompFinder/CompFinder';
import { useAuth } from '../../Context/useAuth';

type Props = {}

const CompanyPage = (props: Props) => {
  const {user} = useAuth();

  let {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit =async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])
  return (
    <>
    {
      company ? (
        <>
          <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

      <ul className="navbar-nav flex-row d-md-none">
        <li className="nav-item text-nowrap">
          <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
            ttt
          </button>
        </li>
        <li className="nav-item text-nowrap">
          <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            ttttt
          </button>
        </li>
      </ul>

      <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
      </div>

  </header>

  <div className="container-fluid">

    <div className="row">
      <Sidebar/>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Welcome, {user?.userName}</h1>
        </div>
      <CompanyDashboard ticker={ticker!}>
         <div className='row mb-5'>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
         </div>
        <CompFinder ticker={company.symbol} />
        <p className="mb-2">
              {company.description}
            </p>
       </CompanyDashboard>
      </main>
    </div>
  </div>
        </>
      ) 
      : 
      (
        <Spinner />
      )
    }

  

    </>
  )
}

export default CompanyPage