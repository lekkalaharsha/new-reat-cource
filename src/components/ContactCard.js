import React from "react";

import academic from '../images/academics-01-770x480.jpg'

const CardContact=(props)=>{
    const{id,name,email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={academic} alt='user'></img>
                <div className="content">
                    <div className="header">{name}</div>
                    <div > {email}</div>
                    
                </div>
                <i className="trash alternate outline icon" style={{color:'red',marginTop:'7px'}}></i>
            </div>
    );



};
export default CardContact;