import React, { Component } from 'react';

import Header from './Header';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Footer from './Footer';


export default class BaseLayout extends Component {



  render() {
    return (
      <div>
        <Header/>
        {/*
        <div className='middleDiv'>
          <LeftSideBar campaigns = {[1,2,3,4,5]}/>

            {this.props.children}

          <RightSideBar/>
        </div>
        */}
        {this.props.children}
        <Footer/>
      </div>
    );
  }

}
