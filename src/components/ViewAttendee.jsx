import React from "react";

const ViewAttendee = () => {

    const data = [
        {
            registrationId: "REG001",
            attendeeName: "Arya A",
            age: 22,
            gender: "Female",
            dateOfBirth: "10-05-2004",
            mobileNumber: "9876543210",
            email: "arya@gmail.com",
            city: "Kannur"
        },
        {
            registrationId: "REG002",
            attendeeName: "Ananthu Unnitthan",
            age: 23,
            gender: "Male",
            dateOfBirth: "15-08-2003",
            mobileNumber: "9876543211",
            email: "ananthu@gmail.com",
            city: "Thrissur"
        },
        {
            registrationId: "REG003",
            attendeeName: "Sivaganga S Nair",
            age: 22,
            gender: "Female",
            dateOfBirth: "22-03-2004",
            mobileNumber: "9876543212",
            email: "sivaganga@gmail.com",
            city: "Kochi"
        },
        {
            registrationId: "REG004",
            attendeeName: "Rahul",
            age: 24,
            gender: "Male",
            dateOfBirth: "18-07-2002",
            mobileNumber: "9876543213",
            email: "rahul@gmail.com",
            city: "Calicut"
        },
        {
            registrationId: "REG005",
            attendeeName: "Anjali",
            age: 21,
            gender: "Female",
            dateOfBirth: "12-01-2005",
            mobileNumber: "9876543214",
            email: "anjali@gmail.com",
            city: "Palakkad"
        }
    ];

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
                                    <td>{value.registrationId}</td>
                                    <td>{value.attendeeName}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.dateOfBirth}</td>
                                    <td>{value.mobileNumber}</td>
                                    <td>{value.email}</td>
                                    <td>{value.city}</td>
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