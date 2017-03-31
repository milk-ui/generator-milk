/**
 * <%= ComponentName %> of milk-component
 * @author <%- author %>
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component } from 'react';

import Icon from './svg';
import MobileIcon from './svg/mobile.svg';
import './index.scss';

class <%= ComponentName %> extends Component {
  render() {
    return (
      <div className="milk-component">
        <Icon className="milk-component-icon" glyph={MobileIcon} />
        <span className="milk-component-text">Are you ready!</span>
      </div>
    );
  }
}

export default <%= ComponentName %>;
