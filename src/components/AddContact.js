import React from "react";



class AddContact extends React.Component {
    render (){
        return(
            <div className= "ui main">
            <h2> ADD CONTACT</h2>
            <form className="ui form">
                <div className="field">
                    <label>name</label>
                    <input type= 'text' name="name" placeholder="name" />
                </div>
                <div className="field">
                    <label>email</label>
                    <input type= 'text' name="email" placeholder="email" />
                </div>
                <button className="ui button blue"> add </button>


            </form>

            </div>
        );
    }

}
export default AddContact;