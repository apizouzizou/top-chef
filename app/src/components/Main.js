require('normalize.css/normalize.css');
require('styles/App.css');

import data from '../data.js';

import React from 'react';
import RestaurantComponent from './RestaurantComponent.js'

const numByPage = 6;

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 0};
  }

  render() {
    const restaurants = data.restaurants.slice(numByPage*this.state.page, numByPage*(this.state.page+1))
    return (
      <div className="index">
        {
          restaurants.map(//itère sur les restaurants
            restaurant => <RestaurantComponent restaurant={restaurant}/>
          )
        }
        {this.state.page > 0 && <button onClick={() => this.setState({ page: this.state.page -1 })}>
          -
        </button>}
        {this.state.page * (numByPage+1) < data.restaurants.length && <button onClick={() => this.setState({ page: this.state.page +1 })}>
          +
        </button>}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
