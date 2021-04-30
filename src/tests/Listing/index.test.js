import React from 'react';
import { mount } from 'enzyme';
import Listing from '../../components/Listing';

describe('Listing tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Listing />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render Search and filter bars', () => {
    expect(wrapper.find('div.search-and-filter').length).toBe(1);
  });

  it('Should render Apartments', () => {
    expect(wrapper.find('div.apartments').length).toBe(1);
  })

});