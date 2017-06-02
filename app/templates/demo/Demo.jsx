/**
 * <%= ComponentName %> of milkui-component
 * @author <%- author %>
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import <%= ComponentName %> from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo-panel">
        <div className="demo-title"><%= ComponentName %></div>
        <div className="demo-description">
          This is a demo page, enjoy it! 😀 ✌️
        </div>
        <div className="demo-item">
          <<%= ComponentName %> />
        </div>
      </div>
    );
  }
}

export default Demo;
