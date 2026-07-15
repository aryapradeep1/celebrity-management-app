import React from "react";

const ViewLongue = () => {

    const data = [
        {
            loungeId: "L001",
            loungeName: "Royal Lounge",
            celebrityName: "Mohanlal",
            loungeCategory: "VIP",
            seatingCapacity: 50,
            availableTimeSlot: "10:00 AM - 11:00 AM",
            entryFee: "₹5000",
            loungeStatus: "Available"
        },
        {
            loungeId: "L002",
            loungeName: "Golden Lounge",
            celebrityName: "Mammootty",
            loungeCategory: "Premium",
            seatingCapacity: 40,
            availableTimeSlot: "11:30 AM - 12:30 PM",
            entryFee: "₹4000",
            loungeStatus: "Booked"
        },
        {
            loungeId: "L003",
            loungeName: "Silver Lounge",
            celebrityName: "Prithviraj",
            loungeCategory: "Standard",
            seatingCapacity: 30,
            availableTimeSlot: "02:00 PM - 03:00 PM",
            entryFee: "₹2500",
            loungeStatus: "Available"
        },
        {
            loungeId: "L004",
            loungeName: "Diamond Lounge",
            celebrityName: "Dulquer Salmaan",
            loungeCategory: "VIP",
            seatingCapacity: 60,
            availableTimeSlot: "03:30 PM - 04:30 PM",
            entryFee: "₹7000",
            loungeStatus: "Booked"
        },
        {
            loungeId: "L005",
            loungeName: "Star Lounge",
            celebrityName: "Fahadh Faasil",
            loungeCategory: "Premium",
            seatingCapacity: 35,
            availableTimeSlot: "05:00 PM - 06:00 PM",
            entryFee: "₹3500",
            loungeStatus: "Available"
        }
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">

                    <h2 className="text-center mb-4">View Lounge</h2>

                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Lounge ID</th>
                                <th>Lounge Name</th>
                                <th>Celebrity Name</th>
                                <th>Lounge Category</th>
                                <th>Seating Capacity</th>
                                <th>Available Time Slot</th>
                                <th>Entry Fee</th>
                                <th>Lounge Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.loungeId}</td>
                                    <td>{value.loungeName}</td>
                                    <td>{value.celebrityName}</td>
                                    <td>{value.loungeCategory}</td>
                                    <td>{value.seatingCapacity}</td>
                                    <td>{value.availableTimeSlot}</td>
                                    <td>{value.entryFee}</td>
                                    <td>{value.loungeStatus}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default ViewLongue;