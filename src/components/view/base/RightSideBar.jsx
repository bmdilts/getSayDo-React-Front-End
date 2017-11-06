import React, { Component } from 'react';

import ReactDOM from 'react-dom'

import { NavLink } from 'react-router-dom';

export default class RightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div class="sidebarRight">
          <div class="dividerContentHolder"></div>
          <div className='rightHeader'>OVERVIEW</div>
          <NavLink to='/'>
            <div class="buttonRightSidebar AnalyticsButton" onClick={this.onClick}>
              Analytics
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar EngagementButton" onClick={this.onClick}>
              Engagement
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar HealthButton" onClick={this.onClick}>
              Health
            </div>
          </NavLink>

          <div className='rightHeader'>OVERALL DASHBOARDS</div>
          <NavLink to='/'>
            <div class="buttonRightSidebar CategoriesButton" onClick={this.onClick}>
              Categories
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar BenchmarkingButton" onClick={this.onClick}>
              Benchmarking
            </div>
          </NavLink>

          <div className='rightHeader'>SUPPLIER DASHBOARDS</div>
          <NavLink to='/comments'>
            <div class="buttonRightSidebar CommentsButton" onClick={this.onClick}>
              Comments
            </div>
          </NavLink>
          <NavLink to='/'>    {/*removed feedback from trends button, do that on css too*/}
            <div class="buttonRightSidebar TrendsButton active" onClick={this.onClick}>
              Trends
            </div>
          </NavLink>
          <NavLink to='/map'>       {/*removed Geographic from map button, do that on css too*/}
            <div class="buttonRightSidebar MapButton" onClick={this.onClick}>
              Heat Map
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar SegmentsButton" onClick={this.onClick}>
              Segments
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar ScoresButton" onClick={this.onClick}>
              Scores
            </div>
          </NavLink>

          <div className='rightHeader'>ACTIONS</div>
          <NavLink to='/'>
            <div class="buttonRightSidebar DownloadButton" onClick={this.onClick}>
              Download
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar PostButton" onClick={this.onClick}>
              Post
            </div>
          </NavLink>
          <NavLink to='/'>
            <div class="buttonRightSidebar ImproveButton" onClick={this.onClick}>
              Improve
            </div>
          </NavLink>
        </div>
      </div>
    );
  }

}
