import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import CoinPicker from './CoinPicker';

class app extends Component {
  state = {
    fromCoin: 'WINGS',
    toCoin: 'USD',
  }

  setFrom = event=> this.setState({ fromCoin: event.target.value })
  setTo = event=> this.setState({ toCoin: event.target.value })

  render() {
    return (
      <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
        <CoinPicker fromCoin={this.state.fromCoin}
                    toCoin={this.state.toCoin}
                    setFrom={this.setFrom}
                    setTo={this.setTo}/>
      </div>
    );
  }
}



export default app;
