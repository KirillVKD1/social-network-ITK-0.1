import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus,savePhoto } from '../../Redux/profileReducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthReadirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() { //ybiraem dyblirovanie koga i zakidivaem vse v method

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
    }//esli ne peredaetsa id(t.e otkrivaetsa exact Profile) peredaetsa moi profile(7785)
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {//srabativaet edinojdi, kogda component montiryetsa. esli komponenta ostaetsa toi je no vnytri nee proishodat izmeneniya eta func ne vizovetsa
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {//vizivaetsa pri kajdom izmenenii props (ispolzovat ostorojno)//poetomy stavim yslovie 
    if (this.props.match.params.userId != prevProps.match.params.userId) {//sravnenie novih i starih props
      this.refreshProfile();
    }
  }


  render() {


    return (
      <div>
        {(this.props.isFetching === true) ? <Preloader /> : null}
        <Profile {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </div>
    )
  }
}

/* 

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
}) */

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.usersPage.isFetching,
  status: state.profilePage.status,
  id: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(                 //sm dialogsContainer
  connect(mapStateToProps, { getProfile, getStatus, updateStatus,savePhoto }),
  withRouter,
  withAuthRedirect
)
  (ProfileContainer)
/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer) //HOC

AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent); //withRouter zakinet v ProfileContainer dannie iz url(to, chto napisano v adresnoi stroke, chtobi ispolzovat ego) i vernet ee

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent);

 */