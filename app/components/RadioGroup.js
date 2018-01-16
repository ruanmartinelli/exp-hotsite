import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ label, options, selected, onSelect }) => (
  <div>
    {label}
    <div onChange={event => onSelect(event.target.value)}>
      {options.map(option => (
        <label htmlFor={option.name} key={option.id}>
          <input
            type="radio"
            name={option.name}
            value={option.id}
            checked={selected === (`${option.id}`)}
          />
          {option.name}
        </label>
      ))}
    </div>
  </div>
);

RadioGroup.defaultProps = {
  selected: null
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default RadioGroup;
