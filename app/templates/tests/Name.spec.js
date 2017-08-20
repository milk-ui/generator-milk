import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import { mount } from 'enzyme';

import <%= ComponentName %> from '../src';

/**
 * mount react component, and return a dom wrapper
 * @param {Object} props custom render props
 */
function mountComponent(props) {
  // prepare render props
  const renderProps = assign(
    {},
    props
  );
  // mount dom node wrapper
  const domWrapper = mount(
    <<%= ComponentName %> {...renderProps} />
  );

  return domWrapper;
}

describe('<%= ComponentName %>', () => {
  describe('render', () => {
    it('should render correctly', (done) => {
      // reference: https://github.com/milk-ui/milkui-button/blob/master/tests/Button.spec.js#L31
      expect(1).to.be(1);
      done();
    });
  });


  describe('control', () => {
    it('should control correctly', (done) => {
      expect(1).to.be(1);
      done();
    });
  });


  describe('api', () => {
    it('should api can be used', (done) => {
      expect(1).to.be(1);
      done();
    });
  });
});