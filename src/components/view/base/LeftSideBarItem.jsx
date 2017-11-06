import React, {PropTypes} from 'react';

export default class LeftSideBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      current_user: "John",
    }
  }

  calculate_opposite_stats = () => {
    return ""
  }

  // Return hexidecimal color based on item.saydo_score


  saydo_color_for_score = (score, white_for_other = false) => {
    let score_colors = [
      { r: 115, g: 0, b: 0 },
      { r: 211, g: 41, b: 40 },
      { r: 240, g: 76, b: 50 },
      { r: 248, g: 148, b: 32 },
      { r: 189, g: 214, b: 49 },
      { r: 135, g: 196, b: 64 },
      { r: 0, g: 154, b: 71 },
      { r: 0, g: 65, b: 0 }
    ]

    let row = '';
    let norm_factor = '';
    let range = '';
    if (score >= 0 && score <= 50) {
      row = 0
      norm_factor = 0
      range = 50
    }else if (score >= 51 && score <= 57) {
      row = 1
      norm_factor = 50
      range = 6
    }else if (score >= 58 && score <= 64) {
      row = 2
      norm_factor = 57
      range = 6
    }else if (score >= 65 && score <= 71) {
      row = 3
      norm_factor = 64
      range = 6
    }else if (score >= 72 && score <= 78) {
      row = 4
      norm_factor = 71
      range = 6
    }else if (score >= 79 && score <= 85) {
      row = 5
      norm_factor = 78
      range = 6
    }else if (score >= 86 && score <= 92) {
      row = 6
      norm_factor = 85
      range = 6
    }else if (score >= 93 && score <= 100) {
      row = 7
      norm_factor = 92
      range = 6
    }


    const color = (row, norm_factor, range) => {
      if (row && norm_factor) {
        ["r", "g", "b"]
          .map((rgb) => { (score_colors[row][rgb] + (score - norm_factor) * (score_colors[row + 1][rgb] - score_colors[row][rgb]) / range).to_s })
          .join
      }else if (white_for_other) {
        "ffffff"
      }else {
        "dfecf3"
      }
    }
    return "#" + color;
  }

  render() {
    {/*
    const {item, current_user} = this.state;

    const children = () => {
      if (item.displayable_campaign_groups()) {
        return item.displayable_campaign_groups(current_user, calculate_opposite_stats);
      }else if (item.displayable_contact_groups()) {
        return item.displayable_contact_groups(current_user, calculate_opposite_stats);
      }else {
        return [];
      }
    }

    const panel_heading_or_tr_data_attr = (item) => {
      if (item.instanceof(Campaign)) {
        return "data-campaign-id=#{item.id}";
      }else if (item.instanceof(CampaignGroup)) {
        return "data-campaign-group-id=#{item.id}";
      }else if (item.instanceof(ContactGroup)) {
        return "data-contact-group-id=#{item.id}";
      }
    };
    */}
    return (  {/*}
      <div>
        <div className="panel panel-default">
          <div className="panel-heading" panel_heading_or_tr_data_attr  >
            <div className="accordionValue"
              style= {{backgroundColor: `${this.saydo_color_for_score(item.saydo_score(current_user)) }` }}>
              { item.saydo_score(current_user, calculate_opposite_stats) }
            </div>

            <div className={`accordionTitle ${ item.instanceof(Campaign) ? "campaign-title" : '' }`}>

            {(() => {
              if (item.instanceof(Campaign)) {
                {/*  <%= link_to(item.opposite_company_name(current_user), tiles_details_path(details_param(item))) %>
                */} /*
              } else if (item.instanceof(CampaignGroup) && !(item.name)){
                {/* Link to tiles_details_path with details_param(item)

                  link_to(item.is_a?(CampaignGroup) && item.name.blank? ? item.campaign.name : item.name, tiles_details_path(details_param(item)))
                */ /*
              }
            })()}

              {/* <% if item.is_a?(Campaign) %>
                <% if @duck && @duck[:name] == item.opposite_company_name(current_user) %>
                  <%= active_link_to(item.opposite_company_name(current_user), tiles_details_path(details_param(item))) %>
                <% else %>
                  <%= link_to(item.opposite_company_name(current_user), tiles_details_path(details_param(item))) %>
                <% end %>
              <% elsif item.is_a?(CampaignGroup) && item.name.blank? %>
                <% if @duck && @duck[:name] == item.campaign.name %>
                  <%= active_link_to(item.campaign.name, tiles_details_path(details_param(item))) %>
                <% else %>
                  <%= link_to(item.campaign.name, tiles_details_path(details_param(item))) %>
                <% end %>
              <% else %>
                <% if @duck && @duck[:name] == item.name %>
                  <%= active_link_to(item.name, tiles_details_path(details_param(item))) %>
                <% else %>
                  <%= link_to(item.name, tiles_details_path(details_param(item))) %>
                <% end %>
              <% end %> */ /*
            </div>

            {(() => {
              if (children) {
                return
                <a className="accordionArrow collapsed"
                  dataToggle="collapse"
                  href={`${String(item.class)}-${item.id}`}>
                  <i className="fa" ariaHidden="true"></i>
                </a>
              }
            })()}
            <div className="clearfix"></div>
          </div> {/* /.panel-heading */  /*

          {(() => {
            if (children) {
              <div id={`${String(item.class)}-${item.id}`} className="panel-collapse collapse">
                <div className="panel-body">
                  {children.map((child) => {
                    <LeftSideBarItem item={child} />
                  })}
                </div>
              </div>
            }
          })()}
        </div>
      </div>
      */
    );
  }
}
