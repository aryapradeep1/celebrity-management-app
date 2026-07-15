import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTicket = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:7500/view-all-tickets")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">

                    <h2 className="text-center mb-4">View Tickets</h2>

                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Ticket ID</th>
                                <th>Registration ID</th>
                                <th>Celebrity Name</th>
                                <th>Ticket Category</th>
                                <th>Number of Guests</th>
                                <th>Preferred Time Slot</th>
                                <th>Payment Amount</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.TicketID}</td>
                                    <td>{value.RegistrationID}</td>
                                    <td>{value.CelebrityName}</td>
                                    <td>{value.TicketCategory}</td>
                                    <td>{value.NumberofGuests}</td>
                                    <td>{value.PreferredTimeSlot}</td>
                                    <td>{value.PaymentAmount}</td>
                                    <td>{value.PaymentStatus}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default ViewTicket;