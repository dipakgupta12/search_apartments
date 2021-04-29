import React, { useState } from 'react';
import SearchAndFilter from '../SearchAndFilter';
import Filters from '../Filters';
import './styles.css'

let initialFilters = { minPrice: '', maxPrice: '', minSqm: '', maxSqm: '',  bedrooms: ''};

function Listing() {
  const [filterStates, setFilterStates] = useState(initialFilters);
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);

  
  const onFiltersClick = () => {
    if (openFilters) {
      setFilterStates(initialFilters);
    }
    setOpenFilters(!openFilters)
  }

  const onSaveClick = () => {
    initialFilters = {...initialFilters, ...filterStates};
    setOpenFilters(false);
  }

  return (
    <div className="listing">
      <SearchAndFilter onFiltersClick={onFiltersClick} openFilters={openFilters} search={search} onSearchChange={(e) => setSearch(e.target.value)} />
      <Filters filterStates={filterStates} onSaveClick={onSaveClick} setFilterStates={setFilterStates} />
    </div>
  )
}

export default Listing;