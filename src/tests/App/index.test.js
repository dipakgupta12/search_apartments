import React from 'react';
import { mount } from 'enzyme';
import App from '../../components/App';

describe('App tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <App />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render Search and filter bars', () => {
    expect(wrapper.find('div.header').length).toBe(1);
  });

  it('Should render Search and filter bars', () => {
    expect(wrapper.find('div.search-and-filter').length).toBe(1);
  });

  it('Should render Apartments', () => {
    expect(wrapper.find('div.apartments').length).toBe(1);
  })

});