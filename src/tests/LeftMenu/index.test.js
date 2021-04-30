import React from 'react';
import { mount } from 'enzyme';
import LeftMenu from '../../components/LeftMenu';

describe('Left Menu test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <LeftMenu leftMenuOpen={true} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Side menu should render', () => {
    expect(wrapper.find('div.left-menu-open').length).toBe(1);
  });

});