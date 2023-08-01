import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  // App func
  createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          // contacts={contacts}
          name={name}
          // state={this.state}
          createContact={this.createContact}
        ></ContactForm>
        <h2>Contacts</h2>

        {/* <Filter ... /> */}
        <ContactList contacts={contacts} />

        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}
      </>
    );
  }
}
