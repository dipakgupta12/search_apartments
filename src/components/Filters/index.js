import React from 'react';
import CommonFilter from './CommonFilter';
import BedroomFilter from './BedroomFilter';

function Filters(props) {
  const { filterStates = {} } = props;

  return (
    <div className="mt-4">
      <CommonFilter
        label="Price"
        minFilterName="minPrice"
        maxFilterName="maxPrice"
        minFilterValues={[{ value: '', label: '0$' }, { value: 500, label: '500$' }, { value: 1000, label: '1000$' }, { value: 1500, label: '1500$' }, { value: 2000, label: '2000$' }]}
        maxFilterValues={[{ value: 500, label: '500$' }, { value: 1000, label: '1000$' }, { value: 1500, label: '1500$' }, { value: '', label: '2000$+' }]}
        filterStates={filterStates}
        setFilterStates={props.setFilterStates}
      />
      <CommonFilter
        label="Sq meter"
        minFilterName="minSqm"
        maxFilterName="maxSqm"
        minFilterValues={[{ value: '', label: '0' }, { value: 500, label: '500' }, { value: 1000, label: '1000' }, { value: 1500, label: '1500' }, { value: 2000, label: '2000' }]}
        maxFilterValues={[{ value: 500, label: '500' }, { value: 1000, label: '1000' }, { value: 1500, label: '1500' }, { value: '', label: '2000+' }]}
        filterStates={filterStates}
        setFilterStates={props.setFilterStates}
      />
      <BedroomFilter filterStates={filterStates} setFilterStates={props.setFilterStates} />
      <div className="text-center mt-5">
        <button className="w-75 p-2 filter-save-btn border-0 cursor-pointer" onClick={props.onSaveClick}>Save Filters</button>
      </div>
    </div>
  )
}

export default Filters;