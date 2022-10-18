import { GlobalStyle } from '../styles/GlobalStyle';
import React, { Component } from 'react';

import { Box } from './Box';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem(LS_KEY);
    const parseContacts = JSON.parse(contact);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  addContact = (newContact, name) => {
    const namesArray = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (namesArray.includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

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

  changeFilter = filter => this.setState({ filter });

  render() {
    const { filter } = this.state;

    return (
      <Box p={4}>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <Contacts
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Box>
    );
  }
}
