import { Component } from 'react';
import { Form, Button, Group, Label, Input } from './Styles';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      this.props.createContact({
        name,
        number,
      });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Group>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Label>Name</Label>
        </Group>
        <Group>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <Label>Number </Label>
        </Group>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
