import React, { useEffect, useState } from 'react';
import SearchAndFilter from '../SearchAndFilter';
import Apartments from '../Apartments';
import Filters from '../Filters';
import { getApartments } from '../../services/api';
import './styles.css'

let initialFilters = { minPrice: '', maxPrice: '', minSqm: '', maxSqm: '',  bedrooms: ''};

function Listing() {
  const [filterStates, setFilterStates] = useState(initialFilters);
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    async function fetchApartments() {
      const data  = await getApartments(initialFilters);
      setAppartments(data);
    }
    if (!openFilters) {
      fetchApartments();
    }
  }, [openFilters]);

  
  const onFiltersClick = () => {
    if (openFilters) {
      setFilterStates(initialFilters);
    }
    setOpenFilters(!openFilters)
  }

  const onSaveClick = async () => {
    initialFilters = {...initialFilters, ...filterStates};
    setOpenFilters(false);
  }

  return (
    <div className="listing">
      <SearchAndFilter onFiltersClick={onFiltersClick} openFilters={openFilters} search={search} onSearchChange={(e) => setSearch(e.target.value)} />
      {openFilters ? (
        <Filters filterStates={filterStates} onSaveClick={onSaveClick} setFilterStates={setFilterStates} />
      ) : (
        <Apartments data={appartments} />
      )}
    </div>
  )
}

export default Listing;