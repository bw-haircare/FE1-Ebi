import React , {useState} from "react";

export default function StylistSignUp(props) {
    // const { submitStylist } = props;
    const [newStylist, setNewStylist] = useState({name:" ", number:" ", email:" "})

    //change event"
    function handleChange(event) {
        const updatedStylist = {...newStylist, [event.target.name]: event.target.value};
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedStylist
        );
        setNewStylist(updatedStylist);
    }

    //submit event
    function handleSubmit(event) {
        event.preventDefault();
        // submitStylist(newStylist)
        setNewStylist({name:" ", number:" ", email:" "})

        console.log('name', newStylist);
    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* Name */}
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Please enter your name"
                    value={newStylist.name}
                    onChange={handleChange}
                />
            </div>
            {/* Phone Number */}
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    
                    className="input"
                    name="number"
                    placeholder="Please enter your number"
                    value={newStylist.number}
                    onChange={handleChange}
                />
            </div>
            {/* Email */}
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Please enter your email"
                    value={newStylist.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="add-button">Register</button>
        </form>
    )

};