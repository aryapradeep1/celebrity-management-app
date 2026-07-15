import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewLongue = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:7500/view-all-lounges")
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

                    <h2 className="text-center mb-4">View Lounge</h2>

                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Allocation ID</th>
                                <th>Registration ID</th>
                                <th>Lounge Number</th>
                                <th>Seat Number</th>
                                <th>Check-in Time</th>
                                <th>Meet Duration</th>
                                <th>Staff Coordinator</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.AllocationID}</td>
                                    <td>{value.RegistrationID}</td>
                                    <td>{value.LoungeNumber}</td>
                                    <td>{value.SeatNumber}</td>
                                    <td>{value.CheckinTime}</td>
                                    <td>{value.MeetDuration}</td>
                                    <td>{value.StaffCoordinator}</td>
                                    <td>{value.Remarks}</td>
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