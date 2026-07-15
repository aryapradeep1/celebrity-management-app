import axios from 'axios'
import React, { useState } from 'react'

const AddAttendee = () => {
    const [input, changeInput] = useState(
        {
            RegistrationID: "",
            AttendeeName: "",
            Age: "",
            Gender: "",
            DateofBirth: "",
            MobileNumber: "",
            Email: "",
            City: ""
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:7500/add-attendee", input).then(
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
                        <h1>Enter Attendee Details Here!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name="RegistrationID" value={input.RegistrationID} onChange={inputHandler}  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Attendee Name</label>
                                <input type="text" className="form-control" name="AttendeeName" value={input.AttendeeName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name="Age" value={input.Age} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="Gender" id="" className="form-select" value={input.Gender} onChange={inputHandler}>
                                    <option value="">Select Gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Others</option>
                                </select>

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Date of birth</label>
                                <input type="date" className="form-control" name="DateofBirth" value={input.DateofBirth} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" name="MobileNumber"  value={input.MobileNumber} onChange={inputHandler} />

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">E-Mail</label>
                                <input type="text" className="form-control" name="Email" placeholder="abc@mail.com" value={input.Email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">City</label>
                                <input type="text" className="form-control" name="City" value={input.City} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddAttendee