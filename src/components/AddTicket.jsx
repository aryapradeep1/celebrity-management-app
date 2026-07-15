import React from 'react'

const AddTicket = () => {
  return (
    <div>

<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12 text-center">
                        <h1>Ticket Details Here!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Ticket Id</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Celebrity Name</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Ticket category</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Premium</option>
                                    <option value="">Semi premium</option>
                                    <option value="">Others</option>
                                </select>

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Number of guests</label>
                                <input type="text" className="form-control" name=""  />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Preferred Time Slot</label>
                                <input type="text" className="form-control" name=""   />

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Payment Amount</label>
                                <input type="text" className="form-control" name="" placeholder="abc@mail.com"  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Payment Status</label>
                                <input type="text" className="form-control" name=""/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" >Get Ticket</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default AddTicket