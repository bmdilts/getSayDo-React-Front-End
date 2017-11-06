import React, { Component } from 'react';

import {Link} from 'react-router-dom';

// import Routes from '../../../../assets/javascripts/routes.js.erb';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {},
        // current_user: this.props.current_user
      subheader_left: '',
      subheader_right: '',
      show_time_filter: false,
      // white_header_content: '',
    };
  }

  componentDidMount() {
    fetch(`https://getsaydo-staging.herokuapp.com/tiles.json`, {
      method: 'GET',
      headers: {

      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({current_user: response.current_user, subheader_left: response.subheader_left, subheader_right: response.subheader_right, show_time_filter: response.show_time_filter})
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {

    const {current_user, subheader_left, subheader_right, show_time_filter, white_header_content} = this.state;

    const css1 = `
      .white-header {
        width: 100%;
        /* margin-top: -17px; */
        background-color: white;
        right: 0px;
        height: 60px;
        line-height: 58px;
        text-align: center;
        font-size: 36px;
      }
    `
    const css2 = `
      @media (max-width: '767px') {
        .white-header {
          height: auto;
          font-size: 20px;
        }
      }
    `

    const css3 = `
      .time-period-select-container {
        position: relative;
        height: 16px;
        display: inline-block;
        margin-right: 120px;
      }
    `

    const css4 = `
      .year-field {
        position: absolute;
        top: -4px;
        width: 120px;
        background-color: #DFECF4;
        color: #23737C;
        height: 30px;
        border: none;
      }
    `

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand visible-xs" href="/">
                {/* <img src='../../../../assets/images/logo-inverted-small.png' alt="getSayDo" /> */}
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="pull-left">
                  {(() => {
                    if (current_user) { () => {
                      if (["30 - Manage", "40 - Administrator", "99 - getSayDo Administrator"].includes(current_user.access_level)){
                        console.log('request');

                          <a
                            href=" {/* Routes.campaigns_path() */} "><i className="icon icon-request"></i> request
                          </a>
                      }

                      if (["10 - View", "20 - View", "30 - Manage", "40 - Administrator", "99 - getSayDo Administrator"].includes(current_user.access_level)){
                        console.log('provide');

                          <a
                            href=" {/* Routes.feedback_responses_path() */} " ><i className="icon icon-provide"></i> provide
                          </a>
                      }

                      if (["15 - View only", "20 - View", "30 - Manage", "40 - Administrator", "99 - getSayDo Administrator"].includes(current_user.access_level)) {
                        console.log('view');

                            <a
                              className="active"
                              href="{/* Routes.tiles_index_path() */}" ><i className="icon icon-view"></i> view
                            </a>
                      }

                      if (["40 - Administrator", "99 - getSayDo Administrator"].includes(current_user.access_level)) {
                        console.log('admin');

                          <a
                            href="{/* Routes.admin_companies_path() */}" ><i className="fa fa-lock"></i> admin
                          </a>
                    //   }
                    // }
                  }}}})()}
                </li>

                {/*
                  <li styles={{position: 'absolute', left: '50%', margin-left: '-45px'}}>
                  if (current_user.try(:access_level) != '15 - View only') {
                    <a className="navbar-brand hidden-xs" href="/">
                      <img src='../../../../assets/images/logo-inverted-small.png' alt="getSayDo" />
                    </a>
                  }
                  </li>
                */}
                <li className="dropdown pull-right">
                  {(() => {
                    if (this.state.current_user) {
                      console.log('user');
                      <li className="dropdown pull-right">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                          {this.state.current_user.first_name} {this.state.current_user.last_name}
                          <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" styles={{padding: 0}}>
                          {/*  ""If client has both Buyer and Supplier access, this allows them to switch between the two modes. This should be fleshed out later""

                          <%if current_user.activable_company_modules.length > 1 %>
                            <li styles={{background-color: rgb(223, 236, 244), padding: 0 3px, text-align: right}}>Modules</li>
                            <li role="separator" className="divider" styles={{margin: 0}}></li>
                            <% active_modules_menu_links.each do |lnk| %>
                              <li styles={{background-color: rgb(223, 236, 244), padding: 0 3px, text-align: right, border-bottom: 1px solid lightgray}}>
                                <%= lnk %>
                                <li role="separator" className="divider" styles={{margin: 0}}></li>
                              </li>
                          <% end %>
                          */}
                          <li styles={{padding: '0 3px', textAlign: 'right', borderBottom: '1px solid lightgray'}}>
                            {/* <%= link_to 'My Account', my_profile_path() %> */}
                            <a href="{/* Routes.my_profile_path() */}">My Account</a>
                          </li>
                          <li styles={{padding: '0 3px', textAlign: 'right', borderBottom: '1px solid lightgray'}}>
                            {/* <%= link_to 'Support', "https://getsaydo.desk.com" %> */}
                            <a href='https://getsaydo.desk.com'>Support</a>
                          </li>
                          <li styles={{padding: '0 3px', textAlign: 'right', borderBottom: '1px solid lightgray'}}>
                            {/* <%= link_to "Sign out", destroy_user_session_path, data: {method: :delete} %> */}
                            <a href="{/* Routes.destroy_user_session_path() */}">Sign out</a>
                          </li>
                        </ul>
                      </li>
                    }else {
                        <li className="dropdown pull-right">
                          <ul className="nav navbar-nav pull-right">
                            <li>
                              {/* <%= link_to "Sign In", new_user_session_path %> */}
                              <a href="{/* Routes.new_user_session_path() */}" >Sign In</a>
                            </li>
                          </ul>
                        </li>
                  }
                  })()}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {(() => {
          if (subheader_left || subheader_right || show_time_filter) {
            return
              <div className="row sub-nav">
                <div className="col-md-6 col-xs-6"> subheader_left </div>
                <div className="col-md-6 col-xs-6 text-right"> subheader_right </div>
              </div>
          }
        })()}


        {(() => {
          if ( this.state.white_header_content ) {
              <div className="white-header" >
                /* header_loads_hidden ? "style={{display: 'none'}}" : "" */
                { white_header_content }
              </div>
        }
        })()}


        <style>{css1}</style>
        <style>{css2}</style>
        <style>{css3}</style>
        <style>{css4}</style>


        {/*}
        {(() => {
          if ((ENV['SHOW_MOBILE_SIZE'] && ENV['SHOW_MOBILE_SIZE'].length > 0) || Rails.env.development?) {
              <div styles={{position: 'fixed', top: 0, left: '8px', width: '20px', height: '20px', zIndex: '9999'}} >
                <span className="visible-xs">XS</span>
                <span className="visible-sm">SM</span>
                <span className="visible-md">MD</span>
                <span className="visible-lg">LG</span>
              </div>
          }
        })()}

        */}

      </div>
    );
  }

}
