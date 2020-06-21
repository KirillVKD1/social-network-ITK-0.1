import React from 'react';
import {updateMyMessage } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthReadirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMyMessage: (newMessageBody) => {
            dispatch(updateMyMessage(newMessageBody));
        }
    }
}
 

export default compose(       //compose vizovet Dialogs i zakinet ego v withAuthRedirect,result iz withAuth perekidivaetsa v connect(posledovatelnost vajna) i t.d.
    
connect(mapStateToProps, mapDispatchToProps),       
withAuthRedirect
) 
(Dialogs)
