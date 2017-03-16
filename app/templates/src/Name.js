/**
 * <%= ComponentName %> of rmc-component
 * @author <%- author %>
 *
 * Copyright 2017-2019, RMC Team.
 * All rights reserved.
 */


import React, { Component } from 'react';

import Icon from './svg';
import MobileIcon from './svg/mobile.svg';
import './index.scss';

class <%= ComponentName %> extends Component {
  render() {
    return (
      <div className="rmc-component">
        <Icon className="rmc-component-icon" glyph={MobileIcon} />
        <span className="rmc-component-text">Are you ready!</span>
      </div>
    );
  }
}

export default <%= ComponentName %>;
