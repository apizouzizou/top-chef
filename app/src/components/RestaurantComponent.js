;

import React from 'react';

require('styles//Restaurant.css');

class RestaurantComponent extends React.Component {
  render() {// les props c'est les objects déclarés à l'appel du composant
    return (
      <div className="restaurant-component">
        <h2>{this.props.restaurant.name}</h2>
        <p>{this.props.restaurant.zipcode}</p>
        <p>{this.props.restaurant.stars}/5 stars</p>
        <img src={'https://u.tfstatic.com/restaurant_photos/389/258389/169/612/restaurant-c-restaurantzaal-6aaf5.jpg'} />
        <p>{this.props.restaurant.deal.title}</p>
        <p>{this.props.restaurant.deal.is_menu ? "has a menu": "no menu"}</p>
        <p>{this.props.restaurant.deal.is_special_offer ? "has a special offer": "no special offer"}</p>
      </div>
    );
  }
}

RestaurantComponent.displayName = 'RestaurantComponent';

// Uncomment properties you need
// RestaurantComponent.propTypes = {};
// RestaurantComponent.defaultProps = {};

export default RestaurantComponent;
