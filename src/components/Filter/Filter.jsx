import PropTypes from 'prop-types';
import { SpanName, LabelContainer, Input } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <LabelContainer>
      <SpanName>Find contacts by name</SpanName>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </LabelContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
