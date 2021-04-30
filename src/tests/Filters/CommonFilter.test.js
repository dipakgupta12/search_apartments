import React from 'react';
import { mount } from 'enzyme';
import CommonFilter from '../../components/Filters/CommonFilter';

describe('Common Filter test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <CommonFilter
        label="price"
        minFilterName="minPrice"
        maxFilterName="maxPrice"
        minFilterValues={[{ value: '', label: '0$' }, { value: 500, label: '500$' }, { value: 1000, label: '1000$' }, { value: 1500, label: '1500$' }, { value: 2000, label: '2000$' }]}
        maxFilterValues={[{ value: 500, label: '500$' }, { value: 1000, label: '1000$' }, { value: 1500, label: '1500$' }, { value: '', label: '2000$+' }]}
        filterStates={{}}
      />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Common Filters should render', () => {
    expect(wrapper.find('div.price').length).toBe(1);
  })

  it('Should render right label', () => {
    expect(wrapper.find('div.price').text()).toBe('price');
  })

  it('Should render right sub label', () => {
    expect(wrapper.find('div.min-price').text()).toBe('Min price');
    expect(wrapper.find('div.max-price').text()).toBe('Max price');
  })

  it('Should render select option correctly', () => {
    expect(wrapper.find('select.min-price-select').length).toBe(1);
    expect(wrapper.find('select.max-price-select').length).toBe(1);
  })

});
