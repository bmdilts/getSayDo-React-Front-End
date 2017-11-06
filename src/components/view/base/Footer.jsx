import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='footer'>
        <div className="row legend gradient">
          <span >Below Expectations</span>
          <span>Lukewarm Expectations</span>
          <span >Exceeds Expectations</span>
        </div>
      </div>
    );
  }

}
