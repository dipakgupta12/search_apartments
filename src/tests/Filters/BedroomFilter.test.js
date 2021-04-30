import React from 'react';
import { mount } from 'enzyme';
import BedroomFilter from '../../components/Filters/BedroomFilter';

describe('Bedroom Filter test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BedroomFilter filterStates={{}} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Bedroom Filters should render label', () => {
    expect(wrapper.find('div.bedroom-filter-label').text()).toBe('No. of Bedrooms');
  })

  it('Should render filter', () => {
    expect(wrapper.find('div.bedroom-filter').length).toBe(1);
  })

});
