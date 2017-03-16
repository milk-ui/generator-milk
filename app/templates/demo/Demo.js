/**
 * <%= ComponentName %> of rmc-component
 * @author <%- author %>
 *
 * Copyright 2017-2019, RMC Team.
 * All rights reserved.
 */

import React, { Component } from 'react';

import <%= ComponentName %> from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo-panel">
        <div className="demo-title">Title</div>
        <div className="demo-description">
          Fake Page 😀.
        </div>
        <div className="demo-item">
          <<%= ComponentName %> />
        </div>
      </div>
    );
  }
}

export default Demo;
