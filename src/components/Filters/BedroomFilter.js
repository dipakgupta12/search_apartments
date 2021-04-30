import React from 'react';

function BedroomFilter(props) {
  const { filterStates = {}} = props;
  return (
    <>
      <div className="fs-4 text-center fw-500 bedroom-filter-label">
        No. of Bedrooms
      </div>
      <div className="d-flex border mx-3 bedroom-filter">
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === '' && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: '' })}>Todos</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 1 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 1 })}>1+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 2 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 2 })}>2+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 3 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 3 })}>3+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 4 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 4 })}>4+</div>
        <div className={`p-3 flex-fill cursor-pointer ${filterStates.bedrooms === 5 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 5 })}>5+</div>
      </div>
    </>
  )
}

export default BedroomFilter;