import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

//todo: add form name, email, image URL

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />    
  </div>
);
