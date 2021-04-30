import React from 'react';
import { mount } from 'enzyme';
import Filters from '../../components/Filters';

describe('Filters test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Filters filterStates={{}} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Filters should render', () => {
    expect(wrapper.find('div.filters').length).toBe(1);
  });

  it('save filter button should render', () => {
    expect(wrapper.find('div.filters > div> button').length).toBe(1);
  })

  it('Should render price filter', () => {
    expect(wrapper.find('div.Price').length).toBe(1);
  })

  it('Should render sqm filter', () => {
    expect(wrapper.find('div.Sq').length).toBe(1);
  })

  it('Bedroom Filters should render label', () => {
    expect(wrapper.find('div.bedroom-filter-label').text()).toBe('No. of Bedrooms');
  })

});