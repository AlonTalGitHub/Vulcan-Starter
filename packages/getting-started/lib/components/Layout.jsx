import React from 'react';
import { Components, replaceComponent, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="sidebar"><Components.Nav/></div>
    <div className="main-content">{children}</div>
  </div>
);

replaceComponent('Layout', Layout);