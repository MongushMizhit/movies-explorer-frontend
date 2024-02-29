import React from 'react';

const FilterCheckbox = () => {
  return (
    <section className='switch__filter'>
        <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
    </label>
        <p className='switch__title'>Короткометражки</p>
    </section>
    
  );
};

export default FilterCheckbox;