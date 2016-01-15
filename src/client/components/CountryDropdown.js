import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import iso3166 from 'iso-3166-2';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';
import Flag from '../vitamins/Flag';

module.exports = React.createClass({
  render: function() {
    const { logoutAction, ...props } = this.props;
    const countries = _.sortBy(iso3166.data, (country) => country.name);
    
    return (
      <Dropdown className='ui search selection dropdown'>
        <input type='hidden' name='country' />
        <i className='dropdown icon' />
        <div className='default text'>Select Country</div>
        <Menu>
          {
            _.map(countries, (country, code) => {
              return (
                <Item data-value={ code }>
                  <Flag country={ country.name } />
                  { country.name }
                </Item>
              );
            })
          }
        </Menu>
      </Dropdown>
    );
  }
});
