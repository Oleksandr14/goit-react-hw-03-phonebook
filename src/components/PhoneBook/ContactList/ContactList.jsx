import PropTypes from 'prop-types';

import styles from './contactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
const elements = contacts.map(({ id, name, number }) => (
    <li key={id} > {name}: {number}
        <button className={styles.btn} onClick={() => deleteContact(id)}>Delete</button>
    </li>
));
    return (
        <ul>{elements}</ul>
    )
}

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
}

export default ContactList;