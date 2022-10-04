import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';

import { Box } from './Box';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contact);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = newContact => {
    this.setState(prev => {
      return { contacts: [...prev.contacts, newContact] };
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    const namesArray = this.state.contacts.map(contact => contact.name);

    return (
      <Box p={4}>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} namesArray={namesArray} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Box>
    );
  }
}
