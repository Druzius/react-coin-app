import React from 'react';
import './Navbar.css';

export default ({ onSetCoinPair })=> (
  <nav>
    <div onClick={()=> onSetCoinPair('WINGS', 'USD')}>
      WINGS to USD
    </div>

    <div onClick={()=> onSetCoinPair('BTC', 'USD')}>
      BTC to USD
    </div>

    <div onClick={()=> onSetCoinPair('ETH', 'USD')}>
      ETH to USD
    </div>
  </nav>
);
