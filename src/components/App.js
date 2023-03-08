import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,  Switch,Route } from 'react-router-dom';

import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';









function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    setContacts([...contacts,{id:uuidv4(),...contact}]);

    
  };
  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !==id;

    });
    setContacts (newContactList);


  };
  useEffect(()=> {
    const retriveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
    },[]);

  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className='ui container'>

      <Router>
        <Header/>
        
        
        
        <Route path="/" component={AddContact} />
        <Route path='/add' component={ContactList} />
        
        
        
        
        
      </Router>
      </div>
  );
}

export default App;
