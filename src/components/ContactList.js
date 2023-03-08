import React  from "react";
import CardContact from "./ContactCard";
 const ContactList = (props) =>{
    const deleteContactHandler = (id)=>{
        props.getContactId (id);

    };
    
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <CardContact contact={contact} clickHander= {deleteContactHandler} key ={contact.id}></CardContact>
        );

    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}




export default ContactList;