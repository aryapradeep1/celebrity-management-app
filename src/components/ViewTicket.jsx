import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTicket = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        axios
            .post("http://localhost:7500/view-all-tickets")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Delete (Frontend Only)
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            setData(data.filter((item) => item._id !== id));
        }
    };

    // Edit
    const handleEdit = (item) => {
        setEditId(item._id);
        setEditData({ ...item });
    };

    // Save
    const handleSave = () => {
        const updatedData = data.map((item) =>
            item._id === editId ? editData : item
        );

        setData(updatedData);
        setEditId(null);
    };

    // Search
    const filteredData = data.filter((item) =>
        item.TicketID.toLowerCase().includes(search.toLowerCase()) ||
        item.RegistrationID.toLowerCase().includes(search.toLowerCase()) ||
        item.CelebrityName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">View Tickets</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Ticket ID, Registration ID or Celebrity Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

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
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredData.map((value) => (

                        <tr key={value._id}>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.TicketID}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                TicketID: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.TicketID
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.RegistrationID}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                RegistrationID: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.RegistrationID
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.CelebrityName}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                CelebrityName: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.CelebrityName
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.TicketCategory}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                TicketCategory: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.TicketCategory
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.NumberofGuests}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                NumberofGuests: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.NumberofGuests
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.PreferredTimeSlot}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                PreferredTimeSlot: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.PreferredTimeSlot
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.PaymentAmount}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                PaymentAmount: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.PaymentAmount
                                }
                            </td>

                            <td>
                                {editId === value._id ?
                                    <input
                                        className="form-control"
                                        value={editData.PaymentStatus}
                                        onChange={(e) =>
                                            setEditData({
                                                ...editData,
                                                PaymentStatus: e.target.value
                                            })
                                        }
                                    />
                                    :
                                    value.PaymentStatus
                                }
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

export default ViewTicket;