import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormContainer, Button, Input, NameLabel } from './Form.styled';
import { v4 as uuidv4 } from 'uuid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number, id: uuidv4() };
    this.reset();
    if (!this.props.onAddContact(newContact, name)) {
      return;
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <FormContainer onSubmit={this.handleSubmitContact}>
          <label>
            <NameLabel>Name</NameLabel>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            <NameLabel>Namber</NameLabel>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
