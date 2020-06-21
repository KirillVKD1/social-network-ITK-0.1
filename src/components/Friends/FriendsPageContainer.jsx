import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage';
import { setCurrentFriendsPage, unFollow, getUsers,toggleInProgress } from '../../Redux/friendsReducer'
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthReadirect';
import { compose } from 'redux';


class FriendsPageContainer extends React.Component {

    componentDidMount() {                 //Vizivaetsa odin raz pri sozdanii object iz classa  

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return (
            <>
                {(this.props.isFetching === true) ? <Preloader /> : null}
                <FriendsPage friends={this.props.friends}  //peredaet v FriendsPage propsi
                    pageSize={this.props.pageSize}
                    totalFriendsCount={this.props.totalFriendsCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unFollow={this.props.unFollow}
                    setFriends={this.props.setFriends}
                    reRender={this.reRender} 
                    inProgress={this.props.inProgress}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {//beret iz redux store state 

    return {

        friends: state.friendsPage.friends,
        currentPage: state.friendsPage.currentPage,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        pageSize: state.friendsPage.pageSize,
        isFetching: state.usersPage.isFetching, 
        inProgress:state.friendsPage.inProgress,

    }
}
/* 
let withRedirect = withAuthRedirect(FriendsPageContainer)//HOC (oborachivaet componenty)

export default connect(mapStateToProps,//prinimaet vse chto exportiryetsa iz friendsReducer
    {
        unFollow,
        setCurrentFriendsPage,
        getUsers,

    })(withRedirect);
 */
export default compose(
    connect(mapStateToProps, { unFollow, setCurrentFriendsPage, getUsers,toggleInProgress }), //connect prinimaet vse chto exportiryetsa iz friendsReducer
    withAuthRedirect,
)(FriendsPageContainer)