import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewAttendee = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        axios
            .post("http://localhost:7500/view-all-attendees")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Delete (Frontend Only)
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            setData(data.filter((item) => item._id !== id));
        }
    };

    // Edit Button
    const handleEdit = (item) => {
        setEditId(item._id);
        setEditData({ ...item });
    };

    // Save Button
    const handleSave = () => {
        const updatedData = data.map((item) =>
            item._id === editId ? editData : item
        );

        setData(updatedData);
        setEditId(null);
    };

    // Search
    const filteredData = data.filter((item) =>
        item.AttendeeName.toLowerCase().includes(search.toLowerCase()) ||
        item.RegistrationID.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">View Attendees</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Registration ID or Attendee Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

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
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredData.map((value) => (

                        <tr key={value._id}>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.RegistrationID}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                RegistrationID: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.RegistrationID
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.AttendeeName}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                AttendeeName: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.AttendeeName
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.Age}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                Age: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.Age
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.Gender}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                Gender: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.Gender
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.DateofBirth}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                DateofBirth: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.DateofBirth
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.MobileNumber}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                MobileNumber: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.MobileNumber
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.Email}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                Email: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.Email
                                )}
                            </td>

                            <td>
                                {editId === value._id ? (
                                    <input
                                        className="form-control"
                                        value={editData.City}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                City: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    value.City
                                )}
                            </td>

                            <td>

                                {editId === value._id ? (
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEdit(value)}
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(value._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default ViewAttendee;