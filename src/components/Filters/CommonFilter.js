import React from 'react';


function CommonFilter(props) {
  const {label, minFilterName, maxFilterName, minFilterValues, maxFilterValues, filterStates = {}} = props;
  return (
    <>
      <div className={`fs-4 text-center fw-500 ${label}`}>
        {label}
      </div>
      <div className="d-flex p-2 justify-content-around">
        <div>
          <div className={`text-center min-${label}`}>Min {label}</div>
          <div className="text-center">
            <select className={`select min-${label}-select`} name={minFilterName} placeholder={minFilterName} value={filterStates[minFilterName]} onChange={(e) => props.setFilterStates({ ...filterStates, [e.target.name]: e.target.value })}>
              {minFilterValues.map((ft) => <option key={ft.value} value={ft.value} disabled={filterStates[maxFilterName] && Number(filterStates[maxFilterName]) < ft.value}>{ft.label}</option>)}
            </select>
          </div>
        </div>
        <div>
          <div className={`text-center max-${label}`}>Max {label}</div>
          <div className="text-center">
            <select className={`select max-${label}-select`} name={maxFilterName} placeholder={maxFilterName} value={filterStates[maxFilterName]} onChange={(e) => props.setFilterStates({ ...filterStates, [e.target.name]: e.target.value })}>
              {maxFilterValues.map((ft) => <option key={ft.value} value={ft.value} disabled={ft.value && filterStates[minFilterName] && filterStates[minFilterName] > ft.value}>{ft.label}</option>)}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonFilter;
