import React from 'react'

const AddLounge = () => {
  return (
    <div>

<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12 text-center">
                        <h1>Book your Lounge!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Allocation Id</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Lounge Number</label>
                                <input type="text" className="form-control" name=""  />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Seat Number</label>
                                <input type="text" className="form-control" name=""  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Check in Time</label>
                                <input type="text" className="form-control" name=""  />
                            </div>
                            
                            
                            
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Meet Duration</label>
                                <input type="text" className="form-control" name=""   />

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Staff coordinator</label>
                                <input type="text" className="form-control" name=""   />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Remarks</label>
                                <input type="text" className="form-control" name=""/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" >Book Lounge</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddLounge