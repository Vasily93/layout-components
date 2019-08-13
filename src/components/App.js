import React from 'react';
import PhoneBook from './PhoneBook';

export default function App() {
  return (
    <>
     <h3><PhoneBook name='Trifon' phone={5039546576} relation='brother'/></h3>
     <h3><PhoneBook name='Tichon' phone={5039544893} relation='brother'/></h3>
     <h3><PhoneBook name='Elena' phone={5039544973} relation='mom'/></h3>
    </>
  );
}
