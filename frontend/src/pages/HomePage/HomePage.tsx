import React from 'react'
import stock from '../../assets/stock.jpg'
import './home.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

interface Props  {}

const HomePage = (props: Props) => {
  return (
    <>
    <Header/>
    <div className="container">
      <div className='row mt-5'>
      <div className="col-md-5 desc">
          <h1>Find a Company</h1>
          <h2>That fits your investment</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio 
            commodi mollitia neque dolor blanditiis maxime? Aspernatur recusandae error, illum consectetur facere distinctio veniam magni!
            </p>
      </div>
      <div className="col-md-7 hImg">
        <img src={stock} alt="home-page" className='homeImg'/>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Find a stock</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn ri-funds-box-line text-info"> Find More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Subscribe to a stock</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn ri-stock-line text-primary"> Subscribe</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add to Portfolio</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn ri-money-dollar-circle-line text-success"> Add Portfolio</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default HomePage