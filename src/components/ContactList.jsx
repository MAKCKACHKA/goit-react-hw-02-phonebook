import React, { Component } from 'react';
import { List, Item, DelButton } from './Styles';

class ContactList extends Component {
  handleDelete = id => {
    this.props.deleteContact(id);
  };

  render() {
    return (
      <List>
        {this.props.contacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number + '  '}
            <DelButton
              type="button"
              onClick={() => this.handleDelete(contact.id)}
            >
              Delete
            </DelButton>
          </Item>
        ))}
      </List>
    );
  }
}

export default ContactList;
