import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather';

const CITY_CODES = {
  '北京': 101010100,
  '上海': 101020100,
  '广州': 101280101,
  '深圳': 101280601
}

class CitySelector extends React.Component {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        {
          Object.keys(CITY_CODES).map(
            cityName => (
              <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
            )
          )
        }
      </select>
    );
  }

  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
  }

  onChange(ev) {
    const cityCode = ev.target.value;
    this.props.onSelectCity(cityCode);
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSelectCity: (cityCode) => {
    dispatch(weatherActions.fetchWeather(cityCode));
  }
});

export default connect(null, mapDispatchToProps)(CitySelector);
