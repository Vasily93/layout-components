import React from 'react';
import PropTypes from 'prop-types';

function PhoneBook({ name, phone, relation }) {
  return (
    <dl>
      <dt>Name: {name}</dt>

      <dt>Phone: {phone}</dt>
      
      <dt>Relation: {relation}</dt>
    </dl>
  );
}

PhoneBook.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  relation: PropTypes.string
};

export default PhoneBook;
