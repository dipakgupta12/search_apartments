import React, { useState } from 'react';
import SearchAndFilter from '../SearchAndFilter';
import './styles.css'

function Listing() {
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);

  
  return (
    <div className="listing">
      <SearchAndFilter openFilters={openFilters} search={search} onSearchChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Listing;