import React from 'react';
import PhoneBook from './PhoneBook';
import Images from './Images';
import Image1 from './lion.jpg';
import Image2 from './eagle.jpg';
import Image3 from './bird.jpg';
import Button from './Button';

export default function App() {
  return (
    <>
    <Images imgURL={Image1} />
     <h3><PhoneBook name='Trifon' phone={5039546576} relation='brother'/></h3>
     <Button button='Call Trifon' />
     <Images imgURL={Image2} />
     <h3><PhoneBook name='Tichon' phone={5039544893} relation='brother'/></h3>
     <Button button='Call Tichon' />
     <Images imgURL={Image3} />
     <h3><PhoneBook name='Elena' phone={5039544973} relation='mom'/></h3>
     <Button button='Call Elena' />
    </>
  );
}
