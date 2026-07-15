import axios from 'axios'
import React from 'react'

const AddLounge = () => {
    const [input, changeInput] = useState(
        {
            AllocationID: "",
            RegistrationID: "",
            LoungeNumber: "",
            SeatNumber: "",
            CheckinTime: "",
            MeetDuration: "",
            StaffCoordinator: "",
            Remarks: ""
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("", input).then(
            (response) => {
                console.log(response.data)
                alert("Entry added successfully")
            }
        ).catch(
            (error) => {
                console.log(error.response.data);
                alert(error.response.data.message);
            })
    }
  return (
    <div>

<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12 text-center">
                        <h1>Book your Lounge!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Allocation Id</label>
                                <input type="text" className="form-control" name="AllocationID" value={input.AllocationID} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name="RegistrationID"  value={input.RegistrationID} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Lounge Number</label>
                                <input type="text" className="form-control" name="LoungeNumber"  value={input.LoungeNumber} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Seat Number</label>
                                <input type="text" className="form-control" name="SeatNumber" value={input.SeatNumber} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Check in Time</label>
                                <input type="text" className="form-control" name="CheckinTime"  value={input.CheckinTime} onChange={inputHandler}/>
                            </div>
                            
                            
                            
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Meet Duration</label>
                                <input type="text" className="form-control" name="MeetDuration"   value={input.MeetDuration} onChange={inputHandler}/>

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Staff coordinator</label>
                                <input type="text" className="form-control" name="StaffCoordinator"   value={input.StaffCoordinator} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Remarks</label>
                                <input type="text" className="form-control" name="Remarks" value={input.Remarks} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue}>Book Lounge</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddLounge