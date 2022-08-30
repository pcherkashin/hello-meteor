import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {

    const contacts = useTracker(() => { 
    return ContactsCollection.find({}).fetch();

});

return (
        <>
        <div>
            <h2>List of Contacts</h2>
            <ul>
            {contacts.map((contact) => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
            </ul>
        </div>
        </>
    )
};