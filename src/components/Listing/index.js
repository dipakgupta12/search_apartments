import React, { useState } from 'react';
import SearchAndFilter from '../SearchAndFilter';
import Apartments from '../Apartments';
import Filters from '../Filters';
import './styles.css'

const staticData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Appartment',
    bedCount: 1,
    bathCount: 2,
    price: '120.000 $',
    pricePerSqMtr: '2.718 $/m^2',
    sqMtr: '63 m^2',
  },
]

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
      {openFilters ? (
        <Filters filterStates={filterStates} onSaveClick={onSaveClick} setFilterStates={setFilterStates} />
      ) : (
        <Apartments shortedData={staticData} data={staticData} />
      )}
    </div>
  )
}

export default Listing;