/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import List from '../../src/index';

describe('List component', () => {
  const props = {
    height: 400,
    width: 400,
    items: [
      'item1',
      'item2',
      'item3',
      'item4',
    ],
  };
  it('is rendered'); /* , () => {
    const wrapper = mount(<List {...props} />);
    expect(wrapper).to.exist;
  }); */
});
