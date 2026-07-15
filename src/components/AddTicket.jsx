import React from 'react'

const AddTicket = () => {
    const [input, changeInput] = useState(
        {
            TicketID: "",
            RegistrationID: "",
            CelebrityName: "",
            TicketCategory: "",
            NumberofGuests: "",
            PreferredTimeSlot: "",
            PaymentAmount: "",
            PaymentStatus: ""
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
                        <h1>Ticket Details Here!</h1>
                        <div className="row g-4 mt-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Ticket Id</label>
                                <input type="text" className="form-control" name="TicketID" value={input.TicketID} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Registration Id</label>
                                <input type="text" className="form-control" name="RegistrationID" value={input.RegistrationID} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Celebrity Name</label>
                                <input type="text" className="form-control" name="CelebrityName" value={input.CelebrityName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Ticket category</label>
                                <select name="TicketCategory" id="" className="form-select" value={input.TicketCategory} onChange={inputHandler}>
                                    <option value="">Premium</option>
                                    <option value="">Semi premium</option>
                                    <option value="">Normal</option>
                                </select>

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Number of guests</label>
                                <input type="text" className="form-control" name="NumberofGuests" value={input.NumberofGuests} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Preferred Time Slot</label>
                                <input type="text" className="form-control" name="PreferredTimeSlot" value={input.PreferredTimeSlot} onChange={inputHandler}  />

                            </div>

                            
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Payment Amount</label>
                                <input type="text" className="form-control" name="PaymentAmount" placeholder="abc@mail.com" value={input.PaymentAmount} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Payment Status</label>
                                <input type="text" className="form-control" name="PaymentStatus" value={input.PaymentStatus} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue} >Get Ticket</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default AddTicket