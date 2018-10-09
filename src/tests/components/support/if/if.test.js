import React from 'react';
import { shallow } from 'enzyme';
import If from '../../../../components/support/if';

import '../../../config';

describe('[Support] If', () => {
  const children = 'hello, world!'

  it('renders null if test is false', () => {
    const wrapper = shallow(<If test={false} children={children} />);
    expect(wrapper.debug()).toBe("");
  });

  it('renders children if test is true', () => {
    const wrapper = shallow(<If test={true} children={children} />);
    expect(wrapper.debug()).toEqual(children);
  });
});
