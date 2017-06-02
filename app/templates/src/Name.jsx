/**
 * <%= ComponentName %> of milkui-component
 * @author <%- author %>
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';

import Icon from './svg';
import MobileIcon from './svg/mobile.svg';
import './index.scss';

class <%= ComponentName %> extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    return (
      <div className="<%= name %>">
        <Icon className="<%= name %>__icon" glyph={MobileIcon} />
        <span className="<%= name %>__text">Are you ready!</span>
      </div>
    );
  }
}

export default <%= ComponentName %>;
