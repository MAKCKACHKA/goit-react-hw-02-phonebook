import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
