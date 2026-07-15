import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewAttendee = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:7500/view-all-attendees")
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

                    <h2 className="text-center mb-4">View Attendees</h2>

                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Registration ID</th>
                                <th>Attendee Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.RegistrationID}</td>
                                    <td>{value.AttendeeName}</td>
                                    <td>{value.Age}</td>
                                    <td>{value.Gender}</td>
                                    <td>{value.DateofBirth}</td>
                                    <td>{value.MobileNumber}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.City}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default ViewAttendee;