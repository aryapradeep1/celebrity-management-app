import React from "react";

const HomePage = () => {
  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          Celebrity Meet & Greet Registration System
        </h1>
        <p className="lead mt-3">
          A MERN Stack application for managing celebrity event registrations,
          ticket bookings, and lounge allocations.
        </p>
      </div>

      <div className="row">

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="card-title text-primary">About the System</h3>
              <p className="card-text mt-3">
                The Celebrity Meet & Greet Registration System is a web-based
                application developed using the MERN Stack (MongoDB,
                Express.js, React.js, and Node.js). It helps event organizers
                manage attendee registrations, ticket bookings, and lounge
                allocations through a centralized platform.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="card-title text-success">Key Features</h3>

              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Attendee Registration</li>
                <li className="list-group-item">Ticket Booking</li>
                <li className="list-group-item">Lounge Allocation</li>
                <li className="list-group-item">View Attendee Details</li>
                <li className="list-group-item">View Ticket Details</li>
                <li className="list-group-item">View Lounge Details</li>
              </ul>

            </div>
          </div>
        </div>

      </div>

      <div className="row mt-4">

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow border-primary">
            <div className="card-body">
              <h1>👤</h1>
              <h5>Attendee Management</h5>
              <p>Register and manage attendee information.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow border-success">
            <div className="card-body">
              <h1>🎟️</h1>
              <h5>Ticket Booking</h5>
              <p>Book and manage celebrity meet & greet tickets.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow border-warning">
            <div className="card-body">
              <h1>🏢</h1>
              <h5>Lounge Allocation</h5>
              <p>Allocate lounges for celebrity interaction sessions.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="alert alert-info mt-5 text-center">
        <h4>Project Objective</h4>
        <p className="mb-0">
          This application minimizes manual paperwork by providing a centralized
          platform to register attendees, allocate tickets, assign interaction
          lounges, and efficiently manage all event records.
        </p>
      </div>

    </div>
  );
};

export default HomePage;