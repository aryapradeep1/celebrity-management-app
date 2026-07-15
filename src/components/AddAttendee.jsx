import React from 'react'

const AddAttendee = () => {
  return (
    <div>

<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12 text-center">
                        <h1>Enter Attendee Details Here!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Attendee Name</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Others</option>
                                </select>

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Date of birth</label>
                                <input type="date" className="form-control" name=""  />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" name=""   />

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">E-Mail</label>
                                <input type="text" className="form-control" name="" placeholder="abc@mail.com"  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">City</label>
                                <input type="text" className="form-control" name=""/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" >Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddAttendee