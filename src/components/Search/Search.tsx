import React, { useState } from 'react';

interface Props {
  listenToSearch(arg?: any): void;
}

const Search:React.FC<Props> = (props):JSX.Element => {
  const [value, setValue] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();    
    setValue(value);
    props.listenToSearch(value)
    setValue('');
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value);
  }

  return (
      <form onSubmit={handleSearch}>
        <input type="text" value={value} onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
 
  );
}

export default Search;