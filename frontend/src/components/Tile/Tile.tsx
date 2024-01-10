import React from 'react'
import './tile.css'

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({title, subTitle}: Props) => {
  return (
    <>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="line-p"></div>
              <div className='icon'>
                <i className="ri-home-office-line btn btn-primary icon-btn fa-2x"></i>
                <p className='stat'>{subTitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Price</h5>
              <div className="line-w"></div>
              <div className='icon'>
                <i className="ri-bank-card-line btn btn-warning icon-btn"></i>
                <h4 className='stat'>40009</h4>
              </div>
            </div>
          </div>
        </div>

         <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">DCF</h5>
              <div className="line-i"></div>
              <div className='icon'>
                <i className="ri-currency-fill btn btn-info icon-btn"></i>
                <h4 className='stat'>40009</h4>
              </div>
            </div>
          </div>
        </div>

         <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sector</h5>
              <div className="line-s"></div>
              <div className='icon'>
                <i className="ri-bank-line btn btn-success icon-btn"></i>
                <h4 className='stat'>40009</h4>
              </div>
            </div>
          </div>
        </div> */}
        </>
  )
}

export default Tile