
import React from "react";
import Person from "./Person";

const PersonForm = (props) => {
    return(
        <div className="input">
            <form>
                <div>
                    name: <input value={props.newName} onChange={props.handleNameChange}/>
                </div>
                <div>
                    number: <input value={props.newNumber} onChange={props.handleNumberChange}/>  
                </div>
                <div>
                <button type="submit" onClick={props.handleSubmit}>add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm;