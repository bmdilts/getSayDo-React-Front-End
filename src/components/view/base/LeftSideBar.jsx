import React, { Component } from 'react';

// import Routes from '../../../../assets/javascripts/routes.js.erb';

import LeftSideBarItem from './LeftSideBarItem';

export default class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
    };
  }

  render() {

    const { campaigns } = this.state;

    return (
      <div>
        {/* This is the left side bar containing the companies and campaigns! */}
        <div class="sidebar">
          <div class="top-bar" style="display: none;">
            {/* <%= link_to "Sort", "#" %> */}
            <a href='#'>Sort</a>
          </div>
          <div class="sidebar-title">All Campaigns</div>
          <div class="panel-group" id="accordion">
            {/*
            <% @campaigns.each do |campaign| %>
              <%= render partial: "shared/tiles_sidebar_item", locals: { item: campaign } %>
            <% end %>
            */}
            {campaigns.map((campaign, index) => (
              <LeftSideBarItem item={campaign} />
            ))}
            <div class="bottomShadow"></div>
          </div>
        </div>
      </div>
    );
  }

}
