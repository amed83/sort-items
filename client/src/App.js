import React, { Component } from 'react';
import Navbar from './Navbar';
import DashboardContainer from './DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className='app-container__main' >
            <Navbar />
            <DashboardContainer />

      </div>
    );
  }
}

export default App;
