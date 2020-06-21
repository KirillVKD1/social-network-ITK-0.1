import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow,  setCurrentPage, toggleInProgress, requestUsers } from '../../Redux/usersReducer';
import Users from './Users.js';
import Preloader from '../Common/Preloader/Preloader';
import { getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getInProgress } from '../../Redux/usersSelectors';


class UsersContainer extends React.Component {

    
    componentDidMount() {     debugger              //Vizivaetsa odin raz pri sozdanii object iz classa 
       this.props.requestUsers (this.props.currentPage,this.props.pageSize);
    }

    onPageChanged=(pageNumber)=> { 
        this.props.requestUsers (pageNumber,this.props.pageSize);
    }

    render() { 
    
        return (
            <>
                {(this.props.isFetching === true) ? <Preloader /> : null}
                
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow} 
                    toggleInProgress = {this.props.toggleInProgress} 
                    inProgress = {this.props.inProgress}


                />
            </>)
    }
}

/* let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching, 
        inProgress : state.usersPage.inProgress

    }
}   */

let mapStateToProps = (state) => {//

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state), 
        inProgress : getInProgress(state),
    }
} 




export default connect(mapStateToProps, //prinimaet vse chto exportiryetsa iz usersReducer//eto func iz react redux
    {
        follow, //to je samoe chto i '{follow: follow}' peredaet object s ssilkami na follow iz redux
        unFollow,
        setCurrentPage,
        toggleInProgress,  
        requestUsers,
    })(UsersContainer);