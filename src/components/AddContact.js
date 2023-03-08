import React from "react";



class AddContact extends React.Component {
    state = {
        name: '',
        email: '',

    };
    add = (e) =>{
        e.preventDefault();
        if( this.state.name === "" || this.state.email === ''){
            alert('all the fields are mandatory!');
            return 

        }
        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''});
        
        
    };
    render (){
        return(
            <div className= "ui main">
            <h2> ADD CONTACT</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>name</label>
                    <input type= 'text' name="name" value={this.state.value} placeholder="name" onChange={ (e)=> this.setState({name:e.target.value})} />
                </div>
                <div className="field">
                    <label>email</label>
                    <input type= 'text' name="email" value={this.state.value}placeholder="email" onChange={(e)=> this.setState({email:e.target.value})} />
                </div>
                <button className="ui button blue"> add </button>


            </form>

            </div>
        );
    }

}
export default AddContact;