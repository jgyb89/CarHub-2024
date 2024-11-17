'use client';

import { useState } from "react";


import { SearchManufacturer } from "./";


export const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {

    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div>
            <div className="search__item">
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />

            </div>
        </div>
    </form>
  )
}

export default SearchBar