import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Status from '../status.js';
import {fetchWeatherStarted, fetchWeatherSuccess, fetchWeatherFailure, fetchWeather} from '../actions.js';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
  switch(status) {
    case Status.LOADING: {
      return <div>天气信息请求中……</div>;
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
        </div>
      );
    }
    case Status.FAILURE: {
      return <div>天气信息装载失败</div>;
    }
    default: {
      throw new Error('unexpected status ' + status);
    }
  }
};

Weather.propTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  lowestTemp: PropTypes.string.isRequired,
  highestTemp: PropTypes.string.isRequired
}

const mapStateTop = (state) => {
  const weatherData = state.weather;

  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  };
}

export default connect(mapStateTop)(Weather);
