import React from 'react';
import PropTypes from 'prop-types';

const compare = (n, m) => parseInt(n, 10) === parseInt(m, 10);

const RadioGroup = ({ label, options, selected, onSelect, optionsStyle }) => (
  <div className="radio-group">
    <div className="radio-group-label">{label}</div>
    <div onChange={event => onSelect(event.target.value)}>
      {options.map(option => (
        <label
          className={`
            buttn
            ${optionsStyle} 
            ${compare(selected, option.id) ? 'buttn-secondary' : 'buttn-primary'}
          `}
          htmlFor={option.name}
          key={option.id}
        >
          <input
            type="radio"
            name={option.name}
            id={option.name}
            value={option.id}
            checked={compare(selected, option.id)}
          />
          {option.name}
        </label>
      ))}
    </div>
  </div>
);

RadioGroup.defaultProps = {
  selected: null,
  optionsStyle: 'circle'
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  optionsStyle: PropTypes.oneOf(['pill', 'circle']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default RadioGroup;
