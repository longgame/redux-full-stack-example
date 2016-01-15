import _ from 'underscore';
import React, { Component, PropTypes } from 'react';

import Button from '../vitamins/Button';
import Dropdown from '../vitamins/Dropdown';
import Menu from '../vitamins/Menu';
import Item from '../vitamins/Item';

const occupations = {
  11000: 'Management',
  13000: 'Business and Financial Operations',
  15000: 'Computer and Mathematical',
  17000: 'Architecture and Engineering',
  19000: 'Life, Physical, and Social Science',
  21000: 'Community and Social Services',
  23000: 'Legal Services',
  25000: 'Education',
  27000: 'Arts and Design',
  28000: 'Media, Sports, Entertainment',
  29000: 'Healthcare',
  33000: 'Protective Services',
  35000: 'Food Preparation',
  37000: 'Building and Maintenance',
  39000: 'Cosmetics and Personal Care',
  41000: 'Sales',
  43000: 'Administrative Support',
  45000: 'Agriculture and Forestry',
  53000: 'Transportation',
  55000: 'Military'
};

module.exports = React.createClass({
  render: function() {
    return (
      <Dropdown className='ui search selection dropdown'>
        <input type='hidden' name='category' />
        <i className='dropdown icon' />
        <div className='default text'>Category</div>
        <Menu>
          {
            _.map(occupations, (category, code) => {
              return (
                <Item data-value={ code }>
                  <label>{ category }</label>
                </Item>
              );
            })
          }
        </Menu>
      </Dropdown>
    );
  }
});
