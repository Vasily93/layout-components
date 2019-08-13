import React from 'react';
import PropTypes from 'prop-types';

function PhoneBook({ name, phone, relation }) {
  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Phone:</dt>
      <dd>{phone}</dd>

      <dt>Relation:</dt>
      <dd>{relation}</dd>
    </dl>
  );
}

PhoneBook.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  relation: PropTypes.string
};

export default PhoneBook;
