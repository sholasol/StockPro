import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Company Overview</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="company-profile" className="nav-link d-flex align-items-center gap-2 active" aria-current="page">
                <i className="ri-macbook-line"></i>
                Company Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="income-statement" className="nav-link d-flex align-items-center gap-2">
                <i className="ri-file-list-3-line"></i>
                Income Statement
              </Link>
            </li>
            <li className="nav-item">
              <Link to="balance-sheet" className="nav-link d-flex align-items-center gap-2">
                <i className="ri-file-list-3-line"></i>
                Balance Sheet
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cashflow-statement" className="nav-link d-flex align-items-center gap-2">
                <i className="ri-file-list-3-line"></i>
                Cashflow Statement
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <i className="ri-file-list-3-line"></i>
                Orders
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar