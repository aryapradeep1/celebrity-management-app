import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewLongue = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .post("http://localhost:7500/view-all-lounges")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else {
                    setData([]);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (_id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            setData(data.filter((item) => item._id !== _id));
        }
    };

    const handleEdit = (item) => {
        setEditId(item._id);
        setEditData({ ...item });
    };

    const handleSave = () => {
        const updatedData = data.map((item) =>
            item._id === editId ? editData : item
        );

        setData(updatedData);
        setEditId(null);
    };

    const filteredData = data.filter(
        (item) =>
            item.AllocationID?.toLowerCase().includes(search.toLowerCase()) ||
            item.RegistrationID?.toLowerCase().includes(search.toLowerCase()) ||
            item.LoungeNumber?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">View Lounge</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Allocation ID, Registration ID or Lounge Number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

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
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredData.length > 0 ? (
                        filteredData.map((value) => (
                            <tr key={value._id}>

                                <td>
                                    {editId === value._id ? (
                                        <input
                                            className="form-control"
                                            value={editData.AllocationID}
                                            onChange={(e) =>
                                                setEditData({
                                                    ...editData,
                                                    AllocationID: e.target.value
                                                })
                                            }
                                        />
                                    ) : (
                                        value.AllocationID
                                    )}
                                </td>

                                <td>{value.RegistrationID}</td>

                                <td>
                                    {editId === value._id ? (
                                        <input
                                            className="form-control"
                                            value={editData.LoungeNumber}
                                            onChange={(e) =>
                                                setEditData({
                                                    ...editData,
                                                    LoungeNumber: e.target.value
                                                })
                                            }
                                        />
                                    ) : (
                                        value.LoungeNumber
                                    )}
                                </td>

                                <td>{value.SeatNumber}</td>
                                <td>{value.CheckinTime}</td>
                                <td>{value.MeetDuration}</td>
                                <td>{value.StaffCoordinator}</td>

                                <td>
                                    {editId === value._id ? (
                                        <input
                                            className="form-control"
                                            value={editData.Remarks}
                                            onChange={(e) =>
                                                setEditData({
                                                    ...editData,
                                                    Remarks: e.target.value
                                                })
                                            }
                                        />
                                    ) : (
                                        value.Remarks
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center">
                                No lounge records found
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default ViewLongue;