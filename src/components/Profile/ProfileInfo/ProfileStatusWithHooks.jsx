import React, { useState,useEffect } from 'react';



const ProfileStatusWithHooks = (props) => {

    //useState(false);  /govorit o tom chto bydem ispolzovat state v func komponente

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status); 

    useEffect(()=>{ //useEffect vipolnaetsa posle togo kak komponenta otresyetsa(t.e. posle togo, kak vernetsa jsx razmetka)
        setStatus(props.status)
    },[props.status] );//Vtorim argymentom v useEffect ykazivaetsa ot chego zavisit useEffect(t.e. esli props.status polychaet izmeneniya - zapyskaetsa func useEffect)
                        //esli zavisimost ostavit pystoi< vipolnitsa odin raz,esli ne stavit pystoi massiv< vipolnaetsa vsegda

    const activateEditMode = () => {

        setEditMode(true)
        /*  this.setState({ //v argyment funczii peredaetsa tot element stata,kotorii v dannom slychae izmenivshis doljet obnovitsa, sam izmenit state, vzav dannie
             editMode: true,//setState asinhronen, t.e. on vipolnaetsa otdelno ot vsego, i vipolnitsa pod konec funczii
         })
         this.forceUpdate  // forceUpdate govorit react perezagryzit vse, NE ispolzovat'!!!! */
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div >
            {(!editMode) ?
                <div onDoubleClick={activateEditMode} >{props.status || "Add your status"}</div> :// || - znachit esli net props pokazat add status
                <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}  ></input></div>
                //onBlur vizivaetsa pri najatii za predelami bloka 
                //autoFocus avtomaticheski ystanavlivaet focus na blok pri aktivazii
            }



        </div>
    )
}

export default ProfileStatusWithHooks;