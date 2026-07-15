import React from "react";

const NaviBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <a className="navbar-brand fw-bold" href="#">
            Celebrity Meet & Greet
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link active" href="home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/add">
                  Add Attendee
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="view">
                  View Attendee
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="add_ticket">
                  Add Ticket
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="view_ticket">
                  View Ticket
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="add_lounge">
                  Add Lounge
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="view_lounge">
                  View Lounge
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NaviBar;