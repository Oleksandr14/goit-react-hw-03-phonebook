import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Item, Button, Text } from './Contacts.styled';
import { BsEmojiSmile } from 'react-icons/bs';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <Box width={320}>
      <Box as="ul" gridRowGap={10} pt={4}>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <BsEmojiSmile size={14} color="blue" />{' '}
              <Text>
                {name}: {number}
              </Text>
              <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete{' '}
              </Button>
            </Item>
          );
        })}
      </Box>
    </Box>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
