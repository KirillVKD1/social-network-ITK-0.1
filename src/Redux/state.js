import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";




let store = {

    _state: {


        friendsPage: {
            friendsArray: [
                { id: 1, name: 'Kirill', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ZXTZqx5wxj5vd6KCWvzNNQltYyC_QE25CUIme43vO2UaRpzH' },
                { id: 3, name: 'Ksusha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3v6XhsEkR7P3bF_ZJuOSQAV95COmNb3oIRQagiKQnQRvoQ0r7' },
                { id: 4, name: 'Tanya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsRvOkDMqe5MjIwFuA8jMcw1XtNN5QzGJMfrn4vHLaCMXvDnYo' },
                { id: 5, name: 'Pete', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuct08CINjvdNIM97ctViwKSBKUcGJMtPtkVK8lSWB1vbYtoJc' },
                { id: 6, name: 'Vasya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6qAuLvAKDf3H2imBOA8luhL__CeDNkGwLv8s7-8Xv4nXlt3XF' },
                { id: 7, name: 'Dmitry', img: 'https://ak9.picdn.net/shutterstock/videos/1013260079/thumb/1.jpg' },


            ],
        },


        profilePage: {

            newPostText: 'stateValue',

            postArray: [
                { like: 1, message: 'Hi' },
                { like: 2, message: 'Hello' },
                { like: 2, message: 'Privet' },

            ],


        },//!!!


        dialogsPage: {

            newWordText: 'stateValueMessages',


            messagesArray: [
                { id: 1, message: 'Hi', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, message: " Chrome doesn't allow extensions to play with special Chrome pages like this one", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ZXTZqx5wxj5vd6KCWvzNNQltYyC_QE25CUIme43vO2UaRpzH' },
                { id: 1, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one", img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 1, message: 'bonjour', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ZXTZqx5wxj5vd6KCWvzNNQltYyC_QE25CUIme43vO2UaRpzH' },
                { id: 1, message: "Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour Chrome doesn't allow extensions to play with special Chrome pages like this one Chrome doesn't allow extensions to play with special Chrome pages like this one bonjour", img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, message: '...', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ZXTZqx5wxj5vd6KCWvzNNQltYyC_QE25CUIme43vO2UaRpzH' },

            ],

            dialogsArray: [
                { id: 1, name: 'Kirill', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2ZXTZqx5wxj5vd6KCWvzNNQltYyC_QE25CUIme43vO2UaRpzH' },
                { id: 3, name: 'Ksusha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3v6XhsEkR7P3bF_ZJuOSQAV95COmNb3oIRQagiKQnQRvoQ0r7' },
                { id: 4, name: 'Tanya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsRvOkDMqe5MjIwFuA8jMcw1XtNN5QzGJMfrn4vHLaCMXvDnYo' },
                { id: 5, name: 'Pete', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuct08CINjvdNIM97ctViwKSBKUcGJMtPtkVK8lSWB1vbYtoJc' },
                { id: 6, name: 'Vasya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6qAuLvAKDf3H2imBOA8luhL__CeDNkGwLv8s7-8Xv4nXlt3XF' },
                { id: 7, name: 'Dmitry', img: 'https://ak9.picdn.net/shutterstock/videos/1013260079/thumb/1.jpg' },
            ],



        },

    },

    getState() {
        return this._state;
    },

    _reRender() {
        alert('f');
    },
  
    subscribe(observer) {
        this._reRender = observer;

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        /* friendsReducer() */
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._reRender(this._state);
            

    }
}


export default store;
window.store = store;

 
 /*  //pobykvenni perenos iz valueArea v state
     updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
         this._reRender(this._state);
     },
     
        addMyMess(myMessValue) {
            let newMessage = {
                id: 1,
                message: myMessValue,
    
            };
            this._state.dialogsPage.messagesArray.push(newMessage);
            this._reRender(this._state);
        }, 
     addPost(postMessage) {

         let newPost = {
             id: 5,
             message: postMessage,
             like: 2
         };

         this._state.profilePage.postArray.push(newPost);
         this._state.profilePage.newPostText = '';//obnylenie v UI

         this._reRender(this._state);
     }, */



