import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,

    }

    activateEditMode = () => {
        this.setState({ //v argyment funczii peredaetsa tot element stata,kotorii v dannom slychae izmenivshis doljet obnovitsa, sam izmenit state, vzav dannie
            editMode: true,//setState asinhronen, t.e. on vipolnaetsa otdelno ot vsego, i vipolnitsa pod konec funczii
        })
        /* this.forceUpdate */ // forceUpdate govorit react perezagryzit vse, NE ispolzovat'!!!!
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e) => {
        debugger
        this.setState({
            status: e.currentTarget.value

        })

    }     //iz compdidUpdate est' starii props i state i novii props i state
    componentDidUpdate(prevProps,prevState) { //vizivaetsa pri update(dobavlenii chego to novogo) v componente
        if (prevProps.status !== this.props.status) {
            this.setState({ status:this.props.status})
        }

    }

    render() {
        return (
            <div >
                {(!this.state.editMode) ?
                    <div onDoubleClick={this.activateEditMode}>{this.props.status || "Add your status"}</div> :
                    <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input></div>//onBlur vizivaetsa pri najatii za predelami bloka 
                    //autoFocus avtomaticheski ystanavlivaet focus na blok pri aktivazii
                }



            </div>
        )
    }

}
export default ProfileStatus;