import React from "react";

const ViewTicket = () => {

    const data = [
        {
            ticketId: "T001",
            registrationId: "REG001",
            celebrityName: "Mohanlal",
            ticketCategory: "VIP",
            numberOfGuests: 2,
            preferredTimeSlot: "10:00 AM - 11:00 AM",
            paymentAmount: "₹5000",
            paymentStatus: "Paid"
        },
        {
            ticketId: "T002",
            registrationId: "REG002",
            celebrityName: "Mammootty",
            ticketCategory: "Gold",
            numberOfGuests: 3,
            preferredTimeSlot: "11:30 AM - 12:30 PM",
            paymentAmount: "₹3000",
            paymentStatus: "Paid"
        },
        {
            ticketId: "T003",
            registrationId: "REG003",
            celebrityName: "Prithviraj",
            ticketCategory: "Silver",
            numberOfGuests: 1,
            preferredTimeSlot: "02:00 PM - 03:00 PM",
            paymentAmount: "₹1500",
            paymentStatus: "Pending"
        },
        {
            ticketId: "T004",
            registrationId: "REG004",
            celebrityName: "Dulquer Salmaan",
            ticketCategory: "VIP",
            numberOfGuests: 4,
            preferredTimeSlot: "03:30 PM - 04:30 PM",
            paymentAmount: "₹8000",
            paymentStatus: "Paid"
        },
        {
            ticketId: "T005",
            registrationId: "REG005",
            celebrityName: "Fahadh Faasil",
            ticketCategory: "Gold",
            numberOfGuests: 2,
            preferredTimeSlot: "05:00 PM - 06:00 PM",
            paymentAmount: "₹4000",
            paymentStatus: "Pending"
        }
    ];

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
                                    <td>{value.ticketId}</td>
                                    <td>{value.registrationId}</td>
                                    <td>{value.celebrityName}</td>
                                    <td>{value.ticketCategory}</td>
                                    <td>{value.numberOfGuests}</td>
                                    <td>{value.preferredTimeSlot}</td>
                                    <td>{value.paymentAmount}</td>
                                    <td>{value.paymentStatus}</td>
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